// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/app/components/Navbar';

// ✅ Fonte consistente em todo o app
import { Inter } from 'next/font/google';
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Blog da Cats',
  description: 'Um blog sobre psicologia, games, doramas e inspiração pessoal.',
  icons: { icon: '/favicon.ico' },
};

// (mantém seu ThemeScript como está)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>{/* ThemeScript permanece */}</head>
      <body
        className={[
          inter.variable, // <- registra a var da fonte
          'min-h-screen flex flex-col font-sans', // <- usa a fonte
          'antialiased tracking-normal', // suaviza e normaliza tracking
          'bg-white text-gray-900 dark:bg-[#0b0b10] dark:text-gray-100', // mantém claro/escuro
        ].join(' ')}
      >
        <Navbar />
        <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {children}
        </main>
      </body>
    </html>
  );
}
