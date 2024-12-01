import React from "react";
import BlogOverview from "../components/blog-overview";

async function fetchListofBlogs() {
  try {
    const apiResponse = await fetch("https://blog-app-xi-sandy.vercel.app/api/get-blogs", {
      method: "GET",
      cache: "no-store",
    });
    const result = await apiResponse.json();
  
    return result.data;
  } catch (error) {
   console.log(error);
  }
}
const Blogs = async () => {
    const blogLists = await fetchListofBlogs();

  return <BlogOverview blogLists={blogLists} />;
};

export default Blogs;
