import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-purple-500 to-blue-600 p-6">
        <div className="container mx-auto flex flex-col justify-center items center">
          <h2 className="text-4xl text-white font-bold mb-4">
            Browse Our Blog Collection
          </h2>
          <Link
            href={"/blogs"}
            className=" w-48 font-semibold py-2 px-6 rounded bg-white text-sm text-blue-700 flex items-center justify-center"
          >
            Explore Blogs
          </Link>
        </div>
      </div>
    </>
  );
}
