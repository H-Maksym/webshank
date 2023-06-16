import { Metadata } from "next";
import Container from "@/components/common/Container";
import Heading from "@/components/common/Heading";
import Section from "@/components/common/Section";
import { PostType } from "@/types";
import { getPostById } from "@/utils/api";

interface IBlogIDProps {
  params: {
    id: string;
  };
}

export const generateMetadata = async ({
  params: { id },
}: IBlogIDProps): Promise<Metadata> => {
  return {
    title: id,
  };
};

const BlogID = async ({ params: { id } }: IBlogIDProps) => {
  const post: PostType = await getPostById(id);

  return (
    <Container>
      <Section>
        {!post.id && <p>Nothing found...</p>}
        <Heading headingLevel="h2">{post.title}</Heading>
        <p>{post.body}</p>
      </Section>
    </Container>
  );
};

export default BlogID;
