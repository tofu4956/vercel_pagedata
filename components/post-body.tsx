import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";
import {YouTube} from "./post/youtube"
import markdownStyles from "./markdown-styles.module.css";
import "katex/dist/katex.min.css";

type Props = {
  content: MDXRemoteSerializeResult<Record<string, unknown>>;
};


type YouTubeProps = {
  width: number
  height: number
  id: string
  autoplay: number;
}

//MDX components
const MDXcomponents = {
  Link: (
    props: JSX.IntrinsicAttributes & LinkProps & { children?: ReactNode }
  ) => <Link {...props} />,
  YouTube: (props: YouTubeProps) => <YouTube {...props} />,
};

const PostBody = ({ content }: Props): JSX.Element => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className={markdownStyles["markdown"]}>
        <MDXRemote {...content} components={MDXcomponents} />
      </div>
    </div>
  );
};

export default PostBody;
