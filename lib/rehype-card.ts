/* eslint-disable @typescript-eslint/ban-ts-comment */
import { visit } from "unist-util-visit";
import { Node } from "unist";
import { Element, Parent } from "hast";

export function rehypeCard() {
  return (tree: Node) => {
    visit(tree, "element", (node: Element, index, parent: Parent) => {
      if (
        ["p"].includes(node.tagName) &&
        //@ts-ignore
        node.children[0].properties &&
        //@ts-ignore
        node.children[0].children[0] &&
        typeof index === "number"
      ) {
        //@ts-ignore
        if (
        //@ts-ignore
          node.children[0].properties["href"] ===
        //@ts-ignore
          node.children[0].children[0].value
        ) {
          const cardschildren = {
            type: "element",
            tagName: "a",
            properties: {
              className: ["link-card"],
              //@ts-ignore
              href: node.children[0].properties["href"],
            },
            children: [
              {
                type: "element",
                tagName: "figure",
                properties: {
                  //@ts-ignore
                  dataSrc: node.children[0].properties["href"],
                },
                children: [
                  {
                    type: "text",
                    //@ts-ignore
                    value: node.children[0].children[0].value,
                  },
                ],
              },
            ],
          };
          //@ts-ignore
          parent.children[index] = cardschildren;
        } else {
          return;
        }
      } else {
        return;
      }
    });
  };
}
