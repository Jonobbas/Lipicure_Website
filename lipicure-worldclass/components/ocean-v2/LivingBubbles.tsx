'use client';

import { useMemo } from 'react';

type Bubble = {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  opacity: number;
  blur: number;
};

export default function LivingBubbles() {
  const bubbles = useMemo<Bubble[]>(
    () =>
      Array.from({ length: 120 }, (_, id) => ({
        id,
        left: Math.random() * 100,
        size: 2 + Math.random() * 6,
        duration: 10 + Math.random() * 16,
        delay: -Math.random() * 24,
        drift: -18 + Math.random() * 36,
        opacity: 0.12 + Math.random() * 0.3,
        blur: Math.random() > 0.75 ? 1.2 : 0,
      })),
    []
  );

  return (
    <div
      className="pointer-events-none absolute inset-0 z-[2] overflow-hidden"
      aria-hidden="true"
    >
      {bubbles.map((bubble) => (
        <span
          key={bubble.id}
          className="living-bubble"
          style={
            {
              left: `${bubble.left}%`,
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              opacity: bubble.opacity,
              filter: `blur(${bubble.blur}px)`,
              animationDuration: `${bubble.duration}s`,
              animationDelay: `${bubble.delay}s`,
              '--bubble-drift': `${bubble.drift}px`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
