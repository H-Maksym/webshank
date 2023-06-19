"use client";
import { FC /* , useEffect  */ } from "react";
import Link from "next/link";
import useSWR from "swr";
// import { shallow } from "zustand/shallow";
// import { usePosts } from "@/store";
import { PostType } from "@/types";

import Heading from "@/components/common/Heading";
import { getPosts } from "@/utils/api";

interface IPostsProps {}

const Posts: FC<IPostsProps> = () => {
  //INFO Zustand
  // const [posts, isLoading, getPosts] = usePosts(
  //   (state) => [state.posts, state.loading, state.getPosts],
  //   shallow
  // );

  // useEffect(() => {
  //   getPosts();
  // }, [getPosts]);

  //INFO SWR
  const { data: posts, isLoading } = useSWR<PostType[]>("posts", getPosts);

  return (
    <>
      {isLoading ? (
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
