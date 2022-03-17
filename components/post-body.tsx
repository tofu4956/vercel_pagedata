import Link, { LinkProps } from "next/link";
import { Fragment, ReactNode, useEffect, useRef, useState } from "react";
import { YouTube } from "./post/youtube";
import markdownStyles from "./markdown-styles.module.css";
import { CodePen } from "./post/codepen";
import * as runtime from "react/jsx-runtime";
import { run, runSync } from "@mdx-js/mdx";
import type { MDXModule } from "mdx/types";
import Script from "next/script";
import { Twitter } from "./post/twitter";
import { SpeakerDeck } from "./post/speakerdeck";

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
  Twitter: (props: {children?: ReactNode}) => <Twitter {...props} />,
  SpeakerDeck: (props: {src: string, title: string}) => <SpeakerDeck {...props} />
};

const PostBody = ({ content }: Props): JSX.Element => {
  //  const mdxModule: MDXModule = runSync(content, runtime);
  const [mdxModule, setMdxModule] = useState<MDXModule>(runSync(`/*@jsxRuntime automatic @jsxImportSource react*/
  const {jsx: _jsx} = arguments[0];
  function MDXContent(props = {}) {
    const {wrapper: MDXLayout} = props.components || ({});
    return MDXLayout ? _jsx(MDXLayout, Object.assign({}, props, {
      children: _jsx(_createMdxContent, {})
    })) : _createMdxContent();
    function _createMdxContent() {
      return _jsx("div", {
        style: {
          justifyContent: 'center'
        },
        children: " Loading..."
      });
    }
  }
  return {
    default: MDXContent
  };`, runtime));
    const Content = mdxModule.default
    const containerElem = useRef(null);
    useEffect(() => {
      (async () => {
        setMdxModule(await run(content, runtime) as MDXModule);
      })()
    }, [content])
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
