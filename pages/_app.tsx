import { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import "../styles/index.css";
import "../styles/global.css";
import "highlight.js/styles/a11y-dark.css";
import "katex/dist/katex.min.css";
import Script from "next/script";

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Script
        defer
        strategy="beforeInteractive"
        data-domain="blog.tofu4956.net"
        src="https://internal.tofu4956.net/js/plausible.js"
      />
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
