"use client";
import { PostType } from "@/types";
import { getPostBySearch } from "@/utils/api";
import { FC, useState, FormEventHandler } from "react";

interface IPostsSearchProps {
  onSearch: (value: PostType[]) => void;
}

const PostsSearch: FC<IPostsSearchProps> = ({ onSearch }) => {
  const [search, setSearch] = useState<string>("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const posts = await getPostBySearch(search);
    onSearch(posts);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex justify-center">
        <input
          type="search"
          placeholder="Search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className="w-[30%] p-4 border rounded-lg text-base outline-none focus:outline-none"
        />
        <button
          type="submit"
          className="bg-blue-700 text-white cursor-pointer border-none w-20 rounded-lg"
        >
          Search
        </button>
      </form>
    </>
  );
};

export default PostsSearch;
