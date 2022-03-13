import { ReactNode, FunctionComponent } from "react";

type Props = {
  children?: ReactNode;
};

const Container: FunctionComponent = ({ children }: Props): JSX.Element => {
  return <div className="container px-5 mx-auto">{children}</div>;
};

export default Container;
