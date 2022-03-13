import remarkGfm from "remark-gfm";
import remarkEmoji from "remark-emoji";
import remarkToc from "remark-toc";
import remarkSlug from "remark-slug";
import rehypeHighlight from "rehype-highlight";
import remarkMdx from "remark-mdx";
import { serialize } from "next-mdx-remote/serialize";
import {compile} from '@mdx-js/mdx'
import rehypeKatex from "rehype-katex";
import rehypeReact from "rehype-react";
import React, { ReactNode } from "react";
import Link, { LinkProps } from "next/link";
import {YouTube} from "../components/post/youtube"
import {CodePen} from "../components/post/codepen"

type Items = {
  [key: string]: string | string[] | boolean;
};




export default async function markdownToHtml(markdown: Items, data: any) {
    const result = await compile(String(markdown["content"]), {
      outputFormat: 'function-body',
      remarkPlugins: [
          remarkMdx,
          remarkGfm,
          remarkSlug,
          [remarkToc, { tight: true }],
          remarkEmoji,
        ],
      rehypePlugins: [
          rehypeHighlight,
          rehypeKatex,
        ],
    });
    return String(result);
}
