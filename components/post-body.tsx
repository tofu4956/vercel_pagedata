import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Link, { LinkProps } from "next/link";
import { Fragment, ReactNode, useEffect, useState } from "react";
import { YouTube } from "./post/youtube";
import markdownStyles from "./markdown-styles.module.css";
import { CodePen } from "./post/codepen";
import * as runtime from 'react/jsx-runtime';
import {run, runSync} from "@mdx-js/mdx"
import React from "react"
import { MDXProvider } from "@mdx-js/react";
import type {MDXModule, MDXComponents} from 'mdx/types'

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
}

//MDX components
const MDXcomponents = {
  Link: (
    props: JSX.IntrinsicAttributes & LinkProps & { children?: ReactNode }
  ) => <Link {...props} />,
  YouTube: (props: YouTubeProps) => <YouTube {...props} />,
  CodePen: (props: CodePenProps) => <CodePen {...props} />,
};

const PostBody = ({ content }: Props): JSX.Element => {
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
  const Content = mdxModule ? mdxModule.default : Fragment;

  useEffect(() => {
    ;(async () => {
      setMdxModule(await run(content, runtime))
    })()
  }, [content])

  return (
    <div className="max-w-3xl mx-auto">
      <div className={markdownStyles["markdown"]}>
      <MDXProvider >
        <Content components={MDXcomponents}/>
      </MDXProvider>
      </div>
    </div>
  );
};

export default PostBody;
