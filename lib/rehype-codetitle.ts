/* eslint-disable @typescript-eslint/ban-ts-comment */
import { visit } from "unist-util-visit";
import { Node } from "unist";
import { Element, Parent } from "hast";

export function rehypeCodetitle() {
  return (tree: Node) => {
    visit(tree, "element", (node: Element, parent: Parent) => {
      if (
        node.tagName === "p"
      ) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        if (node.children[0].tagName === "figcaption" && node.children[0].children) {
          const CodeTitleElement = {
            type: "element",
            tagName: "figcaption",
            properties: {},
            children: [
              {
                type: "text",
                //@ts-ignore
                value: node.children[0].children[0].value
              },
            ],
          }
          node.type = "element"
          node.tagName = "div"
          node.properties = {
            className: "flex"
          };
          //@ts-ignore
          node.children = [CodeTitleElement];
        } else {
          return;
        }
      } else {
        return;
      }
    });
  };
}
