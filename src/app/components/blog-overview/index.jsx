"use client";

import React, { useState } from "react";


import AddNewBlog from "../add-new-blog";
const BlogOverview = () => {
  const [openBlogDialog, setOpenBlogDialog] = useState(false);
  return (
    <div className="min-h-screen flex flex-col gap-10  p-6">
     <AddNewBlog openBlogDialog={openBlogDialog} setOpenBlogDialog={setOpenBlogDialog}/>
     <div>Blog List Section</div>
    </div>
  );
};

export default BlogOverview;
