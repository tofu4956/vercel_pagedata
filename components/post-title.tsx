import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const PostTitle = ({ children }: Props): JSX.Element => {
  return (
    <h1 className="mb-12 font-title text-4xl font-bold tracking-tighter leading-tight text-center md:text-5xl md:leading-none lg:text-6xl">
      {children}
    </h1>
  );
};

export default PostTitle;
