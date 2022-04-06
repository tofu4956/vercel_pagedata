/* eslint-disable @typescript-eslint/ban-ts-comment */
import { visit } from "unist-util-visit"
import {h} from 'hastscript'
import {Node} from 'unist'


export function remarkDirectiveSerializer(){
  return (tree: Node) => {
    visit(tree, (node) => {
    if (
      node.type === 'textDirective' ||
      node.type === 'leafDirective' ||
      node.type === 'containerDirective'
    ) {
      const data = node.data || (node.data = {})
      //@ts-ignore
      const hast = h(node.name, node.attributes)

      //@ts-ignore
      data.hName = hast.tagName
      //@ts-ignore
      data.hProperties = hast.properties
    }
  })
}
}