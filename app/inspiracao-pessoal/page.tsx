// app/inspiracao-pessoal/page.tsx
import type { Metadata } from "next";
import PageWrapper from "@/app/components/PageWrapper";
import Titulo from "@/app/components/Titulo";
import ReactionsBar from "@/app/components/ReactionsBar";
import { Lightbulb } from "lucide-react";
import CommentsSection from "@/app/components/CommentsSection";
/** ✅ Metadata tipada (DX + SEO) */
export const metadata: Metadata = {
  title: "Inspiração Pessoal | Blog da Cats",
  description:
    "Reflexões sobre psicologia, games e doramas — e como essas trilhas moldaram minha jornada na tecnologia.",
};

export default function InspiracaoPessoal() {
  return (
    <PageWrapper>
      {/* ───────────────────────── Header ───────────────────────── */}
      {/* Título padronizado: badge + gradiente apenas no texto */}
      <Titulo
        level={2}
        align="center"
        className="mb-3 flex items-center justify-center gap-3"
      >
        {/* Badge do ícone (gradiente roxo + ícone branco) */}
        <span
          className="inline-flex h-10 w-10 items-center justify-center rounded-2xl
                     bg-gradient-to-br from-[color:var(--brand-600)] to-[color:var(--brand-500)]
                     ring-1 ring-white/10 shadow-sm"
          aria-hidden="true"
        >
          <Lightbulb className="h-6 w-6 text-white" />
        </span>

        {/* Texto com gradiente só se houver suporte ao background-clip:text;
            fallback em roxo sólido para compatibilidade */}
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
          Inspiração Pessoal
        </span>
      </Titulo>

      {/* Subtítulo discreto */}
      <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-8">
        Um relato honesto sobre transições, vulnerabilidade e recomeços.
      </p>

      {/* ──────────────────────── Conteúdo ──────────────────────── */}
      {/* `prose` dá tipografia elegante; `max-w-none` respeita a largura do container */}
      <article className="prose prose-zinc dark:prose-invert max-w-none">
        <p>
          Eu sou psicóloga, com foco em TCC e apaixonada por linguagem corporal.
          Sempre amei entender as emoções, os traumas, os porquês por trás dos
          comportamentos.
        </p>

        <p>
          Mas um dia, comecei a me perguntar: e se eu quiser mudar? E se eu
          puder unir tudo isso com algo novo?
        </p>

        <p>Foi aí que decidi me arriscar e entrar no mundo da tecnologia.</p>

        <p>Sim, estou me tornando desenvolvedora de software.</p>

        <p>
          A transição não foi (e não é) fácil. Já pensei em desistir, já chorei
          de frustração, mas também já me emocionei com cada conquista, cada
          código que funcionou, cada aprendizado que me mostrou: você consegue.
        </p>

        <h3>O que me manteve firme</h3>
        <ul>
          <li>
            🎮 <strong>Os games</strong> — como <em>Life is Strange</em>, que me
            ensinou que nossas escolhas importam, e que mesmo quando tudo parece
            perdido, a gente pode recomeçar.
          </li>
          <li>
            📺 <strong>Os doramas</strong> — que me mostraram que não tem
            problema ser vulnerável, que os sentimentos fazem parte, e que
            sempre existe uma forma de reescrever nossa história.
          </li>
          <li>
            🧠 <strong>A psicologia</strong> — que me lembra todos os dias que
            sentir não é fraqueza. É humano.
          </li>
        </ul>

        <p>
          E se você também estiver nesse meio do caminho, lidando com a
          ansiedade, dúvidas ou recomeços... respira. Você não está sozinho(a).
        </p>

        <p>Essa jornada é sua — e ela vale a pena. 💛</p>
      </article>

      {/* ─────────────── Ações/Engajamento (fora da prose) ─────────────── */}
      <div className="not-prose mt-10">
        <CommentsSection initialLikes={4} initialComments={[]} />
      </div>

      {/* Se quiser comentários completos:
      <section className="not-prose mt-8">
        <CommentsSection postId="inspiracao-pessoal" />
      </section>
      */}
    </PageWrapper>
  );
}
