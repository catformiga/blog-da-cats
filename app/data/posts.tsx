// app/data/posts.ts
import React from "react";

export type Post = {
  slug: string;
  title: string;
  summary: string;
  content: React.ReactNode;
  date: string;
  author: string;
};

const posts: Post[] = [
  {
    slug: "life-is-strange-e-a-psicologia",
    title: "Life is Strange e a Psicologia: escolhas que curam",
    summary:
      "Como o jogo Life is Strange se conecta com a TCC e as emoções humanas.",
    content: (
      <>
        <p>Conteúdo completo do post sobre Life is Strange e Psicologia.</p>
        <p>Aqui você pode escrever texto, inserir imagens, etc.</p>
      </>
    ),
    date: "2025-09-01",
    author: "Cats",
  },
  {
    slug: "dorama-que-mudou-minha-visao",
    title: "O dorama que mudou minha visão sobre empatia",
    summary: "Reflexões sobre um drama que tocou fundo.",
    content: (
      <>
        <p>Conteúdo completo do post sobre doramas e empatia.</p>
      </>
    ),
    date: "2025-09-07",
    author: "Cats",
  },
];

export async function getPosts(): Promise<Post[]> {
  return posts; // Retorna todos os posts
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  return posts.find((post) => post.slug === slug); // Retorna um post específico pelo slug
}
