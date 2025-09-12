// app/components/icons/Gamepad.tsx
'use client';

import type { SVGProps } from 'react';

type Props = {
  /** tamanho em px (altura = largura). Default: 28 */
  size?: number;
  /** classes extras (ex.: "h-5 w-5") */
  className?: string;
  /** rótulo acessível; se omitido, fica decorativo */
  title?: string;
} & Omit<SVGProps<SVGSVGElement>, 'width' | 'height'>;

export default function GamepadIcon({
  size = 28,
  className = '',
  title,
  ...rest
}: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      role={title ? 'img' : 'presentation'}
      aria-label={title}
      className={className}
      {...rest}
    >
      <defs>
        {/* Corpo em gradiente roxo, puxando seus tokens de cor */}
        <linearGradient id="gp-body" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--brand-600)" />
          <stop offset="55%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>

        {/* brilho sutil no topo esquerdo */}
        <radialGradient id="gp-hi" cx="28%" cy="22%" r="60%">
          <stop offset="0" stopColor="#fff" stopOpacity=".25" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>

        {/* sombra externa */}
        <filter id="gp-shadow" x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity=".35" />
        </filter>
      </defs>
      <g filter="url(#gp-shadow)">
        {/* corpo / pegadas (forma simplificada, smooth) */}
        <path
          d="M13.5 24.5c-6.2 0-11.3 5-11.3 11.2v1.2c0 7.4 6 13.4 13.4 13.4h4.4l6.2-6.2h18.6l6.2 6.2h4.4c7.4 0 13.4-6 13.4-13.4v-1.2c0-6.2-5-11.2-11.3-11.2H13.5z"
          fill="url(#gp-body)"
          stroke="rgba(32,18,58,.25)"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        {/* highlight */}
        <ellipse cx="20" cy="20" rx="18" ry="10" fill="url(#gp-hi)" />
      </g>
      {/* D-pad (esquerda) */}
      <g transform="translate(18,35)">
        <rect x="-5" y="1" width="10" height="4" rx="1.2" fill="#9f7aea" />
        <rect x="-1" y="-3" width="4" height="10" rx="1.2" fill="#9f7aea" />
      </g>
      {/* botões coloridos (direita) */}
      <circle cx="44.5" cy="34.5" r="3.2" fill="#60a5fa" /> {/* azul */}
      <circle cx="50.5" cy="38.5" r="3" fill="#22c55e" /> {/* verde */}
      <circle cx="44.5" cy="42.5" r="3" fill="#f59e0b" /> {/* amarelo */}
      <circle cx="38.8" cy="38.5" r="3" fill="#ef4444" /> {/* vermelho */}
      {/* gatilhos / detalhes sutis no topo */}
      <path
        d="M18 24c0 2 2 4 4 4h3M39 28c2 0 4-2 4-4"
        stroke="rgba(255,255,255,.25)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
    