---
title: '作った'
excerpt: '作った'
coverImage: 'None'
date: '2021-09-29T12:36:00.000Z'
ogImage: 'None'
---

なんかとりあえず文章書きたかったんじゃ...

### 別にnoteとかでもよくないか

noteは[やらかしてる](https://note.jp/n/n3e6451c9b147)し、hideは記事の更新が怪しい感じだったんで勉強がてら作ってみた　まあほぼコピーだけどな！

### 技術的な話

[blog-starter-typescript](https://github.com/vercel/next.js/tree/canary/examples/blog-starter-typescript) を流用(見た目よかったし...)

remarkjsのプラグインマシマシにしようと思ったが、remark 14はPure ESMなのでNext.jsに導入不可能！(Next.jsはESM非対応らしい)まあこんなもんすよ

> Jeez, my friend, you are not just using TypeScript. You are using Jest and ts-node, which (most importantly Jest) are bad atmodules.
 It’s okay using TS and ts-node with modules, but Jest is really really bad at it.
 There are lots of ways around it, as can be seen in that FAQ, but I’d say: use the previous version of remark for now. It’s all possible, but a bit of a messy situation, which might not be worth your time now

[https://github.com/remarkjs/remark/issues/819](https://github.com/remarkjs/remark/issues/819)
上はJestの話だけどNext.jsでも同様なのかなあ(同じエラーが発生するので)


#### ダークモード実装

ここを参考に:[Next.jsとtailwindを使ってダークモードをサクッと実装する](https://qiita.com/10mi8o/items/4be3a69731aed0692e40)

多分永続化とか細かい仕様に対応させた方が良い気がするのでそのうちやる

~~とりあえずNext.jsのESM正式対応待ちということで...~~ next12でPure ESM対応！移行しました(2021/12/12)


