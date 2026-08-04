'use client';

import { useMemo } from 'react';
import type { CSSProperties } from 'react';

type Sardine = {
  id: number;
  x: number;
  y: number;
  scale: number;
  opacity: number;
  blur: number;
  tailDuration: number;
  floatDuration: number;
};

export default function SardineSchool() {
  const sardines = useMemo<Sardine[]>(
    () =>
      Array.from({ length: 18 }, (_, id) => {
        const column = id % 6;
        const row = Math.floor(id / 6);

        return {
          id,
          x: column * 92 + row * 18 + Math.random() * 22,
          y: row * 58 + Math.random() * 24,
          scale: 0.62 + Math.random() * 0.32,
          opacity: 0.58 + Math.random() * 0.32,
          blur: Math.random() > 0.86 ? 0.8 : 0,
          tailDuration: 0.42 + Math.random() * 0.28,
          floatDuration: 3.5 + Math.random() * 2.8,
        };
      }),
    []
  );

  return (
    <div className="sardine-school-v2" aria-hidden="true">
      {sardines.map((fish) => (
        <div
          key={fish.id}
          className="sardine-v2"
          style={
            {
              left: `${fish.x}px`,
              top: `${fish.y}px`,
              opacity: fish.opacity,
              filter: `blur(${fish.blur}px)`,
              transform: `scale(${fish.scale})`,
              '--tail-duration': `${fish.tailDuration}s`,
              '--float-duration': `${fish.floatDuration}s`,
            } as CSSProperties
          }
        >
          <svg viewBox="0 0 170 58" role="presentation">
            <defs>
              <linearGradient id={`body-${fish.id}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#355f70" />
                <stop offset="28%" stopColor="#789da8" />
                <stop offset="53%" stopColor="#d9e8e9" />
                <stop offset="76%" stopColor="#edf5f3" />
                <stop offset="100%" stopColor="#9eb9bb" />
              </linearGradient>

              <linearGradient id={`tail-${fish.id}`} x1="0" x2="1">
                <stop offset="0%" stopColor="#537d88" stopOpacity=".82" />
                <stop offset="100%" stopColor="#b7d3d3" stopOpacity=".42" />
              </linearGradient>
            </defs>

            <g className="sardine-tail-v2">
              <path
                d="M30 29 C18 24,8 12,2 7 C7 20,8 25,11 29 C8 34,7 40,2 51 C10 45,20 36,30 32 Z"
                fill={`url(#tail-${fish.id})`}
              />
            </g>

            <path
              d="M25 29
                 C42 12,82 8,126 16
                 C145 19,158 24,165 28
                 C160 34,146 40,126 43
                 C81 50,43 45,25 31 Z"
              fill={`url(#body-${fish.id})`}
              stroke="rgba(218,244,244,.32)"
              strokeWidth="1"
            />

            <path
              d="M72 14 C83 6,97 5,108 12 C94 12,84 16,75 20 Z"
              fill="rgba(92,136,145,.62)"
            />

            <path
              d="M89 43 C99 49,111 49,120 42 C108 42,99 39,91 36 Z"
              fill="rgba(114,155,160,.42)"
            />

            <path
              d="M124 28 C112 25,105 27,98 33 C108 33,118 32,126 30 Z"
              fill="rgba(169,202,201,.48)"
            />

            <path
              d="M37 31 C70 35,112 34,149 28"
              fill="none"
              stroke="rgba(83,121,130,.34)"
              strokeWidth=".8"
            />

            <path
              d="M133 18 Q128 28 133 39"
              fill="none"
              stroke="rgba(62,93,102,.55)"
              strokeWidth="1"
            />

            <circle cx="146" cy="23" r="3.3" fill="#132e35" />
            <circle cx="145.2" cy="22.2" r="1" fill="#f0ffff" />

            <path
              d="M158 30 Q164 30 168 28"
              fill="none"
              stroke="rgba(31,62,68,.65)"
              strokeWidth="1"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}
