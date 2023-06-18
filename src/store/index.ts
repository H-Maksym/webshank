import { devtools } from "zustand/middleware";

import { getPosts, getPostsBySearch } from "@/utils/api";
import { create } from "zustand";
import { UsePostsType } from "@/types";

export const usePosts = create<UsePostsType>()(
  devtools(
    (set) => ({
      posts: [],
      loading: false,
      getPosts: async () => {
        set({ loading: true });
        const posts = await getPosts();
        set({ posts, loading: false });
      },
      getPostBySearch: async (search) => {
        set({ loading: true });
        const posts = await getPostsBySearch(search);
        set({ posts, loading: false });
      },
    }),
    { name: "Posts" }
  )
);
