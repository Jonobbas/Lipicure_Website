'use client';

import { useMemo } from 'react';
import type { CSSProperties } from 'react';

type Plankton = {
  id: number;
  left: number;
  top: number;
  size: number;
  duration: number;
  delay: number;
  driftX: number;
  driftY: number;
  opacity: number;
};

export default function PlanktonCluster() {
  const plankton = useMemo<Plankton[]>(
    () =>
      Array.from({ length: 48 }, (_, id) => ({
        id,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 0.6 + Math.random() * 1.4,
        duration: 8 + Math.random() * 10,
        delay: -Math.random() * 12,
        driftX: -10 + Math.random() * 20,
        driftY: -14 + Math.random() * 10,
        opacity: 0.08 + Math.random() * 0.18,
      })),
    []
  );

  return (
    <div
      className="plankton-cluster"
      aria-hidden="true"
    >
      {plankton.map((item) => (
        <span
          key={item.id}
          className="plankton-speck"
          style={
            {
              left: `${item.left}%`,
              top: `${item.top}%`,
              width: `${item.size}px`,
              height: `${item.size}px`,
              opacity: item.opacity,
              animationDuration: `${item.duration}s`,
              animationDelay: `${item.delay}s`,
              '--plankton-x': `${item.driftX}px`,
              '--plankton-y': `${item.driftY}px`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
