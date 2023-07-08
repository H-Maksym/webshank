import { Metadata } from "next";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";

import { PostType } from "@/types";
import { getPostById } from "@/utils/api";

import Container from "@/components/common/Container";
import Heading from "@/components/common/Heading";
import Section from "@/components/common/Section";

interface IBlogIDProps {
  params: {
    id: string;
  };
}

//INFO SEO for dynamic page's
// export const generateMetadata = async ({
//   params: { id },
// }: IBlogIDProps): Promise<Metadata> => {
//   const post: PostType = await getPostById(id);
//   return {
//     title: post.title,
//   };
// };

const BlogID = async ({ params: { id } }: IBlogIDProps) => {
  const post: PostType = await getPostById(id);

  return (
    <Container>
      <Section>
        {!post.id && <p>Nothing found...</p>}
        <Link
          href="/blog"
          className="card-item custom-link custom-link-hover w-40"
        >
          <BiArrowBack width={5} />
          Back
        </Link>
        <Heading headingLevel="h2" className="mt-5">
          {post.title}
        </Heading>
        <p>{post.body}</p>
      </Section>
    </Container>
  );
};

export default BlogID;
