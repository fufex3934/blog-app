"use client";

import React, { useState } from "react";

import AddNewBlog from "../add-new-blog";
const initialBlogFormData = {
  title: "",
  description: "",
};
const BlogOverview = () => {
  const [openBlogDialog, setOpenBlogDialog] = useState(false);
  const [blogFormData, setBlogFormData] = useState(initialBlogFormData);
  const [loading, setLoading] = useState(false);

  async function handleSaveBlogData() {
    try {
      setLoading(true);
      const apiResponse = await fetch("/api/add-blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blogFormData),
      });
      const result = await apiResponse.json();
      
      if (result.success) {
        setBlogFormData(initialBlogFormData);
        setOpenBlogDialog(false);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setBlogFormData(initialBlogFormData);
    }
  }

  return (
    <div className="min-h-screen flex flex-col gap-10  p-6">
      <AddNewBlog
        openBlogDialog={openBlogDialog}
        setOpenBlogDialog={setOpenBlogDialog}
        loading={loading}
        setLoading={setLoading}
        blogFormData={blogFormData}
        setBlogFormData={setBlogFormData}
        handleSaveBlogData={handleSaveBlogData}
      />
      <div>Blog List Section</div>
    </div>
  );
};

export default BlogOverview;
