import { FC } from "react";
import Posts from "@/components/Posts/Posts";
import PostsSearch from "@/components/PostsSearch";

interface IBlogProps {}

const Blog: FC<IBlogProps> = () => {
  return (
    <>
      <PostsSearch />
      <Posts />
    </>
  );
};

export default Blog;
