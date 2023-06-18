"use client";
import { Metadata } from "next";
import { useEffect, useState } from "react";

import Heading from "@/components/common/Heading";
import Posts from "@/components/Posts/Posts";

import { PostType } from "@/types";
import { getPosts } from "@/utils/api";
import PostsSearch from "@/components/PostsSearch/PostsSearch";

export const metadata: Metadata = {
  title: "Blog",
};

const Blog = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getPosts()
      .then(setPosts)
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Heading headingLevel="h2">All Blogs</Heading>
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
