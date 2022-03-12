import remarkGfm from "remark-gfm";
import remarkEmoji from "remark-emoji";
import remarkToc from "remark-toc";
import remarkSlug from "remark-slug";
import rehypeHighlight from "rehype-highlight";
import remarkMdx from "remark-mdx";
import { serialize } from "next-mdx-remote/serialize";
import rehypeKatex from "rehype-katex";

type Items = {
  [key: string]: string | string[] | boolean;
};

export default async function markdownToHtml(markdown: Items, data: any) {
  let contents: string;
  if (typeof markdown["content"] === "string") {
    contents = markdown["content"];
    const result = await serialize(contents, {
      mdxOptions: {
        remarkPlugins: [
          remarkMdx,
          remarkGfm,
          remarkSlug,
          [remarkToc, { tight: true }],
          remarkEmoji,
        ],
        rehypePlugins: [rehypeHighlight, rehypeKatex],
      },
      scope: data,
    });
    return result;
  }
  return;
}
