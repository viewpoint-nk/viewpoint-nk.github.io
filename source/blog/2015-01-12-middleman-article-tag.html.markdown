---
title: Middlemanで現在記事のタグを表示する
author: Naoto Kondou
date: 2015/01/12
thumb:
category: middleman
tags: middleman, ruby
featured: true
---

現在の記事の「tags」で設定しているタグを表示したい場合、[リファレンス](https://middlemanapp.com/jp/basics/blogging/#記事一覧)には以下のコードくらいしかタグの記述が見当たらなかった。

```html
<ul>
  <% blog.tags.each do |tag, articles| %>
    <li>
      <h5><%= tag %></h5>
      <ul>
        <% articles.each do |article| %>
          <li><a href="<%= article.url %>"><%= article.title %></a></li>
        <% end %>
      </ul>
  <% end %>
</ul>
```

このコードでは、今までのすべての記事のタグが表示されてしまう。現在の記事のタグだけを取得したい。
Rubyは全然触ったことがないので、なかなか悩んだ結果以下のコードで実現できた。

```ruby
<%= current_page.data.tags %>
```

このコードで現在の記事のタグを表示できる。表示はできるが、それぞれのタグをHTMLで囲うことはできない。それを実現するためには、タグの文字列を配列にし繰り返し処理をしなくてはならない。

以下のように`split()`と`each`を使うと解決する。

```html
<% current_page.data.tags.split(", ").each do |tag, articles| %>
  <li><a href="/tags/<%= tag %>.html"><%= tag %></a></li>
<% end %>
```

これで求めている結果を取得できる + タグページへのリンクも付与することができる。

Ruby勉強しよう。