import { Metadata } from "next";
import Link from "next/link";

import Heading from "@/components/common/Heading";
import { PostType } from "@/types";
import { getPosts } from "@/utils/api";

export const metadata: Metadata = {
  title: "Blog",
};

const Blog = async () => {
  const posts = await getPosts();
  return (
    <>
      <Heading headingLevel="h2">All Blogs</Heading>
      <ul className="list-disc card-set flex-col [--card-gap:10px]">
        {posts.map(({ id, title }: PostType) => (
          <li key={id} className="card-item">
            <Link href={`/blog/${id}`}>
              <Heading headingLevel="h3">{title}</Heading>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Blog;
