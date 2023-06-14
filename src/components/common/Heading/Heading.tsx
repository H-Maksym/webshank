import { FC, HTMLAttributes, createElement } from "react";

interface IHeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  headingLevel: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Heading: FC<IHeadingProps> = ({
  headingLevel = "h1",
  children,
  className,
}) => {
  const Head = ({ ...props }: HTMLAttributes<HTMLHeadingElement>) =>
    createElement(headingLevel, props, children);

  return (
    <>
      <Head className={className}>{children}</Head>
    </>
  );
};

export default Heading;
