// app/components/Navbar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, User, Gamepad2, Tv2, Lightbulb } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Início', icon: Home },
  { href: '/sobre', label: 'Sobre Mim', icon: User },
  { href: '/games-e-emocoes', label: 'Games e Emoções', icon: Gamepad2 },
  { href: '/doramas-e-series', label: 'Doramas & Séries', icon: Tv2 },
  { href: '/inspiracao-pessoal', label: 'Inspiração', icon: Lightbulb },
];

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === '/'
      ? pathname === '/'
      : pathname === href || pathname.startsWith(href + '/');

  return (
    <nav
      className={[
        'sticky top-0 z-40',
        'border-b border-[color:var(--border)]',
        'bg-[color:var(--bg)]/80 supports-[backdrop-filter]:bg-[color:var(--bg)]/60 backdrop-blur-md',
        // separação visual do conteúdo
        'shadow-[0_8px_24px_-16px_rgba(0,0,0,0.6)]',
      ].join(' ')}
    >
      <div className="max-w-6xl mx-auto px-3 sm:px-4 h-16 flex items-center justify-between">
        {/* Logo / Início */}
        <Link
          href="/"
          aria-current={isActive('/') ? 'page' : undefined}
          className={[
            'flex items-center gap-2 rounded-2xl px-3.5 py-2',
            'text-sm font-semibold transition-all',
            'focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-500)]/50',
            isActive('/')
              ? 'text-white ring-1 ring-white/10 shadow bg-gradient-to-br from-[color:var(--brand-600)] to-[color:var(--brand-500)]'
              : 'text-[color:var(--text)] hover:text-white hover:bg-[color:var(--brand-600)]/90',
          ].join(' ')}
        >
          <Home className="h-5 w-5" />
          Início
        </Link>

        {/* Navegação */}
        <div className="flex items-center gap-1.5 sm:gap-3 text-sm">
          {navLinks.slice(1).map(({ href, label, icon: Icon }) => {
            const active = isActive(href);
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? 'page' : undefined}
                className={[
                  'group flex items-center gap-1.5 rounded-2xl px-3.5 py-2 font-medium',
                  'transition-all focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-500)]/50',
                  active
                    ? 'text-white ring-1 ring-white/10 shadow bg-gradient-to-br from-[color:var(--brand-600)] to-[color:var(--brand-500)]'
                    : 'text-[color:var(--text)] hover:text-white hover:bg-[color:var(--brand-500)]/15',
                ].join(' ')}
              >
                <Icon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                <span>{label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
