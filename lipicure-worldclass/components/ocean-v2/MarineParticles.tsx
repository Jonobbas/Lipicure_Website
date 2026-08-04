'use client';

import { useMemo } from 'react';
import type { CSSProperties } from 'react';

type Particle = {
  id: number;
  left: number;
  top: number;
  size: number;
  duration: number;
  delay: number;
  driftX: number;
  driftY: number;
  opacity: number;
  blur: number;
};

export default function MarineParticles() {
  const particles = useMemo<Particle[]>(
    () =>
      Array.from({ length: 90 }, (_, id) => ({
        id,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 1.5 + Math.random() * 3.5,
        duration: 18 + Math.random() * 24,
        delay: -Math.random() * 30,
        driftX: -24 + Math.random() * 48,
        driftY: -18 + Math.random() * 36,
        opacity: 0.18 + Math.random() * 0.32,
        blur: Math.random() > 0.7 ? 1 : 0,
      })),
    []
  );

  return (
    <div
      className="pointer-events-none absolute inset-0 z-[2] overflow-hidden"
      aria-hidden="true"
    >
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="marine-particle"
          style={
            {
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              filter: `blur(${particle.blur}px)`,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
              '--particle-x': `${particle.driftX}px`,
              '--particle-y': `${particle.driftY}px`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
