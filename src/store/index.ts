import { devtools } from "zustand/middleware";

import { getPosts, getPostsBySearch } from "@/utils/api";
import { create } from "zustand";
import { UsePostsType } from "@/types";

export const usePosts = create<UsePostsType>()(
  devtools(
    (set) => ({
      posts: [],
      isLoading: false,
      getPosts: async () => {
        set({ isLoading: true });
        const posts = await getPosts();
        set({ posts, isLoading: false });
      },
      getPostBySearch: async (search) => {
        set({ isLoading: true });
        const posts = await getPostsBySearch(search);
        set({ posts, isLoading: false });
      },
    }),
    { name: "Posts" }
  )
);
