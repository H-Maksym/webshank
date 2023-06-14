import { FC, HTMLAttributes, ReactNode } from "react";

interface IMainProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

const Main: FC<IMainProps> = ({ children, className }) => {
  return (
    <>
      <main className={["flex-auto mt-[--h-header]", className].join(" ")}>
        {children}
      </main>
    </>
  );
};

export default Main;
