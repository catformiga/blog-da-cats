// app/games-e-emocoes/page.tsx
'use client';

import PageWrapper from '@/app/components/PageWrapper';
import Titulo from '@/app/components/Titulo';
import CommentsSection from '@/app/components/CommentsSection';
import { Gamepad2 } from 'lucide-react';

export default function GamesEmocoesPage() {
  return (
    <PageWrapper>
      {/* 
        TÍTULO
        - NÃO usamos `gradient` no <Titulo> para evitar que o h2 inteiro receba `text-transparent`.
        - Aplicamos o gradiente SOMENTE no <span> do texto, com fallback de cor roxa.
        - Badge do ícone com gradiente roxo + ring sutil.
      */}
      <Titulo
        level={2}
        align="center"
        className="mb-8 flex items-center justify-center gap-3"
      >
        {/* Badge do ícone */}
        <span
          className="inline-flex h-10 w-10 items-center justify-center rounded-2xl
                     bg-gradient-to-br from-[color:var(--brand-600)] to-[color:var(--brand-500)]
                     ring-1 ring-white/10 shadow-sm"
          aria-hidden="true"
        >
          <Gamepad2 className="h-6 w-6 text-white" />
        </span>

        {/* Texto com gradiente só se o navegador suportar background-clip:text.
            Caso contrário, usamos a cor roxa normal como fallback. */}
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
          Games e Emoções
        </span>
      </Titulo>

      {/* 
        CONTEÚDO
        - `prose` para tipografia elegante (parágrafos, listas, hr).
        - `max-w-none` para ocupar a largura do container.
        - `dark:prose-invert` já trata cores para o tema escuro.
      */}
      <article className="prose prose-zinc dark:prose-invert max-w-none">
        <p>
          <strong>O Impacto Emocional de Life is Strange</strong>: Um Jogo Que
          Te Faz Sentir
        </p>
        <p>
          <em>Life is Strange</em> vai muito além de uma narrativa interativa.
          Ele é um mergulho nas emoções humanas: escolhas difíceis, amizade
          verdadeira, luto, identidade, traumas e possibilidades de recomeço.
          Como psicóloga e gamer, vejo nesse jogo um convite à empatia, à
          reflexão e à coragem.
        </p>
        <p>
          Mesmo quando a vida nos apresenta caminhos quebrados,{' '}
          <em>Life is Strange</em> nos lembra que ainda existem possibilidades.
          Por mais dolorosas que sejam nossas decisões, sempre há espaço para
          reconstruir, lutar pelo que acreditamos e não desistir da nossa
          própria história.
        </p>

        <hr />

        <p>
          <strong>Jogos Também Curam</strong>: O Papel Terapêutico dos Games
        </p>
        <p>
          Muita gente ainda enxerga os games apenas como entretenimento, mas
          eles podem ser muito mais do que isso: válvulas de escape, espaços de
          segurança emocional e ferramentas para refletir sobre a vida.
        </p>
        <p>
          Em momentos difíceis, os games nos permitem pausar, respirar e, muitas
          vezes, encontrar consolo em histórias que falam com a nossa dor. Eles
          ajudam a lidar com sentimentos como solidão, ansiedade e frustração —
          e até inspiram decisões mais conscientes fora das telas.
        </p>
        <p>
          Como na terapia, os jogos nos dão a chance de olhar para dentro. E, às
          vezes, é exatamente isso que a gente precisa para continuar.
        </p>

        <hr />

        <h3>Dicas de Games para Relaxar e Conectar Consigo Mesma(o)</h3>
        <ul>
          <li>
            <strong>Tell Me Why</strong> — Uma história sensível sobre
            identidade, memória e aceitação.
          </li>
          <li>
            <strong>Life is Strange: True Colors</strong> — Protagonista
            empática que sente as emoções dos outros. Um jogo sobre conexão,
            cura e coragem.
          </li>
          <li>
            <strong>Detroit: Become Human</strong> — Imersão intensa sobre
            escolhas morais, consciência e liberdade. Faz pensar sobre o que é
            ser humano.
          </li>
        </ul>
      </article>

      {/* 
        COMENTÁRIOS
        - `not-prose` para evitar que o plugin de tipografia estilize botões/inputs.
      */}
      <div className="not-prose mt-10">
        <CommentsSection
          initialLikes={4}
          initialComments={[
            { text: 'Adoro Life is Strange!', loved: true },
            { text: 'Muito legal essa abordagem.', loved: false },
          ]}
        />
      </div>
    </PageWrapper>
  );
}
