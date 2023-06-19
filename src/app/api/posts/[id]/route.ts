import { NextResponse } from "next/server";
import { headers, cookies } from "next/headers";
// import { redirect } from "next/navigation";

export const DELETE = async (
  _: any,
  { params }: { params: { id: string } }
) => {
  const API_KEY = process.env.API_KEY;

  const id = params.id;
  console.log(id);

  //INFO Work with headers
  const headerList = headers();
  const type = headerList.get("Content-type");
  console.log("🚀 ~ type:", type);

  //INFO Work with cookies

  const cookiesList = cookies();
  const coo1 = cookiesList.get("Cookie_2")?.value;
  console.log("🚀 ~ coo1:", coo1);

  //logic delete post

  //   return NextResponse.json(`successfully deleted post:${id}`);
  //INFO Redirect to blog page
  //   redirect("/blog");
  return NextResponse.json({
    id,
    headers: type,
    cookies: coo1,
    API_KEY: API_KEY,
  });
};
