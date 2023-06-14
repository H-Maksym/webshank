import { FC, ReactNode } from "react";

interface ISectionProps {
  children: ReactNode;
}

const Section: FC<ISectionProps> = ({ children }) => {
  return (
    <>
      <div>{children}</div>
    </>
  );
};

export default Section;
