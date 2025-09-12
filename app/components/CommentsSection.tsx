"use client";
import { useState } from "react";

interface Comment {
  text: string;
  loved: boolean;
}

interface CommentsSectionProps {
  initialComments?: Comment[];
  showLikes?: boolean;
  initialLikes?: number;
}

export default function CommentsSection({
  initialComments = [],
  showLikes = true,
  initialLikes = 0,
}: CommentsSectionProps) {
  const [likes, setLikes] = useState(initialLikes);
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [newComment, setNewComment] = useState("");

  function handleAddComment() {
    if (newComment.trim() === "") return;
    setComments([...comments, { text: newComment.trim(), loved: false }]);
    setNewComment("");
    setShowCommentBox(false);
  }

  function handleDeleteComment(index: number) {
    setComments(comments.filter((_, i) => i !== index));
  }

  function toggleLoveComment(index: number) {
    setComments(
      comments.map((comment, i) =>
        i === index ? { ...comment, loved: !comment.loved } : comment
      )
    );
  }

  function handleUnlike() {
    setLikes((prev) => (prev > 0 ? prev - 1 : 0));
  }

  return (
    <div className="mt-10 max-w-3xl mx-auto p-4 bg-white rounded shadow-md">
      {showLikes && (
        <div className="flex justify-center space-x-4 mb-6">
          <button
            onClick={() => setLikes(likes + 1)}
            className="bg-purple-600 text-white px-5 py-2 rounded hover:bg-purple-700 transition"
          >
            👍 Curtir ({likes})
          </button>
          <button
            onClick={handleUnlike}
            disabled={likes === 0}
            className={`px-5 py-2 rounded transition ${
              likes === 0
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-red-500 text-white hover:bg-red-600"
            }`}
          >
            👎 Descurtir
          </button>
          <button
            onClick={() => setShowCommentBox(!showCommentBox)}
            className="bg-pink-500 text-white px-5 py-2 rounded hover:bg-pink-600 transition"
          >
            💬 Comentar ({comments.length})
          </button>
        </div>
      )}

      {showCommentBox && (
        <div>
          <textarea
            className="w-full p-3 border border-gray-300 rounded mb-4 resize-none focus:outline-none focus:ring-2 focus:ring-pink-400"
            rows={4}
            placeholder="Escreva seu comentário aqui..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <div className="flex justify-end space-x-3 mb-6">
            <button
              onClick={() => setShowCommentBox(false)}
              className="px-5 py-2 rounded bg-gray-300 hover:bg-gray-400 transition"
            >
              Cancelar
            </button>
            <button
              onClick={handleAddComment}
              className="px-5 py-2 rounded bg-pink-500 text-white hover:bg-pink-600 transition"
            >
              Enviar
            </button>
          </div>
        </div>
      )}

      {comments.length > 0 && (
        <div className="space-y-4">
          {comments.map((comment, idx) => (
            <div
              key={idx}
              className="p-4 border border-gray-200 rounded bg-gray-50 flex justify-between items-center"
            >
              <span className="whitespace-pre-wrap">{comment.text}</span>
              <div className="flex space-x-3">
                <button
                  onClick={() => toggleLoveComment(idx)}
                  className={`font-bold transition ${
                    comment.loved
                      ? "text-red-500 hover:text-red-600"
                      : "text-gray-400 hover:text-red-600"
                  }`}
                  aria-label="Amei comentário"
                  title="Amei comentário"
                >
                  ❤️
                </button>
                <button
                  onClick={() => handleDeleteComment(idx)}
                  className="text-red-500 hover:text-red-700 font-bold"
                  aria-label="Excluir comentário"
                  title="Excluir comentário"
                >
                  ❌
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
