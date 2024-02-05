/**
 * admin/page.jsx
 */

import Post from "@/components/Post";
import Link from "next/link";
import prisma from "@/lib/prismadb";

export default async function AdminHome() {
  const posts = await prisma.post.findMany();

  return (
    <div>
      <h1>My Posts</h1>

      {posts && posts.length > 0 ? (
        posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            author={""}
            authorEmail={post.authorEmail}
            date={post.createdAt}
            thumbnail={post.imageUrl}
            category={post.catName}
            title={post.title}
            content={post.content}
            links={post.links || []}
          />
        ))
      ) : (
        <div className="py-6">
          No posts created yet.{" "}
          <Link className="underline" href={"/admin/create-post"}>
            Create New
          </Link>
        </div>
      )}
    </div>
  );
}
