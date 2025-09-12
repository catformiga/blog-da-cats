// app/page.tsx
// ---------------------------------------------
// Home — Blog da Cats
// Mantém estrutura; melhora contraste dos cards
// e do botão "Ler mais" (.btn/.btn-gradient no globals.css).
// ---------------------------------------------

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getPosts } from "./data/posts";
import Footer from "@/app/components/Footer";
import PageWrapper from "@/app/components/PageWrapper";

// ── SEO
export const metadata: Metadata = {
  title: "Blog da Cats 🐾 | Psicologia, Games e Doramas",
  description:
    "Um cantinho aconchegante onde se misturam psicologia, games, doramas, gatos e crescimento pessoal.",
  keywords: [
    "psicologia",
    "games",
    "doramas",
    "blog",
    "gatos",
    "crescimento pessoal",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Blog da Cats 🐾 | Psicologia, Games e Doramas",
    description:
      "Resenhas, reflexões e histórias que tocam o coração — com aquela pitada gamer.",
    url: "/",
    siteName: "Blog da Cats",
    type: "website",
    images: [
      {
        url: "/og/home.jpg",
        width: 1200,
        height: 630,
        alt: "Blog da Cats - Psicologia, Games e Doramas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog da Cats 🐾 | Psicologia, Games e Doramas",
    description:
      "Resenhas, reflexões e histórias que tocam o coração — com aquela pitada gamer.",
    images: ["/og/home.jpg"],
  },
  icons: { icon: "/favicon.ico", shortcut: "/favicon.ico" },
};

// ── Helper para decidir o destino do "Ler mais"
type PostItem = { title: string; slug: string; category?: string | null };

function getReadMoreHref(post: PostItem): string {
  if (post.category) return `/${post.category}`;
  const t = post.title.trim().toLowerCase();
  if (t === "life is strange e a psicologia: escolhas que curam")
    return "/games-e-emocoes";
  if (t === "o dorama que mudou minha visão sobre empatia")
    return "/doramas-e-series";
  return `/posts/${post.slug}`;
}

// ── Página
export default async function HomePage() {
  const posts = await getPosts();

  return (
    <PageWrapper>
      {/* Título principal */}
      <h1 className="text-[color:var(--brand-600)]">
        Seja muito bem-vindo(a) ao Blog da Cats! 🐾
      </h1>

      {/* Subtítulo com contraste correto no light/dark */}
      <p className="text-center text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
        Aqui é um cantinho aconchegante onde misturo o que amo: psicologia,
        games, doramas, gatos e a jornada de crescimento pessoal. Sinta-se em
        casa! 💖
      </p>

      {/* LISTA DE POSTS — not-prose evita que a tipografia estilize <a> */}
      <section className="not-prose grid gap-6 sm:grid-cols-2">
        {posts.map((post) => {
          const href = getReadMoreHref(post);

          return (
            <article
              key={post.slug}
              className="card p-6 hover:shadow-md hover:border-[color:var(--brand-500)]/40 transition"
            >
              {/* Título do post com cor da identidade */}
              <h2 className="text-2xl font-semibold text-[color:var(--brand-600)] mb-2">
                {post.title}
              </h2>

              {/* Data com contraste ok no light/dark */}
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                {new Date(post.date).toLocaleDateString("pt-BR")}
              </p>

              {/* Resumo legível nos dois temas */}
              <p className="text-gray-700 dark:text-gray-300/90 leading-relaxed mb-6">
                {post.summary}
              </p>

              {/* Botão "Ler mais" com alto contraste */}
              <Link
                href={href}
                aria-label={`Ler mais sobre: ${post.title}`}
                className="btn btn-gradient no-underline mt-2 group"
              >
                Ler mais
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
              {/* Se preferir sólido:
                  className="btn btn-primary no-underline mt-2 group"
              */}
            </article>
          );
        })}
      </section>

      {/* Rodapé */}
      <div className="not-prose mt-12">
        <Footer />
      </div>
    </PageWrapper>
  );
}
