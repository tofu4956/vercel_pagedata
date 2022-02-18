import remarkGfm from "remark-gfm";
import remarkEmoji from "remark-emoji";
import remarkToc from "remark-toc";
import remarkSlug from "remark-slug";
import rehypeHighlight from "rehype-highlight";
import remarkMdx from "remark-mdx";
import { serialize } from "next-mdx-remote/serialize";

type Items = {
  [key: string]: string;
};

export default async function markdownToHtml(markdown: Items, data: any) {
  const result = await serialize(markdown["content"], {
    mdxOptions: {
      remarkPlugins: [
        remarkMdx,
        remarkGfm,
        remarkSlug,
        [remarkToc, { tight: true }],
        remarkEmoji,
      ],
      rehypePlugins: [rehypeHighlight],
    },
    scope: data,
  });

  return result;
}
