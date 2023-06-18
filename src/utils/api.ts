//INFO GET Posts
export const getPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
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
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
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

//INFO GET Posts by search
export const getPostBySearch = async (search: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?q=${search}`,
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
