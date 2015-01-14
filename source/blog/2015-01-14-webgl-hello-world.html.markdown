---
title: WebGL初めの一歩「描画領域のクリア」
author: Naoto Kondou
date: 2015/01/14
thumb:
category: webgl
tags: webgl, javascript
featured: true
---

最近WebGLの勉強をしているけど、なかなか難しい。簡単な図形を描画するだけでもコードはとても冗長になる。
少しずつ慣れていくために、Hello Worldからおさらいする。

## 描画領域のクリア
WebGLにとってのHello Worldが描画領域のクリアでいいのかは分からないけど、取り敢えずそういうことにしておく。

### HTMLの作成
まずは、HTMLを作成する。
`canvas`要素で描画領域を定義し、そこに描画していく。bodyにはonloadが指定され、読み込み完了時に`main()`関数が実行されるようになっている。

**index.html**

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>WebGL Demo</title>
</head>
<body onload="main()">
	<h1>描画領域をクリアする</h1>
	<canvas id="webgl"></canvas>
	<script src="HelloCanvas.js"></script>
</body>
</html>
```


### JSの作成
次にjavascriptプログラムを作成する。
流れとしては以下。

- canvasを取得する
- canvasの領域を指定する
- WebGLコンテキストの取得
- クリアする色の指定
- canvasをクリア

**HelloCanvas.js**

```js
function main(){
	// canvasの取得と領域してい
	var c = document.getElementById("webgl");
	c.width = 500;
	c.height = 500;

	// WebGLコンテキストの取得
	var gl = c.getContext("webgl");

	// クリアする色の指定
	gl.clearColor(0.0, 0.0, 0.0, 1.0);

	// canvasのクリア
	gl.clear(gl.COLOR_BUFFER_BIT);
}
```

これを実行すると500×500の真っ黒い四角形が描画されている。
##### _※表示されない場合は「RERUN」ボタンを押してみてください_

<p data-height="400" data-theme-id="8514" data-slug-hash="NPpRer" data-default-tab="result" data-user="konweb" class='codepen'>See the Pen <a href='http://codepen.io/konweb/pen/NPpRer/'>NPpRer</a> by konweb (<a href='http://codepen.io/konweb'>@konweb</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

## クリアする色の指定
### gl.clearColor(red, green, blue, alpha);
| 引数 | 意味 |
|:-----------|:------------|
| red | 赤の強度（0.0 ~ 1.0） |
| green | 緑の強度（0.0 ~ 1.0） |
| blue | 青の強度（0.0 ~ 1.0） |
| alpha | 透明度（アルファ値0.0 ~ 1.0） |

## canvasをクリア
gl.clear()で指定されたバッファをクリア（塗りつぶす）。クリアする色は`gl.clearColor`で指定する。
指定できる値はいくつかある。

| 引数 | 意味 |
|:-----------|:------------|
| gl.COLOR\_BUFFER_BIT | カラーバッファ |
| gl.DEPTH\_BUFFER_BIT | デプスバッファ |
| gl.STENCIL\_BUFFER_BIT | ステンシルバッファ |

## まとめ
WebGLのHello Worldは他の言語に比べて長い。ただ領域を真っ黒にするだけでも1,2行ではできない。
単純な図形を描画するだけでもとても冗長なコードになってしまう。

[GLSL](https://www.opengl.org/documentation/glsl/)(OpenGL Shading Language)という[シェーディング言語](http://ja.wikipedia.org/wiki/%E3%82%B7%E3%82%A7%E3%83%BC%E3%83%87%E3%82%A3%E3%83%B3%E3%82%B0%E8%A8%80%E8%AA%9E)も覚えなくてはならないし、学習コストは高いかもしれないが覚えたら楽しそうだ。