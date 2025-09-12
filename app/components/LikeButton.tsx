"use client";
import { useState } from "react";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);
  const [clicked, setClicked] = useState(false);

  return (
    <button
      onClick={() => {
        setLikes(likes + 1);
        setClicked(true);
      }}
      className={`mt-4 px-6 py-2 rounded-full font-medium flex items-center gap-2 transition-all duration-300
        ${
          clicked
            ? "bg-pink-500 text-white scale-105"
            : "bg-gray-100 text-gray-800 hover:bg-pink-100"
        }`}
    >
      ❤️ Curtir {likes > 0 && `(${likes})`}
    </button>
  );
}
