import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const PostTitle = ({ children }: Props): JSX.Element => {
  return (
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-title tracking-tighter leading-tight md:leading-none mb-12 text-center">
      {children}
    </h1>
  );
};

export default PostTitle;
