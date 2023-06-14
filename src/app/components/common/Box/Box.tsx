import { FC, HTMLAttributes, ReactNode } from "react";

interface IBoxProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const Box: FC<IBoxProps> = ({ children, className }) => {
  return (
    <>
      <div className={className}>{children}</div>
    </>
  );
};

export default Box;
