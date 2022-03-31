import Document, { Html, Head, Main, NextScript } from "next/document";
import { CLOUDFLARE_TOKEN } from "../lib/constants";

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="ja">
        <Head>
        </Head>
        <body className="dark:bg-stone-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
