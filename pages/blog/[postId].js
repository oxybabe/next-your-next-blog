import { useRouter } from "next/router";
import Link from "next/link";
import data from "blogContent.json";

export default function GetBlog() {
  const router = useRouter();
  const blog = data[router.query.postId - 1];
  console.log(blog);

  return (
    <>
      <div>
        <Link href="/blog/">Back to main</Link>
        <h1>{blog?.title}</h1>
        <p>{blog?.body}</p>
      </div>
    </>
  );
}
