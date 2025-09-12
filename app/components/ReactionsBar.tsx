// app/components/ReactionsBar.tsx
'use client';

import { useState } from 'react';
import { ThumbsUp, ThumbsDown, MessageCircle } from 'lucide-react';

/**
 * Barra de reações local (client-side).
 * - Estados locais para curtir/descobrir e comentários.
 * - Pronta para integrar com server actions (onReact / onComment).
 */
type Reactions = {
  likes?: number;
  dislikes?: number;
  comments?: number;
};

export default function ReactionsBar({
  initial = { likes: 0, dislikes: 0, comments: 0 },
  onReact, // opcional: callback para integrar com server actions (ex.: likePost)
  onComment, // opcional: callback para criar comentário no servidor
}: {
  initial?: Reactions;
  onReact?: (kind: 'like' | 'dislike') => Promise<void> | void;
  onComment?: (text: string) => Promise<void> | void;
}) {
  // contadores locais
  const [likes, setLikes] = useState(initial.likes ?? 0);
  const [dislikes, setDislikes] = useState(initial.dislikes ?? 0);
  const [comments, setComments] = useState(initial.comments ?? 0);

  // estado da minha reação atual (exclusiva)
  const [mine, setMine] = useState<'like' | 'dislike' | null>(null);

  // controle do formulário de comentários
  const [openComment, setOpenComment] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [submitting, setSubmitting] = useState(false);

  // handler: like
  const handleLike = async () => {
    setMine((prev) => {
      if (prev === 'like') {
        // desfaz o like
        setLikes((n) => Math.max(0, n - 1));
        onReact?.('like');
        return null;
      }
      // se antes era dislike, remove um dislike
      if (prev === 'dislike') setDislikes((n) => Math.max(0, n - 1));
      setLikes((n) => n + 1);
      onReact?.('like');
      return 'like';
    });
  };

  // handler: dislike
  const handleDislike = async () => {
    setMine((prev) => {
      if (prev === 'dislike') {
        // desfaz o dislike
        setDislikes((n) => Math.max(0, n - 1));
        onReact?.('dislike');
        return null;
      }
      // se antes era like, remove um like
      if (prev === 'like') setLikes((n) => Math.max(0, n - 1));
      setDislikes((n) => n + 1);
      onReact?.('dislike');
      return 'dislike';
    });
  };

  // handler: abrir/fechar comentários
  const toggleComment = () => setOpenComment((v) => !v);

  // handler: enviar comentário (local + callback externa)
  const submitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    const text = commentText.trim();
    if (!text) return;

    setSubmitting(true);
    try {
      await onComment?.(text);
      setComments((n) => n + 1);
      setCommentText('');
      setOpenComment(false);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mt-10">
      {/* barra de botões em "pills" (cápsulas) com hover colorido */}
      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={handleLike}
          aria-label="Curtir"
          title="Curtir"
          className={`
            inline-flex items-center gap-2 px-4 h-10 rounded-full border 
            border-[color:var(--border)]
            transition-all duration-200
            ${
              mine === 'like'
                ? 'bg-[color:var(--brand-600)] text-white'
                : 'bg-[color:var(--panel)] text-[color:var(--text)] hover:bg-[color:var(--brand-500)] hover:text-white'
            }
          `}
        >
          <ThumbsUp className="h-4 w-4" />
          <span className="text-sm">Curtir</span>
          <span className="text-xs opacity-80">{likes}</span>
        </button>

        <button
          type="button"
          onClick={handleDislike}
          aria-label="Descurtir"
          title="Descurtir"
          className={`
            inline-flex items-center gap-2 px-4 h-10 rounded-full border 
            border-[color:var(--border)]
            transition-all duration-200
            ${
              mine === 'dislike'
                ? 'bg-[color:var(--brand-600)] text-white'
                : 'bg-[color:var(--panel)] text-[color:var(--text)] hover:bg-[color:var(--brand-500)] hover:text-white'
            }
          `}
        >
          <ThumbsDown className="h-4 w-4" />
          <span className="text-sm">Descurtir</span>
          <span className="text-xs opacity-80">{dislikes}</span>
        </button>

        <button
          type="button"
          onClick={toggleComment}
          aria-controls="comment-box"
          aria-expanded={openComment}
          title="Comentar"
          className="
            inline-flex items-center gap-2 px-4 h-10 rounded-full border 
            border-[color:var(--border)] bg-[color:var(--panel)]
            text-[color:var(--text)]
            hover:bg-[color:var(--brand-500)] hover:text-white
            transition-all duration-200
          "
        >
          <MessageCircle className="h-4 w-4" />
          <span className="text-sm">Comentar</span>
          <span className="text-xs opacity-80">{comments}</span>
        </button>
      </div>

      {/* caixa de comentário opcional */}
      {openComment && (
        <form
          id="comment-box"
          onSubmit={submitComment}
          className="mt-4 rounded-2xl border border-[color:var(--border)] bg-[color:var(--panel)] p-4"
        >
          <label
            htmlFor="comment-text"
            className="block text-sm mb-2 text-[color:var(--text-muted)]"
          >
            Deixe seu comentário:
          </label>
          <textarea
            id="comment-text"
            className="
              w-full min-h-[100px] rounded-lg border border-[color:var(--border)]
              bg-[color:var(--bg)] text-[color:var(--text)]
              p-3 outline-none focus:ring-2 focus:ring-[color:var(--brand-600)]
            "
            placeholder="Escreva algo gentil ✨"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
          <div className="mt-3 flex items-center gap-3">
            <button
              type="submit"
              disabled={submitting}
              className="
                btn-primary disabled:opacity-60 disabled:cursor-not-allowed
              "
            >
              {submitting ? 'Enviando...' : 'Enviar comentário'}
            </button>
            <button
              type="button"
              onClick={() => setOpenComment(false)}
              className="btn"
            >
              Cancelar
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
