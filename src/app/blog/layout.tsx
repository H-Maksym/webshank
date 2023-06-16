import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";
import Container from "@/components/common/Container";
import Heading from "@/components/common/Heading";
import Section from "@/components/common/Section";
import { FC, ReactNode } from "react";

interface IBlogsLayoutProps {
  children: ReactNode;
}

const BlogsLayout: FC<IBlogsLayoutProps> = ({ children }) => {
  return (
    <Container>
      <Section className="card-set flex-col [--card-gap:40px]">
        <Heading headingLevel="h1" className="card-item">
          Blog page
        </Heading>
        <Link
          href="/blog"
          className="card-item custom-link custom-link-hover w-40"
        >
          <BiArrowBack width={5} />
          Back
        </Link>
        {children}
      </Section>
    </Container>
  );
};

export default BlogsLayout;
