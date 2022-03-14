import Link, { LinkProps } from "next/link";
import { ReactNode, useRef } from "react";
import { YouTube } from "./post/youtube";
import markdownStyles from "./markdown-styles.module.css";
import { CodePen } from "./post/codepen";
import * as runtime from "react/jsx-runtime";
import { runSync } from "@mdx-js/mdx";
import type { MDXModule } from "mdx/types";
import Script from "next/script";

type Props = {
  content: string;
};

type YouTubeProps = {
  width: number;
  height: number;
  id: string;
  autoplay: number;
};

type CodePenProps = {
  id: string;
};

// const AAAA = dynamic(() => import("./twitter/test"), { ssr: false });

//MDX components
const MDXcomponents = {
  Link: (
    props: JSX.IntrinsicAttributes & LinkProps & { children?: ReactNode }
  ) => <Link {...props} />,
  YouTube: (props: YouTubeProps) => <YouTube {...props} />,
  CodePen: (props: CodePenProps) => <CodePen {...props} />,
};

const PostBody = ({ content }: Props): JSX.Element => {
  const mdxModule: MDXModule = runSync(content, runtime);
  const Content = mdxModule.default;
  const containerElem = useRef(null);
  return (
    <>
      <Script
        src="https://platform.twitter.com/widgets.js"
        onLoad={() => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (window as any).twttr.widgets.load(containerElem.current);
        }}
      />
      <div className="mx-auto max-w-3xl">
        <div className={markdownStyles["markdown"]}>
          <Content components={MDXcomponents} />
        </div>
      </div>
    </>
  );
};

export default PostBody;
