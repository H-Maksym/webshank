import { FC, HTMLAttributes, ReactNode } from "react";

interface ISectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

const Section: FC<ISectionProps> = ({ children, className }) => {
  return (
    <>
      <section className={["w-full py-4 md:py-8", className].join(" ")}>
        {children}
      </section>
    </>
  );
};

export default Section;
