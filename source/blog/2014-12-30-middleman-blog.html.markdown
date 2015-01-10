---
title: Middlemanを使ってブログを作る
author: Naoto Kondou
date: 2014/12/30
thumb:
category: middleman
tags: middleman, ruby
featured: true
---

2014年ももう終わりますが、なんか来年からブログを一つ増やしたいなーと思っていたのでこのサイトを[Middleman](http://middlemanapp.com/jp/)で作ってみた。
Middlemanで静的HTMLを生成して、Githubのgh-pagesブランチにpushし公開するという流れ。とても楽でいい感じ。WordPressのブログも持っているけど、記事を書くのがとてもめんどくさくて書く気分が高まってこないと書かない。

MiddlemanはMarkDownで記事を書けるし、`middleman`コマンドでローカルサーバーが立ち上がり、アップ前の確認もらくらく。

## まずはMiddlemanをインストール
```
gem install middleman
```

## Blog機能の追加
Gemfile内に以下を追加

```
gem "middleman-blog"
```

以下のコマンドを叩くと必要なものは一式インストールされる。あとは、お好きな様にレイアウトやデザインを整える。

```
middleman init MY_BLOG_PROJECT --template=blog
```

## 記事の生成
記事の生成は`middleman article TITLE`というコマンドでも生成できるが、sourceフォルダ内に「2014-12-30-middleman-blog.html.markdown」のような名前のファイルを作りその中に記事を書いていく。
記事のテンプレートは以下のような感じ。

```
---
title: My Middleman Blog Post
date: 2014/12/30
category: middleman
---

Hello World
```


## 記事の公開
記事の公開はGithubのgh-pagesブランチに必要なファイルだけをpushしたい。必要なファイルはbuildフォルダ内のファイル。これだけをgh-pagesにpushしたいんだけど、初めどうやったらいいのか分からず悶々としてましたが、以下のコマンドで必要なファイルだけをpushしてくれる。これは便利だ。

```
middleman deploy
```

config.rbに以下を追加する。

```
# deploy setting
activate :deploy do |deploy|
  deploy.method = :git
  deploy.branch = 'gh-pages'
end
```

もしも、gh-pages以外のブランチにpushしたい場合は、deploy.branchの値を変更してあげればいい。

## 感想
Middlemanはとにかく簡単に記事を書けるので、今のところとても好き。ローカルサーバーもLivereload機能があったり、sassも自動でコンパイルされるし、素晴らしい。
基本的な使い方や導入方法は[公式ページ](http://middlemanapp.com/jp/basics/blogging/)に詳しく書いてあるので参考にする。
色々な設定やらは、`config.rb`ファイル内に記述していく。機能の追加などもGemfile内に記述するだけでとても楽ちん。

これからは、ブログの更新頻度を高めることができそう。