---
title: Sassmaticで簡単に画像フィルターを実現
author: Naoto Kondou
date: 2015/01/26
thumb:
category: sass
tags: sass, css
featured: true
---

CSSで画像を加工しようと思ったらけっこう大変です。そこで[Sassmatic](http://sassmatic.com/?utm_content=bufferea092&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer)を使います。SassmaticはCSS3だけで画像に色々なフィルターを掛けることができるライブラリです。

## インストール
GithubからSassmaticをダウンロードします。<br>
必要なファイルは**_sassmatic.scss**です。

```
https://github.com/DarbyBrown/sassmatic.git
```

## 使い方
使い方は簡単で、style.scssなどでcompassと**_sassmatic.scss**とimportで読みこむだけです。

**index.html**

```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>sassmatic</title>
	<link rel="stylesheet" href="css/style.css">
</head>
<body>
	<div class="img-filter01"><img src="img/sample.jpeg" alt="" ></div>
</body>
</html>
```

**style.scss**

```scss
@import "compass";
@import "sassmatic.scss";

.img-filter01 {@extend %filter-sanfran;}
```

これでscssをコンパイルすると画像フィルターが完成です。

これが元画像。

![](150126/sample.jpeg)

## Sanfran
```sass
@extend %filter-sanfran
```

 <div class="img-filter img-filter01">
![](150126/sample.jpeg)
 </div>

## Washout
```sass
@extend %filter-washout
```

 <div class="img-filter img-filter02">
![](150126/sample.jpeg)
 </div>

## Deadwood
```sass
@extend %filter-deadwood
```

 <div class="img-filter img-filter03">
![](150126/sample.jpeg)
 </div>

## Neptune
```sass
@extend %filter-neptune
```

 <div class="img-filter img-filter04">
![](150126/sample.jpeg)
 </div>

## Warming
```sass
@extend %filter-warming
```

 <div class="img-filter img-filter05">
![](150126/sample.jpeg)
 </div>

## Casablanca
```sass
@extend %filter-casablanca
```

 <div class="img-filter img-filter06">
![](150126/sample.jpeg)
 </div>

なんだか余計な背景色がついてしまっていますね。これはdiv要素に画像と同じ幅を指定してあげればOKです。

```css
.img-filter {
	width: 600px;
	marign: 0 auto;
}
```

## Custom Filter
フィルターをカスタムすることもできます。

```scss
.img-filter01{
  @include filter-custom(sepia(100%));
  @include filter-color(#ffb400, 0.5);
  @include filter-vignette(white, 70%, 90%, 3rem);
}
```

 <div class="img-filter img-filter07">
![](150126/sample.jpeg)
 </div>

