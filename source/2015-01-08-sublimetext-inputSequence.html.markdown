---
title: Sublime Text 連番を振れるプラグイン「InputSequence」が便利
author: Naoto Kondou
date: 2015/01/08
thumb:
category: code
tags: sublimetext
featured: true
---

みなさんお馴染みSublime Text。いろいろなプラグインがありますが、どこかのブログで見かけた「InputSequence」という連番を振れるプラグインが便利です。
`Cmd + Ctrl + 0`のショートカットで実行できます。

連番は数字だけでなく、アルファベットも振ることができます。
class名に連番振るときなどに大活躍しています。以下のような感じで使えます。

![](150108/sublimetext01.gif)

## インストール
インストールはSublime TextのPackage Controlから行います。が、Package Controlには追加されていないようなので、以下の手順でインストールします。

- 1. `Cmd + Shift + P`でPackage Controlを開く
- 2. Add Repositoryを入力
- 3. 下部にURL入力欄が出るので、`https://github.com/kope88/InputSequence.git`を入力

## 使い方
作成者さんが日本の方のようなので、GitHubのREADMEを見るとすべてわかります。

- [InputSequence](https://github.com/kope88/InputSequence)

連番を振りたい箇所を`Cmd + D`選択し、`Cmd + Ctrl + 0`で実行できて$の後に連番を振りたいテキストを入力すればOKです。

- $01 = 01,02,03,04.....
- $1 = 1,2,3,4.....
- $a = a,b,c,d.....
- $A = A,B,C,D.....
- $0a = 0a,0b,0c,0d.....
- $05 = 05,06,07,08.....
- $-5 = -5,-6,-7,-8.....