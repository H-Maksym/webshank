import { FC } from "react";
import Link from "next/link";

import Heading from "@/components/common/Heading";

import { PostType } from "@/types";

interface IPostsProps {
  posts: PostType[];
}

const Posts: FC<IPostsProps> = ({ posts }) => {
  return (
    <>
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

export default Posts;
