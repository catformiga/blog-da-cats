import { notFound } from "next/navigation";
import { getPosts } from "@/app/data/posts";

export const revalidate = 60;

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const posts = await getPosts();
  const post = posts.find((p) => p.slug === slug);
  if (!post) return notFound();

  return (
    <article className="prose mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
        {post.title}
      </h1>
      <p className="text-sm text-gray-500">{post.date}</p>
      <p>{post.summary}</p>
    </article>
  );
}

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((p) => ({ slug: p.slug }));
}
