import data from "blogContent.json";
import Link from "next/link";
import { useRouter } from "next/router";

export default function blogList() {
  const router = useRouter();
  return (
    <>
      <h1>Blog List</h1>
      {data?.map((blog, index) => (
        <li style={{ color: "white" }} key={index}>
          <Link href={`/blog/${blog.id}`}>Title: {blog.title}</Link>
          <p>Post: {blog.body}</p>
        </li>
      ))}
    </>
  );
}
