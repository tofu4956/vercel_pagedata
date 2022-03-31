import Document, { Html, Head, Main, NextScript } from "next/document";
import { CLOUDFLARE_TOKEN } from "../lib/constants";

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="ja">
        <Head>
          <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon={String(`{"token": ${CLOUDFLARE_TOKEN}}`)} />
        </Head>
        <body className="dark:bg-stone-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
