const { default: connectToDB } = require("@/database");
const { default: Blog } = require("@/models/blog");
const { NextResponse } = require("next/server");

export async function DELETE(req) {
  try {
    await connectToDB();
    const { searchParams } = new URL(req.url);
    const getCurrentBlogId = searchParams.get("id");

    if (!getCurrentBlogId) {
      return NextResponse.json(
        {
          success: false,
          message: "Blog Id is Required",
        },
        { status: 400 }
      );
    }

    const deleteCurrentBlogById = await Blog.findByIdAndDelete(getCurrentBlogId);

    if (deleteCurrentBlogById) {
      return NextResponse.json(
        {
          success: true,
          message: "Blog deleted successfully",
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        {
          success: false,
          message: "Failed to delete blog",
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error deleting blog:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong! Please try again.",
      },
      { status: 500 }
    );
  }
}
