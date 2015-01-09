---
title: jasmineでjavascriptテストを書く
author: Naoto Kondou
date: 2015/01/09
thumb:
category: code
tags: jasmin, javascript
featured: true
---

[Jasmine](http://jasmine.github.io/)とはJS用のテストフレームワークです。
Jasmineの他にもJasmineJavaScriptのテストフレームワークは色々な種類がありますが、認知度が高いのは以下のフレームワークでしょうか。

- [QUnit](http://qunitjs.com/)
- [Mocha](https://github.com/mochajs/mocha)
- [JsTestDriver](https://code.google.com/p/js-test-driver/w/list?can=1&q=)

上記のフレームワークと比べてもJasmineは人気の高いフレームワークです。
現在案件でも使用しているので、Jasmineの導入から使い方までをおさらいしとこうと思う。
実際のは、テストランナーやタスクランナーなどと組み合わせているけど、長くなりそうなので今回は基本のみ。

## メリット
- 品質を担保できる
- 機能が追加された場合にエラーを検知できる

メリットとしてはこんな感じ。それぞれの機能の品質は担保され、いろんな状況を考慮しながらテストを書くと変化にも強くなる。
「あの機能もつけてー」と意味分からない注文がきた場合でも、元の機能が死んでいないかを検知することができます。

## デメリット
- 工数が増える
- 学習コストが少しかかる

テスト用に別でコードをかかなきゃいけないので、工数はどうしても増えてしまう。
テストコードを書いたことがない場合は、ドキュメントを読んだりとそんなに高くは無いが、学習コストもかかってしまう。

テストを導入するかどうかは、その案件で必要なのかどうかと工数を確保できるのかという部分が大きいと思う。

## インストール
- [jasmine](https://github.com/jasmine/jasmine)

まずは、Githubから必要なファイルをダウンロード。

```
git clone https://github.com/pivotal/jasmine.git
```

## テストするJS
テストの対象となるJSが必要なので適当に作成します。

**sample.js**

```
function calc(a, b){
	return a + b;
}
```

## テストコードの作成
テストコードを作成します。

**sample_test.js**

```
describe('関数のテスト', function() {
	it('1 + 1 = 2である', function(){
		expect(calc(1, 1)).toBe(2);
	});
});
```

### jasmine テストコードについて
- jasmineのテストコードは**Suite**(クラス)と**Spec**(メソッド)の２つで構成されている
- Suiteは`describe`関数、Specは`it`関数で宣言する
- 値のチェックは`expect(x).toBe(x);`で実行する
	- `expect()`にテストしたい値、`toBe()`に期待する結果を入れる
	- `toBe()`以外にも多数のメソッドがある

## テストHTMLの作成
GitHubからダウンロードしたファイルで、必要なファイルはlibフォルダ内にある4つのファイル。

- jasmine.css
- jasmine.js
- jasmine-html.js
- boot.js

上記4つのファイルに加え、テスト対象のJSファイル(sample.js)、テストコードファイル(sample_test.js)も読み込んだHTMLファイルを作成します。
`boot.js`は`jasmine.js`より後で、且つテスト対象コードよりも前に読み込む。

**index.html**

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

ディレクトリはこのような感じになります。

```
jasmine_test
│  index.html
│  sample.js
│  sample_test.js
│
├─jasmine
│  boot.js
│  jasmine-html.js
│  jasmine.css
│  jasmine.js
```

## 実行結果
index.htmlをブラウザで確認してみるとテスト結果が表示されます。

![](150109/jasmine01.png)

## テストメソッド
sample_test.jsの中では、`toBe()`というテストメソッドを使いました。これは、foo === 1であるかどうかをテストできます。
jasmineのテストメソッドは他にもたくさんあります。

| メソッド | 内容 |
|:-----------|:------------|
| expect(foo).toBe(1); | foo === 1 であるか |
| expect(foo).toEqual(1); | 文字列が正規表現にマッチするか |
| expect(foo).toMatch(/^[a-z]+$/); | foo === 1 であるか |
| expect(element).toExist(); | 要素が存在するか |
| expect(foo.func).toBeDefined(); | 変数が定義済みか |
| expect(foo.func).toBeUndefined(); | 変数が未定義か |
| expect(foo).toBeNull(); | 変数がnullか |
| expect(foo).toBeTruthy(); | 変数が true 相当の値か（true, 1, "a" など） |
| expect(foo).toBeFalsy(); | 変数が false 相当の値か（false, 0, 空文字列など） |
| expect([1, 2, 3]).toContain(3); | 配列が値を含んでいるか |
| expect(foo).toBeLessThan(2); | foo < 2 であるか |
| expect(foo).toBeGreaterThan(0); | foo > 0 であるか |
| expect(3.141592).toBeCloseTo(3, 0); | 小数が有効数字 0 ケタで 3 に等しいか |
| expect(func).toThrow(); | 関数 func が何らかの例外を投げることを期待 |

などなど。これが全量ではなくメソッドは他にもあって様々なことをテストできるようになっています。
とりあえず導入と基礎はこんな感じ。もう少しつっこんだ内容はまたまとめようと思う。

## 参考
- [なぜJavaScriptでテストコードを書くのか？](http://codezine.jp/article/detail/7257)
- [Jasmine使い方メモ](http://qiita.com/opengl-8080/items/cf3acafda9756f4b04c9)
