// app/components/Subtitulo.tsx
import type { ReactNode } from 'react';

export default function Subtitulo({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mt-10 mb-6 text-center">
      {/* Emoji normal */}
      <span className="mr-2">💡</span>
      {/* Texto com gradiente */}
      <span className="bg-gradient-to-r from-purple-700 to-purple-700 bg-clip-text text-transparent">
        {children}
      </span>
    </h2>
  );
}
