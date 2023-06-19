import { NextResponse } from "next/server";

const posts = [
  { id: 1, title: "Ukraine" },
  { id: 2, title: "USA" },
  { id: 3, title: "Canada" },
  { id: 4, title: "Chines" },
];

//We can use such as case and other way create new route get by query
export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q");

  let currentPosts = posts;
  if (query) {
    currentPosts = posts.filter((post) =>
      post.title.toLowerCase().includes(query.toLowerCase())
    );
  }
  return NextResponse.json({ posts: currentPosts });
  // return NextResponse.json({ message: "Hello Lucky man" });
};

export const POST = async (req: Request) => {
  const body = await req.json();
  return NextResponse.json(body);
};
