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
import { serialize } from 'next-mdx-remote/serialize'
import PostType from '../types/post'
const oenbed = require('remark-oembed'); 

type Items = {
  [key: string]: string
}

export default async function markdownToHtml(markdown: Items, data: any) {
  const result = await serialize(markdown['content'], {
    mdxOptions: {
      remarkPlugins:[remarkMdx, remarkGfm, remarkSlug, [remarkToc, {tight: true}], remarkEmoji],
      rehypePlugins: [rehypeHighlight],
    },
    scope: data
  })

  return result
}