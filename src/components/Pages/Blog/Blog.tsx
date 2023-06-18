"use client";
import { FC, useEffect, useState } from "react";

import Heading from "@/components/common/Heading";
import Posts from "@/components/Posts/Posts";
import PostsSearch from "@/components/PostsSearch";

import { PostType } from "@/types";
import { getPosts } from "@/utils/api";

interface IBlogProps {}

const Blog: FC<IBlogProps> = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getPosts()
      .then(setPosts)
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <PostsSearch onSearch={setPosts} />
      {loading ? (
        <Heading headingLevel="h3">Loading...</Heading>
      ) : (
        <Posts posts={posts} />
      )}
    </>
  );
};

export default Blog;
