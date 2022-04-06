import remarkGfm from "remark-gfm";
import remarkEmoji from "remark-emoji";
import remarkToc from "remark-toc";
import remarkSlug from "remark-slug";
import rehypeHighlight from "rehype-highlight";
import remarkMdx from "remark-mdx";
import { serialize } from "next-mdx-remote/serialize";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import { rehypeCard } from "./rehype-card";
import remarkDirective from 'remark-directive'
import { remarkDirectiveSerializer } from "./remark-directive-serializer";

type Items = {
  [key: string]: string | string[] | boolean;
};

export default async function markdownToHtml(markdown: Items) {
  const result = await serialize(String(markdown["content"]), {
    mdxOptions: {
      remarkPlugins: [
        remarkMdx,
        remarkSlug,
        [remarkToc, { tight: true }],
        remarkEmoji,
        remarkMath,
        remarkGfm,
        remarkDirective,
        remarkDirectiveSerializer
      ],
      rehypePlugins: [rehypeHighlight, rehypeKatex, rehypeCard],
    },
  });
  return result;
}
