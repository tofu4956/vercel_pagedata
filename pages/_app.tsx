import { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import "../styles/index.css";
import "../styles/global.css";
import "highlight.js/styles/dark.css";
import { MDXProvider } from "@mdx-js/react";

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <MDXProvider>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </MDXProvider>
  );
}
