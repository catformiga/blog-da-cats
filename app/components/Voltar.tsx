import Link from "next/link";

export default function Voltar() {
  return (
    <Link
      href="/"
      className="inline-flex items-center px-4 py-2 mb-8 text-sm font-medium text-pink-700 border border-pink-500 rounded hover:bg-pink-50 transition-colors"
    >
      <svg
        className="w-4 h-4 mr-2"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19l-7-7 7-7"
        />
      </svg>
      Voltar para o início
    </Link>
  );
}
