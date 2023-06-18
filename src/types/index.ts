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
