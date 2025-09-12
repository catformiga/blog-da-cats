import { ReactNode } from "react";

interface PageWrapperProps {
  children: ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 prose prose-purple prose-lg">
      {children}
    </main>
  );
}
