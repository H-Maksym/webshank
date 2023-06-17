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
        {children}
      </Section>
    </Container>
  );
};

export default BlogsLayout;
