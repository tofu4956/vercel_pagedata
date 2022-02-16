import {remark} from 'remark'
import html from 'remark-html'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import {unified} from 'unified'
import remarkEmoji from 'remark-emoji'
import remarkToc from 'remark-toc'
import remarkSlug from 'remark-slug'
import rehypeStringify from 'rehype-stringify'
import rehypeHighlight from 'rehype-highlight'
import remarkMdx from 'remark-mdx'
const oenbed = require('remark-oembed'); 

export default async function markdownToHtml(markdown: string) {
  const result = await unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkSlug)
  .use(remarkToc, { tight: true })
  .use(remarkEmoji)
  .use(remarkRehype, { allowDangerousHtml: true })
  .use(rehypeHighlight)
  .use(rehypeStringify, { allowDangerousHtml: true })
  .process(markdown)
  return result.toString()
}