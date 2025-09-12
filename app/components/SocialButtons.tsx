"use client";
import { useState } from "react";

interface SocialButtonsProps {
  initialLikes?: number;
  initialComments?: string[];
}

export default function SocialButtons({
  initialLikes = 0,
  initialComments = [],
}: SocialButtonsProps) {
  const [likes, setLikes] = useState(initialLikes);
  const [comments, setComments] = useState<string[]>(initialComments);
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [newComment, setNewComment] = useState("");

  function handleAddComment() {
    if (newComment.trim() === "") return;
    setComments([...comments, newComment.trim()]);
    setNewComment("");
    setShowCommentBox(false);
  }

  function handleDeleteComment(index: number) {
    setComments(comments.filter((_, i) => i !== index));
  }

  return (
    <div className="w-full max-w-xl mx-auto">
      {/* Botões */}
      <div className="flex justify-center space-x-4 mt-8">
        <button
          onClick={() => setLikes(likes + 1)}
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition flex items-center space-x-2"
        >
          <span>👍</span>
          <span>Curtir ({likes})</span>
        </button>

        <button
          onClick={() => setShowCommentBox(!showCommentBox)}
          className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition flex items-center space-x-2"
        >
          <span>💬</span>
          <span>Comentar ({comments.length})</span>
        </button>
      </div>

      {/* Caixa para adicionar comentário */}
      {showCommentBox && (
        <div className="mt-4">
          <textarea
            className="w-full p-2 border border-gray-300 rounded mb-2 resize-none"
            rows={4}
            placeholder="📝 Escreva seu comentário aqui..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <div className="flex justify-end space-x-2">
            <button
              onClick={() => setShowCommentBox(false)}
              className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 transition"
            >
              ❌ Cancelar
            </button>
            <button
              onClick={handleAddComment}
              className="px-4 py-2 rounded bg-pink-500 text-white hover:bg-pink-600 transition flex items-center space-x-1"
            >
              <span>🚀</span> <span>Enviar</span>
            </button>
          </div>
        </div>
      )}

      {/* Lista de comentários */}
      {comments.length > 0 && (
        <div className="mt-6 space-y-4">
          {comments.map((comment, idx) => (
            <div
              key={idx}
              className="p-3 border border-gray-200 rounded bg-gray-50 flex justify-between items-start"
            >
              <p className="whitespace-pre-wrap flex-grow">💬 {comment}</p>
              <button
                onClick={() => handleDeleteComment(idx)}
                className="ml-4 text-red-500 hover:text-red-700 font-bold"
                aria-label="Excluir comentário"
                title="Excluir comentário"
              >
                🗑️
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
