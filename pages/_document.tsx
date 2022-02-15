import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="ja">
        <Head>
          <link rel="stylesheet" href="../components/prism.css"/>
          <link href="https://fonts.googleapis.com/css2?family=M+PLUS+1&family=M+PLUS+Rounded+1c:wght@700&display=optional" rel="stylesheet"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
