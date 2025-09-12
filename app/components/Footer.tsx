// app/components/Footer.tsx
import { Github, Music2 } from 'lucide-react'; // ícones do lucide-react

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-[color:var(--border)] pt-8 pb-6 text-center text-sm text-[color:var(--text-muted)]">
      <p className="mb-3">✨ Me siga nas redes:</p>

      <div className="flex justify-center gap-6">
        <a
          href="https://github.com/catformiga"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[color:var(--link)] hover:underline"
        >
          <Github className="h-4 w-4" /> GitHub
        </a>
        <a
          href="https://www.tiktok.com/@catformiga"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[color:var(--link)] hover:underline"
        >
          <Music2 className="h-4 w-4" /> TikTok
        </a>
      </div>

      <p className="mt-6 text-xs text-[color:var(--text-muted)]">
        © {new Date().getFullYear()} Blog da Cats — Todos os direitos
        reservados.
      </p>
    </footer>
  );
}
