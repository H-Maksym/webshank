import { FC, ReactNode } from "react";

interface IContainerProps {
  children: ReactNode;
}

const Container: FC<IContainerProps> = ({ children }) => {
  return (
    <>
      <div>{children}</div>
    </>
  );
};

export default Container;
