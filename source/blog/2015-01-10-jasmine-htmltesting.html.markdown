---
title: jasmineでHTMLを読み込んでのテスト
author: Naoto Kondou
date: 2015/01/10
thumb:
category: jasmine
tags: jasmine, javascript
featured: true
---

[前回の記事](./jasmine-basic.html)では、[Jasmine](http://jasmine.github.io/)の導入と基礎についてまとめました。その時にはJSのみのテストを行いましたが、JSの機能はHTMLに付与して使用するので当然HTML側と合わせてテストしなくてはですね。

HTMLのテストをする場合に、いちいちテストHTMLにテスト対象のHTMLをコピペするのはめんどすぎる。
なのでHTMLをテストコードに読み込んでテストできるようにします。

## 機能の作成
サンプルとしてアコーディオンを作成し、それをJasmineでテストしてみます。
機能としては、`accordion-trigger`というclassをclickしたら直後にある`accordion-list`というclassがスライドするというもの。

**index.html**

```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>accordion</title>
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
	<script src="sample.js"></script>
</head>
<body>
	<div>
		<p class="accordion-trigger">Trigger01</p>
		<ul class="accordion-list">
			<li>Trigger01</li>
			<li>Trigger01</li>
			<li>Trigger01</li>
		</ul>

		<p class="accordion-trigger">Trigger02</p>
		<ul class="accordion-list">
			<li>Trigger02</li>
			<li>Trigger02</li>
			<li>Trigger02</li>
		</ul>
	</div>
</body>
</html>
```

**sample.js**

```js
$(function(){
	$(".accordion-list").hide();
	$(".accordion-trigger").on("click", function(){
		$(this).next(".accordion-list").stop().slideToggle();
	});
});
```

## テストの作成
上記で作成したアコーディオン機能をJasmineでテストします。
ディレクトリ構成は以下。

```
jasmine_test
│  index.html
│  sample.js
│  sample_test.js
│
├─jasmine
│  jasmine.css
│  jasmine.js
│  jasmine-html.js
│  jasmine-jquery.js
│  boot.js
```

### テストHTMLの作成
まずは、[Jasmineをダウンロード](https://github.com/jasmine/jasmine)する。ダウンロードしたファイルから必要な以下4ファイルを読み込む

- lib/jasmine-core/jasmine.css
- lib/jasmine-core/jasmine.js
- lib/jasmine-core/jasmine-html.js
- lib/jasmine-core/boot.js

HTMLを読み込む機能はこれだけでは使えません。
jasmineのjquery用拡張機能である**jasmine-jquery**を読み込む必要があります。以下から最新版を取得する。

- [jasmine-jquery](https://github.com/velesin/jasmine-jquery/downloads)

上記の**テスト用ファイル**と、**テスト対象JS**(sample.js)、**テストコード**(sample_test.js)をすべて読み込んだテストHTMLを作成する。

**jasmine_test.html**

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>jasmin sample</title>
    <link rel="stylesheet" type="text/css" href="jasmine/jasmine.css">
    <script type="text/javascript" src="jasmine/jasmine.js"></script>
    <script type="text/javascript" src="jasmine/jasmine-html.js"></script>
    <script type="text/javascript" src="jasmine/boot.js"></script>
    <script type="text/javascript" src="sample.js"></script>
    <script type="text/javascript" src="sample_test.js"></script>
</head>
<body>

</body>
</html>
```

### テストコードの作成
テスト対象HTMLを読み込むためにいつくかコードを追加する。

1. `jasmine.getFixtures().fixturesPath`この指定でHTMLのパスを指定する。(デフォはspec/javascripts/fixtures/)
2. `readFixtures()`で読み込むHTMLを指定する
3. body要素に適当な要素を作成し、そこに読み込んだHTMLを突っ込む

**sample_test.js**

```js
(function($){
	// 読み込むHTMLのパス ①
	jasmine.getFixtures().fixturesPath = './';
	// HTMLの読み込み ②
	var html = readFixtures("index.html");

	// テスト前に実行
	beforeEach(function(){
		// 読み込んだHTMLを適当な要素に突っ込む ③
		$("body").append("<div id='test-wrap'></div>");
		$("#test-wrap").html(html);
	});

	// テスト後に実行
	afterEach(function(){
		$("#test-wrap").remove();
	});

	describe('アコーディオンのテスト', function() {
		it('accordion-listが非表示になっている', function(){
			expect($(".accordion-list").css("display")).toEqual("none");
		});
	});
})(jQuery);
```

`beforeEach()`と`afterEach()`はコメントにも書いた通り、それぞれのテスト前とテスト後に実行できる。

_注意点_
`readFixtures()`を使う場合、ローカルで実行すると**XMLHttpRequest**エラーが発生してしまいます。
そのため、ローカルサーバーを立てるなどして実行する。


## 実行結果
テストでは、アコーディオンコンテンツが初期状態で非表示になっているかをテストしています。

![](150110/jasmine01.png)

ちゃんと非表示になっていてテストが通っています。

## イベント時のテスト
clickイベント時のテストもやってみます。sample_test.jsに以下の`it()`関数を追加する。

```js
it('accordion-triggerクリック時、accordion-listが表示される', function(){
	expect($(".accordion-list").css("display")).toEqual("none");
	$(".accordion-trigger").trigger("click");
	expect($(".accordion-list").css("display")).toEqual("block");
});
```

`trigger("click")`でclickトリガーを発生させ、clickした際の状態をテストすることができます。
こんな感じでイベント時のテストは`trigger()`を使うことで確認することができる。
