"use client";
import { FC, useEffect } from "react";
import Link from "next/link";
import { shallow } from "zustand/shallow";
import { usePosts } from "@/store";
import { PostType } from "@/types";

import Heading from "@/components/common/Heading";

interface IPostsProps {}

const Posts: FC<IPostsProps> = () => {
  const [posts, loading, getPosts] = usePosts(
    (state) => [state.posts, state.loading, state.getPosts],
    shallow
  );

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <>
      {loading ? (
        <Heading headingLevel="h3">Loading...</Heading>
      ) : (
        <ul className="list-disc card-set flex-col [--card-gap:10px]">
          {posts.map(({ id, title }: PostType) => (
            <li key={id} className="card-item">
              <Link href={`/blog/${id}`}>
                <Heading headingLevel="h3">{title}</Heading>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Posts;
