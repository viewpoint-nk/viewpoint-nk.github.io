---
title: javascript Arrayメソッドのまとめ
author: Naoto Kondou
date: 2015/01/24
thumb:
category: javascript
tags: javascript
featured: true
---

[The Good Parts「良いパーツ」によるベストプラクティス](http://www.oreilly.co.jp/books/9784873113913/)を読んだので、
忘れないようにArrayメソッドについてのまとめておく。


## array.concat(item)
自分自身と引数で渡された要素を連結し、新しい配列を返す。

```js
var a = ["a", "b", "c"];
var b = ["e", "f", "g"];
var c = a.concat(b);
// a → ["a", "b", "c"]
// b → ["e", "f", "g"]
// c → ["a", "b", "c", "e", "f", "g"]
```

## array.join(item)
配列から文字列を生成する。
引数には連結時の文字列を指定できる。

```js
var a = ["a", "b", "c"];
var b = a.join("");
var c = a.join("-");
// b → abc
// c → a-b-c
```

## array.pop()
配列の最後から一つ削除する。
配列がからだった場合、`undefined`を返す。

```js
var a = ["a", "b", "c"];
a.pop();	// ["a", "b"]
```

## array.push(item)
配列の最後に値を追加する。
**pushを実行したメソッドそのものを書き換える。**
配列を渡した場合は、そのまま追加される。

```js
var a = ["a", "b", "c"];
var b = a.push("d");
// a → ["a", "b", "c", "d"]
// b → 4

var c = ["d", "e", "f"];
a.push(c);
// a → ["a", "b", "c", "d", ["d", "e", "f"]]
```

## array.reverse()
配列内の値の順番を入れ替えることができる。
その配列自身を返す。

```js
var a = ["a", "b", "c"];
var b = a.reverse(a);
// a →  ["c", "b", "a"]
```

## array.shift()
配列の一番目の値を削除し、それを返す。

```js
var a = ["a", "b","c"];
var b = a.shift(a);
// a → ["b", "c"]
// b → a
```

## array.slice(start,end)
配列の一部からコピーを作成する。
コピーする範囲は引数の、**start**から**end**で指定できる。
endは省略可能で、省略した場合は`array.lenght`となる。

```js
var a = ["a", "b", "c", "d", "e"];
var b = a.slice(1, 3);
var c = a.slice(3);
// a → ["a", "b", "c", "d", "e"]
// b → ["b", "c"]
// c → ["d", "e"]
```

## array.sort(comparefn)
配列内の値をソートし並び替える。
ただし、値が数字の場合文字列として認識されてしまうため、上手くソートされない。

```js
var a = ["c", "a", "d", "b"];
a.sort(a);
// a → ["a", "b", "c", "d"]

var b = ["c", "a", "d", "b", "B", "A", "AA"];
b.sort(b);
// b → ["A", "AA", "B", "a", "b", "c", "d"]

var c = [30, 21, 17, 3, 47];
c.sort(c);
// c → [17, 21, 3, 30, 47]
```

数字の場合は以下でソートする。

```js
var a = [30, 21, 17, 3, 47];
a.sort(function(a, b){
	return a - b;
});
// a → [3, 17, 21, 30, 47]
```

## array.splice(start,deleteCount,item)
配列から要素を削除し、新しい要素に置き換えることができる。
引数の**start**から**deleteCount**までを削除する。
もしも、3番目以降の引数が指定されていたら、削除された部分に置き換える。

```js
var a = ["a", "b", "c", "d"];
var b = a.splice(1, 2);
// a → ["a", "d"]
// b → ["b", "c"]

var c = ["a", "b", "c", "d"];
var d = c.splice(1, 2, "びー", "しー");
// c → ["a", "びー", "しー", "d"]
// d → ["b", "c"]
```
## array.unshift(item)
配列の先頭に要素を追加する。

```js
var a = ["a", "b", "c"];
var b = a.unshift("A", "B");
// a → ["A", "B", "a", "b", "c"]
// b → 5
```
