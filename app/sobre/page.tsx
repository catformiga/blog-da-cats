// app/sobre/page.tsx
'use client';

import PageWrapper from '@/app/components/PageWrapper';
import Titulo from '@/app/components/Titulo';
import CommentsSection from '@/app/components/CommentsSection';
import { Lightbulb } from 'lucide-react';

export default function SobreMim() {
  return (
    <PageWrapper>
      {/* Título padronizado: badge + gradiente apenas no texto */}
      <Titulo
        level={2}
        align="center"
        className="mb-8 flex items-center justify-center gap-3"
      >
        <span
          className="inline-flex h-10 w-10 items-center justify-center rounded-2xl
                     bg-gradient-to-br from-[color:var(--brand-600)] to-[color:var(--brand-500)]
                     ring-1 ring-white/10 shadow-sm"
          aria-hidden="true"
        >
          <Lightbulb className="h-6 w-6 text-white" />
        </span>
        <span
          className="
            text-[color:var(--brand-600)]
            supports-[background-clip:text]:bg-gradient-to-r
            supports-[background-clip:text]:from-[color:var(--brand-600)]
            supports-[background-clip:text]:to-[#9333ea]
            supports-[background-clip:text]:bg-clip-text
            supports-[background-clip:text]:text-transparent
          "
        >
          Sobre Mim
        </span>
      </Titulo>

      {/* Conteúdo com tipografia consistente */}
      <article className="prose prose-zinc dark:prose-invert max-w-none">
        <p>
          Oi! Eu sou a Cats — psicóloga formada, atuando na área social e da
          saúde, com foco em Terapia Cognitivo-Comportamental (TCC) e apaixonada
          por linguagem corporal.
        </p>
        <p>
          Além da psicologia, sou uma grande fã de tecnologia e estou vivendo a
          transição de carreira para o desenvolvimento de software — uma jornada
          cheia de desafios, aprendizados e motivação.
        </p>
        <p>
          Sou gamer de coração, e <em>Life is Strange</em> é meu jogo favorito.
          Ele me marcou profundamente por sua narrativa emocional, abordando
          temas como escolhas difíceis, empatia e relações humanas — quase como
          uma sessão de terapia interativa.
        </p>
        <p>
          Também sou viciada em séries e doramas, especialmente dramas intensos,
          suspenses envolventes, comédias leves e histórias de romance que tocam
          a alma. Gosto de tramas que nos fazem sentir e pensar — aquelas que
          nos deixam com o coração cheio ou em pedaços (no bom sentido).
        </p>
        <p>
          Aqui no blog, compartilho um pouco de tudo isso: psicologia, games,
          séries, motivação e o que mais fizer sentido nessa jornada.
        </p>
        <p>Seja bem-vindo(a)! 💛</p>
      </article>

      {/* Interações padronizadas (fora da prose) */}
      <div className="not-prose mt-10">
        <CommentsSection initialLikes={0} initialComments={[]} />
      </div>
    </PageWrapper>
  );
}
