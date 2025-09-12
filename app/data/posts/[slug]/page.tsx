import { notFound } from "next/navigation";
import { getPosts } from "@/app/data/posts";

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const posts = await getPosts();
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) return notFound();

  return (
    <article className="prose mx-auto">
      <h1>{post.title}</h1>
      <p className="text-sm text-gray-500">{post.date}</p>
      <p>{post.summary}</p>
    </article>
  );
}
