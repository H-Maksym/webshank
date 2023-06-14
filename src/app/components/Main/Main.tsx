import { FC, HTMLAttributes, ReactNode } from "react";

interface IMainProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

const Main: FC<IMainProps> = ({ children }) => {
  return (
    <>
      <main className="flex min-h-screen h-screen flex-col">{children}</main>
    </>
  );
};

export default Main;
