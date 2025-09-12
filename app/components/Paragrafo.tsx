// app/components/Paragrafo.tsx
interface ParagrafoProps {
  children: React.ReactNode;
  className?: string;
}

import { ReactNode } from "react";

export default function Paragrafo({ children }: { children: ReactNode }) {
  return <p className="text-justify mb-4 leading-relaxed">{children}</p>;
}
