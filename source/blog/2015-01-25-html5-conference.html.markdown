---
title: HTML5 Conferenceに行ってきた
author: Naoto Kondou
date: 2015/01/25
thumb:
category: event
tags: html5, javascript, event
featured: true
---

![](150125/HTML5_01.png)

[HTML5 Conference](http://events.html5j.org/conference/2015/1/)に行ってきた。面白そうなセッションがたくさんありましたが、僕が聞いたセッションは以下。

- プリンより滑らか。スムーズなアニメーションの作り方。
- Web Componentsのアクセシビリティ
- 2015年これからの日本のWebサイトパフォーマンスについて
- 【ハンズオン】やってみたら実は簡単！ WebGLで開ける新しい表現

動画や資料は[こちら](http://unsolublesugar.com/20150125/104819/#P2Mm58c.twitter_tweet_original_vertical)にまとめられています。

## プリンより滑らか。スムーズなアニメーションの作り方。
ブライアン・バートルズ: Mozilla Japan

- アニメーションを使うと分かりやすくなる
- 時間を通して情報を伝える
	- 例えばMac OSだとウィンドウを最小化するとどこにウィンドウがいったか分かりやすい

### ユーザーの目に届くまで何が行われているか
- 構文解析
	- DOMツリー
- スタイル決定
	- レイアウト決定
- 描画

### プロパティによってリフローが発生する
cssでアニメションさせる場合は、リフローを避ける。<br>
marginを使うより、transformでアニメーションさせる。

リフローはDeveloper toolsで確認できる。

### svgを使う場合
`iframe`や`object`で読み込むよりも`img`で読み込むようが速い。

### will-changeでレイヤー化
`will-change`を使うと前もってレイヤー化することができる。
transform3d()よりもwill-changeのほうが良い。

[CSS will-changeプロパティについて知っておくべきこと](https://dev.opera.com/articles/ja/css-will-change-property/)

### コンポジター
とても理想的なアニメーションだが、transformとopacityしか対応していない。
ブラウザも限られる。

### Web Animation API
現在はChromeにしか実装されていない。

### まとめ
ブラウザの機能をしっかり把握して、リフローを発生させないことで滑らかなアニメーションを実装できる。

---

## Web Componentsのアクセシビリティ
黒澤 剛志: 株式会社ミツエーリンクス

### Webアクセシビリティとは
特定の環境に依存せずに見れる。<br>
多様なデバイスに対応する。

- タッチスクリーン
- キーボードがないデバイス
- キーボードしかないデバイス
- 音声入出力
- 電子ペーパー

### Webアクセシビリティの3つのポイント
- セマンティクス
- 様々なデバイス・環境でのインタラクション
- 代替コンテンツ

マシンがセマンティクスを理解。ユーザーの環境に合わせて情報・機能を提供。

### Web Componentsとは
ページの構成要素をコンポーネント化にする。コンポーネントを組み合わせてページを構成。

### Web Componentsとアクセシビリティ
- コンポーネント
	- 機能や意味を切り出し
	- コンポーネントのアクセシビリティが高ければ、一定のアクセシビリティを確保できる。

コンポーネントのアクセシビリティを高めることが重要。<br>
**アクセシビリティの基本は同じ。**

例:<br>
プログレスバーであれば、音で作業率が分かる。<br>
WAI-ARIAでセマンティクスを伝える。

- ロール
	- progressbar
- プロパティ
	- aria-valuemin: 最小値
	- aria-valuemax: 最大値
	- aria-valuenow: 現在地

### Custom Elements
- 既存要素の拡張
	- 既存要素のセマンティクスを継承
- 独自要素の拡張
	- Shadow DOM

### Shadow DOM
もともとのツリーとShadow DOMのツリーが合成されたものがページに表示される。

Shadow DOMでセマンティクスを指定するならば、適切なHTML要素を利用する。<br>
適切なHTML要素が使えない場合、[WAI-ARIA](http://www.hitachi.co.jp/universaldesign/ria/ajax/wai-aria/index.html)を利用する。

### まとめ
コンポーネント単位でアクセシビリティを確保しやすくなる可能を持っている。<br>
アクセシビリティの品質を維持・管理できる可能がある。<br>
本質的にはWeb componentsを使わない場合と同じ。

---

## 2015年これからの日本のWebサイトパフォーマンスについて
- 竹洞 陽一郎
- 川田 寛: NTTコムウェア株式会社
- Meco Meco
- 堀 裕司
- 山﨑 真吾

[HTML5 CONFERENCE パフォーマンス部パネルディスカッション 「2015年これからの日本のWebサイトパフォーマンスについて」](http://www.slideshare.net/takehora/html5-conference-43867874)

遅いと分かってからパフォーマンス改善すると、とても工数が掛かってしまい非効率。初めからパフォーマンスを意識して制作したほうが良い。

### 日本のWebパフォーマンスの現状
アメリカは1秒ほどでサイトが表示されるが、日本のサイトは7秒とかかかっている。
いろいろパフォーマンス改善できるツール(圧縮や結合など)が登場しているが、受託の場合運用などの問題で活用できていない。

### パフォーマンス管理
パフォーマンスの計測は最低でも1週間はとる。<br>
時間帯も気にする。昼よりも夜のほうがアクセスが集中するため、**昼だけでなく夜のパフォーマンスも確認する。**

### 今の高速化手法
ビジネスアプローチと技術的アプローチの双方が必要。

- イメージファイルの最適化
- javascriptとCSSの最適化
	- concat + uglify
- ネットワークの最適化
	- HTTPリクエストを減らす
	- CSSスプライト
- マルチバイトとWebフォント
	- 日本語の場合は重いので微妙
- レイアウトのデザイン
	- アメリカでは画像が減ってきている
- モバイル向けWeb
- アニメーション

### まとめ
とにかく通信料を減らすことがパフォーマンスに繋がる。<br>
CSSスプライトもやりすぎない。適度にファイルを分割する。<br>
画像を減らせるか、本当に必要な機能なのかをクライアントと話し合う。<br>
**PCは1MB、モバイルは100KB**

---

## 【ハンズオン】やってみたら実は簡単！ WebGLで開ける新しい表現
- 小山田 晃浩: 株式会社ピクセルグリッド
- 比留間 和也: 面白法人カヤック
- 杉本 雅広
- 原田 直貴: 株式会社Gaji-Labo
- 執行 大介

[WebGL + 3D models by using Three.js Blender Exporter](https://speakerdeck.com/yomotsu/webgl-plus-3d-models-by-using-three-dot-js-blender-exporter)

### THREE.JSハンズオン
映画では要なものをTHREE.JSで考える。

- 役者 → オブジェクト
- カメラ → カメラ
- ライト → ライト
- シーン → シーン
- 再生機 → 再生機

### 初期設定
```js
// レンダラーを生成
var renderer = new THREE.WebGLRenderer();
renderer.setClearColor(0x000000, 0.0);
renderer.setSize(window.innerWidth, window.innerHeight);
```


### カメラの生成
```js
new THREE.PerspectiveCamera(角度, アスペクト比, 手前, 奥行き)
camera.position.y = 100;
camera.position.z = 150;
```

### ライトの設定
```js
// 平行光源
new THREE.DirectionalLight(0xffffff);
```

### シーンの生成
```js
new THREE.Scene();
```

### オブジェクトの生成
```js
// 形
var planeGeometry = new THREE.PlaneBufferGeometry(縦横, 分割数.....);

// 材質
var planeMaterial = new THREE.MeshLambertMaterial({
  color: 0xdddddd
});

// 生成
var plane = new THREE.Mesh(planeGeometry, planeMaterial);

plane.position.y    = -100;
plane.rotation.x    = -Math.PI / 2;
```

### キューブの生成
```js
// 形
var boxGeometry = new THREE.BoxGeometry(50, 50, 50);

// 材質
var boxMaterial = new THREE.MeshLambertMaterial({
  color: cubeColor
});

// 生成
var cube = new THREE.Mesh(boxGeometry, boxMaterial);
```

### シーンに追加
```js
scene.add(plane);
scene.add(cube);
scene.add(light);
```

### カメラの向き
```js
camera.lookAt(cube.position);
```

## アニメーション
```js
(function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.005;

  render();
}());
```

### THREE.JSとBlender
3Dモデルを作成したことがなくても、以外と緩いライセンスで色々な3Dモデルデータが配布されている。

3DモデルデータをWebGL用にコンパイルするためには、exporterを使う。

### BlenderでTHREE.JSを使えるようにする
THREE.JSのAddonをBlender内のAddonにコピーします。<br>
THREE.JSのAddonは、`three.js/utils/exporters/blender`にあります。(io mesh threejsのような名前)

BlenderのAddonは`アプリケーション/Blender.app/Contents/Resources/2.73/scripts/addons`にあるので、THREE.JSのAddonをコピーします。

次にBlenderを開いて`file/user Preferences`を開く。<br>
Addonタブ内のfilderで`three`で検索する。<br>
three.js formatg表示されるので、チェックを入れてSave User Settingsで保存する。これでBlenderでTHREE.JSが有効化される。