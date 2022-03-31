import { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import "../styles/index.css";
import "../styles/global.css";
import "highlight.js/styles/a11y-dark.css";
import "katex/dist/katex.min.css";
import { CLOUDFLARE_TOKEN } from "../lib/constants";
import Script from "next/script";

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Script defer src='https://static.cloudflareinsights.com/beacon.min.js' strategy="beforeInteractive" data-cf-beacon={String(`{"token": ${CLOUDFLARE_TOKEN}}`)} />
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
