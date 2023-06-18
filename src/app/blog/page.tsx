import { Metadata } from "next";
import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import Heading from "@/components/common/Heading";
import Blog from "@/components/Pages/Blog";

export const metadata: Metadata = {
  title: "Blog",
};

const BlogPage = () => {
  return (
    <Container>
      <Section>
        <Heading headingLevel="h2">All Blogs</Heading>
        <Blog />
      </Section>
    </Container>
  );
};

export default BlogPage;
