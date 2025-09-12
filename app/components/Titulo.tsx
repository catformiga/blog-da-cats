// app/components/Titulo.tsx
'use client';

import type { ReactNode, ElementType } from 'react';

interface TituloProps {
  children: ReactNode;
  /** nível semântico do heading (padrão: 2 para não duplicar H1 nas páginas) */
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  /** classes extras opcionais */
  className?: string;
  /** alinhamento opcional (padrão: left) */
  align?: 'left' | 'center' | 'right';
  /** aplica gradiente discreto (recomendado para H1/H2) */
  gradient?: boolean;
}

const headingByLevel: Record<NonNullable<TituloProps['level']>, string> = {
  1: 'heading-1',
  2: 'heading-2',
  3: 'heading-3',
  4: 'heading-4',
  5: 'heading-5',
  6: 'heading-6',
};

/**
 * Fallback leve caso as classes .heading-* não estejam carregadas por algum motivo.
 * (Não deve acontecer, mas evita tela “crua”.)
 */
const fallbackSize: Record<NonNullable<TituloProps['level']>, string> = {
  1: 'text-4xl sm:text-5xl',
  2: 'text-3xl sm:text-4xl',
  3: 'text-2xl',
  4: 'text-xl',
  5: 'text-lg',
  6: 'text-base',
};
const fallbackColor: Record<NonNullable<TituloProps['level']>, string> = {
  1: 'text-brand-600',
  2: 'text-brand-600',
  3: 'text-brand-500',
  4: 'text-gray-800 dark:text-gray-200',
  5: 'text-gray-800/90 dark:text-gray-200/90',
  6: 'text-gray-700 dark:text-gray-300',
};

export default function Titulo({
  children,
  level = 2, // ✅ padrão H2 para não duplicar H1
  className = '',
  align = 'left',
  gradient = false,
}: TituloProps) {
  const Tag = `h${level}` as unknown as ElementType;

  const alignClass =
    align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : '';

  // Usa as classes oficiais .heading-*; se não existirem, cai no fallback
  const baseHeadingClass =
    headingByLevel[level] ??
    `${fallbackSize[level]} ${fallbackColor[level]} font-bold`;

  // Gradiente (só faz sentido para H1/H2, mas permitimos opcionalmente)
  const gradientClass = gradient
    ? 'bg-gradient-to-r from-[color:var(--brand-600)] to-[#9333ea] bg-clip-text text-transparent'
    : '';

  const classes = [baseHeadingClass, alignClass, gradientClass, className]
    .filter(Boolean)
    .join(' ');

  return <Tag className={classes}>{children}</Tag>;
}
