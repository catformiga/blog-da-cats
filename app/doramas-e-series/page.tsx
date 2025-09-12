// app/doramas-e-series/page.tsx
'use client';

import PageWrapper from '@/app/components/PageWrapper';
import Titulo from '@/app/components/Titulo';
import CommentsSection from '@/app/components/CommentsSection';
import { Tv2 } from 'lucide-react';

export default function DoramasPage() {
  return (
    <PageWrapper>
      {/* Título padronizado com badge e gradiente só no texto */}
      <Titulo
        level={2}
        align="center"
        className="mb-8 flex items-center justify-center gap-3"
      >
        {/* Badge do ícone (gradiente roxo + ícone branco) */}
        <span
          className="inline-flex h-10 w-10 items-center justify-center rounded-2xl
                     bg-gradient-to-br from-[color:var(--brand-600)] to-[color:var(--brand-500)]
                     ring-1 ring-white/10 shadow-sm"
          aria-hidden="true"
        >
          <Tv2 className="h-6 w-6 text-white" />
        </span>

        {/* Texto com gradiente somente se houver suporte a background-clip:text;
            caso contrário, usa a cor roxa padrão como fallback */}
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
          Doramas que Tocaram Meu Coração
        </span>
      </Titulo>

      {/* Conteúdo tipografado (parágrafos, listas, títulos, hr) */}
      <article className="prose prose-zinc dark:prose-invert max-w-none">
        <p>
          Alguns doramas não são apenas boas histórias — eles nos transformam.
          Esses aqui me fizeram refletir sobre identidade, aceitação, amor e
          vulnerabilidade:
        </p>

        <ul>
          <li>
            <strong>Tudo Bem Não Ser Normal</strong> — Um retrato sensível da
            saúde mental. Me lembrou que está tudo bem não estar bem o tempo
            todo.
          </li>
          <li>
            <strong>Erased</strong> — Suspense com toque sobrenatural. A ideia
            de voltar no tempo para salvar alguém mexe com nosso senso de
            responsabilidade e culpa.
          </li>
          <li>
            <strong>Garota do Século 21</strong> — Ficção divertida sobre
            autoconhecimento e o papel da mulher entre passado e presente.
          </li>
          <li>
            <strong>Beleza Verdadeira</strong> — Muito além da estética, fala
            sobre autoestima, aceitação e as máscaras que usamos.
          </li>
        </ul>

        <p>
          Cada um, à sua maneira, deixou marcas — como pequenas sessões de
          terapia disfarçadas de entretenimento.
        </p>

        <h3>💡 O que aprendi com os doramas</h3>
        <p>
          Doramas vão além do romance: falam sobre afeto, perdas e reencontros.
          São espelhos emocionais, mostrando o quanto desejamos ser vistos e
          amados, mesmo nas nossas versões mais imperfeitas.
        </p>

        <ul>
          <li>
            <strong>Se a Vida Me Der Tangerinas</strong> — O cuidado mora nos
            detalhes simples: uma refeição quente, uma conversa ao fim do dia, o
            silêncio que acolhe.
          </li>
          <li>
            <strong>Rainha das Lágrimas</strong> — Até o amor mais intenso pode
            ser abalado. Relacionamentos também precisam de cura, não só de
            paixão.
          </li>
        </ul>

        <h3>☁️ Doramas para dias difíceis</h3>
        <p>
          Sabe aqueles dias em que tudo o que você quer é conforto? Esses são
          meus “cobertores emocionais” — histórias leves que aquecem o peito:
        </p>

        <ul>
          <li>
            <strong>Pousando no Amor</strong> — Um romance improvável entre dois
            mundos, cheio de humor e carinho.
          </li>
          <li>
            <strong>O Que Aconteceu com a Secretária Kim</strong> — Divertido e
            apaixonante, perfeito para rir e suspirar.
          </li>
          <li>
            <strong>Pretendente Surpresa</strong> — Uma comédia romântica leve e
            viciante, com personagens cativantes.
          </li>
        </ul>

        <p>
          Para dias nublados, nada melhor do que acreditar na leveza, no amor e
          em finais felizes — mesmo que por algumas horas.
        </p>
      </article>

      {/* Comentários fora da prose para não herdar estilos de texto */}
      <div className="not-prose mt-10">
        <CommentsSection
          initialLikes={2}
          initialComments={[
            { text: 'Também amo doramas!', loved: true },
            { text: 'Ótima indicação, vou assistir!', loved: false },
          ]}
        />
      </div>
    </PageWrapper>
  );
}
