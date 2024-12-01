import connectToDB from "@/database";
import { NextResponse } from "next/server";
import Joi from "joi";
import Blog from "@/models/blog";

const AddNewBlog = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
});

export async function POST(req) {
  try {
    await connectToDB();
    const extractBlogData = await req.json();
    const { title, description } = extractBlogData;
    const { error } = AddNewBlog.validate({
      title,
      description,
    });
    if (error) {
      return NextResponse.json({
        success: false,
        message: error.details[0].message,
      });
    }
    const newCreatedBlogItem = await Blog.create(extractBlogData);
    if (newCreatedBlogItem) {
      return NextResponse.json({
        success: true,
        message: "Blog created successfully!",
        data: newCreatedBlogItem,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Failed to create blog",
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "something went wrong! please try again",
    });
  }
}
