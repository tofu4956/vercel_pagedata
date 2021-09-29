---
title: '作った'
excerpt: '作った'
coverImage: 'None'
date: '2021-09-29T12:36:00.000Z'
ogImage:
  url: 'None'
---

なんかとりあえず文章書きたかったんじゃ...

### 別にnoteとかでもよくないか

noteは[やらかしてる](https://note.jp/n/n3e6451c9b147)し、hideは記事の更新が怪しい感じだったんで勉強がてら作ってみた　まあほぼコピーだけどな！

### 技術的な話

[blog-starter-typescript](https://github.com/vercel/next.js/tree/canary/examples/blog-starter-typescript) を流用(見た目よかったし...)

remarkjsのプラグインマシマシにしようと思ったが、remark 14はPure ESMなのでNext.jsに導入不可能！(Next.jsはESM非対応らしい)まあこんなもんすよ

#### ダークモード実装

ここを参考に:[Next.jsとtailwindを使ってダークモードをサクッと実装する](https://qiita.com/10mi8o/items/4be3a69731aed0692e40)

多分永続化とか細かい仕様に対応させた方が良い気がするのでそのうちやる

とりあえずNext.jsのESM正式対応待ちということで...

