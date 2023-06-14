import { FC, HTMLAttributes, ReactNode } from "react";

interface IContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const Container: FC<IContainerProps> = ({ children, className }) => {
  return (
    <>
      <div
        className={[
          "w-full max-w-[1440px] mx-auto my-0 px-4 md:px-8",
          className,
        ].join(" ")}
      >
        {children}
      </div>
    </>
  );
};

export default Container;
