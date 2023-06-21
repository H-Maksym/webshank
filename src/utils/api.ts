//INFO GET Posts
export const getPosts = async () => {
  // const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
  const response = await fetch("/api/posts", {
    //INFO checking for update data every 60 sec.
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) throw new Error("Unable to fetch posts!");

  return response.json();
};

//INFO GET Posts by id
export const getPostById = async (id: string) => {
  //INFO In summary, when you have a static URL without any dynamic parameters, using a relative URL like /api/posts works fine. However, when you have dynamic parameters like id, you need to provide the full URL or ensure that the dynamic parameter is replaced with the actual value before making the fetch request.
  const response = await fetch(
    process.env.NODE_ENV === "development"
      ? `http://localhost:3000/api/posts/${id}`
      : `https://webshank.vercel.app/api/posts/${id}`,
    // `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      //     //INFO checking for update data every 60 sec.
      next: {
        revalidate: 60,
      },
    }
  );
  if (!response.ok) throw new Error("Unable to fetch post!");

  return response.json();
};

//INFO GET Posts by search
export const getPostsBySearch = async (search: string) => {
  const response = await fetch(
    // `https://jsonplaceholder.typicode.com/posts?q=${search}`
    `/api/posts?q=${search}`,
    {
      //INFO checking for update data every 60 sec.
      next: {
        revalidate: 60,
      },
    }
  );

  if (!response.ok) throw new Error("Unable to fetch post!");

  return response.json();
};
