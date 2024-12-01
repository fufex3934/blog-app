import connectToDB from "@/database";
import { NextResponse } from "next/server";
import Joi from "joi";
import Blog from "@/models/blog";

const EditBlog = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
});

export async function PUT(req) {
  try {
    await connectToDB();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          message: "Id is required",
        },
        { status: 400 }
      );
    }

    const { title, description } = await req.json();
    const { error } = EditBlog.validate({ title, description });

    if (error) {
      return NextResponse.json(
        {
          success: false,
          message: error.details[0].message,
        },
        { status: 400 }
      );
    }

    const updateBlogById = await Blog.findOneAndUpdate(
      { _id: id },
      { title, description },
      { new: true }
    );

    if (updateBlogById) {
      return NextResponse.json(
        {
          success: true,
          message: "Post updated successfully",
          data: updateBlogById,
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        {
          success: false,
          message: "Post not updated successfully",
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error updating blog:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while updating the post",
      },
      { status: 500 }
    );
  }
}
