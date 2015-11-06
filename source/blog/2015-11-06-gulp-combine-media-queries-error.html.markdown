---
title: gulp-combine-media-queriesがこける
author: Naoto Kondou
date: 2015/11/06
thumb:
category: javascript
tags: javascript, node, gulp
featured: true
---

sassのコンパイル時にどうにもgulp-combine-media-queriesがエラーを起こしてしまって、けっこうハマってしまった。

## 環境  
node: v4.2.2  
npm: 2.14.7  
gulp: CLI version 3.9.0  
gulp: Local version 3.9.0  
gulp-combine-media-queries: 3.1.0

## エラー内容
内容は以下のような感じ。

```
buffer.js:167
  throw new TypeError('must start with number, buffer, array or string');
  ^

TypeError: must start with number, buffer, array or string
    at fromObject (buffer.js:167:9)
    at new Buffer (buffer.js:58:10)
    at Transform.transform [as _transform] (/Users/hogehoge/node_modules/gulp-combine-media-queries/index.js:152:21)
    at Transform._read (/Users/hogehoge/node_modules/gulp-combine-media-queries/node_modules/through2/node_modules/readable-stream/lib/_stream_transform.js:184:10)
    at Transform._write (/Users/hogehoge/node_modules/gulp-combine-media-queries/node_modules/through2/node_modules/readable-stream/lib/_stream_transform.js:172:12)
    at doWrite (/Users/hogehoge/node_modules/gulp-combine-media-queries/node_modules/through2/node_modules/readable-stream/lib/_stream_writable.js:237:10)
    at writeOrBuffer (/Users/hogehoge/node_modules/gulp-combine-media-queries/node_modules/through2/node_modules/readable-stream/lib/_stream_writable.js:227:5)
    at Transform.Writable.write (/Users/hogehoge/node_modules/gulp-combine-media-queries/node_modules/through2/node_modules/readable-stream/lib/_stream_writable.js:194:11)
    at DestroyableTransform.ondata (/Users/hogehoge/node_modules/gulp-autoprefixer/node_modules/through2/node_modules/readable-stream/lib/_stream_readable.js:581:20)
    at emitOne (events.js:77:13)
```

以下のissuesに上がっていた内容の通り、gulp-combine-media-queries/index.jsの152目を削除することでひとまずは解決できた。  
[doesn't work with last version sass #19](https://github.com/konitter/gulp-combine-media-queries/issues/19)

この箇所がエラーになる。

```
file.contents = new Buffer(cssJson);
```

issuesに上がっているので、おそらくいずれ解決されるはず。。

