"use client";
import { usePosts } from "@/store";
import { FC, useState, FormEventHandler } from "react";

interface IPostsSearchProps {}

const PostsSearch: FC<IPostsSearchProps> = () => {
  const [search, setSearch] = useState<string>("");
  const getPostBySearch = usePosts((state) => state.getPostBySearch);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await getPostBySearch(search);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex justify-center my-5">
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
