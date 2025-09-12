// app/components/PageLayout.tsx
type PageLayoutProps = {
  title: string; // Título da página
  children: React.ReactNode; // Conteúdo da página
};

export default function PageLayout({ title, children }: PageLayoutProps) {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      {/* Título da página */}
      <h1 className="text-4xl font-bold text-purple-700 mb-6 text-center">
        {title}
      </h1>

      {/* Conteúdo da página */}
      <article className="prose prose-purple max-w-none prose-lg">
        {children}
      </article>
    </main>
  );
}
