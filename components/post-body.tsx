import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";
import markdownStyles from "./markdown-styles.module.css";

type Props = {
  content: MDXRemoteSerializeResult<Record<string, unknown>>;
};

//MDX components
const MDXcomponents = {
  Link: (
    props: JSX.IntrinsicAttributes & LinkProps & { children?: ReactNode }
  ) => <Link {...props} />
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
