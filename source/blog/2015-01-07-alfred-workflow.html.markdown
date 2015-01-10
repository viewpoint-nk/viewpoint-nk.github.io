---
title: Alfredの便利なWorkflow
author: Naoto Kondou
date: 2015/01/07
thumb:
category: alfred
tags: alfred, mac, app
featured: true
---


macユーザーであれば、[Alfred](http://www.alfredapp.com/)を使っている人は多いのではないかと思います。最近やっとAlfredのWorkflow機能の便利さに気がついて有料版を購入しました。有料版は1700円くらい(15/01/07時点)とそんなに高くもないので、Alfredを使っている人は有料版を購入すると色々作業が捗ります。

## Font Awesome
- [alfred2-font-awesome-workflow](https://github.com/ruedap/alfred2-font-awesome-workflow)

ちゃちゃっとアイコンを使いたい場合に便利な[Font Awesome](http://fortawesome.github.io/Font-Awesome/)。
AlfredのWorkflowを使うととても楽になります。上記のGitHubのページからダウンロードでき、使い方もGif画像があるので便利さがすぐに分かると思います。というかすごく便利です。
こんな感じで使えます。

![](150107/alfred01.gif)

### オプション
いくつかオプションがあり、Enter時にどうするかを変更することができます。

- Enterのみ = classをペースト
- Enter + Cmd = Font Awesomeのページを開く
- Enter + Ctrl = 文字参照をペースト
- Enter + Shift = 文字コードをペースト

[Font Awesome WorkflowがPhotoshopやIllustratorでもペースト可能に](http://blog.ruedap.com/2013/11/18/font-awesome-workflow-for-web-designers)


## Can I use
- [alfred-caniuse-workflow](https://github.com/willfarrell/alfred-caniuse-workflow)

[caniuse](http://caniuse.com/)はブラウザの対応状況を調べるときに大活躍します。AlfredのWorkflowに入れておくといちいちcaniuseのページにいかずとも調べることができます。

![](150107/alfred02.png)

## IP Address
- [IP Address Workflow](http://dferg.us/ip-address-workflow/)

IPアドレスを調べるときに地味に便利。Alfredで「ip」と入力して、Enterを押すとクリップボードにコピーされる。

![](150107/alfred03.png)

## CDN
- [alfred-cdn-workflow](https://github.com/willfarrell/alfred-cdn-workflow)

色々なCDNをすぐに調べることができるWorkflow。これもけっこう便利です。

### 使えるコマンド
- cdn all {query} - Search all CDNs
- cdn js {query} - Search JsDelivr CDN (www.jsdelivr.com/)
- cdn cf {query} - Search Cloud Flare CDN (cdnjs.com)
- cdn g {query} - Search Google CDN
- cdn msn {query} - Search MSN CDN

![](150107/alfred04.png)

## Dash
- [Dash](https://itunes.apple.com/jp/app/dash-docs-snippets/id458034879?mt=12&ign-mpt=uo%3D4)

Dashはいろいろなリファレンスにアクセスすることのできるアプリです。DashとAlfredの相性はとても良くて最高です。
Alfredと連携させるには、まずは[Dash](https://itunes.apple.com/jp/app/dash-docs-snippets/id458034879?mt=12&ign-mpt=uo%3D4)をインストールします。

Dashを立ち上げると、リファレンスを参照したい言語やらツールやらを選択できるので、使いたいものをダウンロードします。
次に、「integration」というタブに移動し、Alfredを選択します。すると自動的にAlfredのWorkflowに追加されます。

![](150107/alfred05.png)

使い方も簡単です。調べたいキーワードを入力するだけです。

![](150107/alfred06.gif)

他にもAlfredのWorkflowはたくさんあるので、ぐぐってみると自分に合ったものがすぐに見つかると思う。
Alfredは今まで無料版をずっと使っていたけど、Workflowだけでも有料版にしてよかった気がする。