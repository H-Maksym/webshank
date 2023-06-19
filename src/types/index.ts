export type NavMenuType = {
  title: string;
  href: string;
  ariaLabel: string;
};

export type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type PostsType = {
  posts: PostType[];
};

export type UsePostsType = {
  posts: PostType[];
  isLoading: boolean;
  getPosts: () => Promise<void>;
  getPostBySearch: (value: string) => Promise<void>;
};
