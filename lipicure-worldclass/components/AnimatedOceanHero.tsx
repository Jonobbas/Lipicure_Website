'use client';

import { useEffect, useRef } from 'react';
import LivingBubbles from '@/components/ocean-v2/LivingBubbles';

/**
 * Performance-first ocean hero.
 * Uses the approved cinematic image as the primary visual and adds only three
 * restrained animation systems: fish drift, jellyfish pulse and mouse parallax.
 * No WebGL is loaded on first paint, keeping the homepage resilient and light.
 */
export default function AnimatedOceanHero() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = root.current;
    if (!node || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const onMove = (event: PointerEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 10;
      const y = (event.clientY / window.innerHeight - 0.5) * 6;
      node.style.setProperty('--hero-x', `${x}px`);
      node.style.setProperty('--hero-y', `${y}px`);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  return (
    <div ref={root} className="animated-ocean-hero" aria-hidden="true">
      <div className="ocean-image" />
      {/* <div className="ocean-atmosphere" /> */}
      <div className="light-rays">
  {Array.from({ length: 6 }).map((_, i) => (
    <span
      key={i}
      style={{ "--ray": i } as React.CSSProperties}
    />
  ))}
</div>
      <div className="water-caustics" />
      <LivingBubbles />
      <div className="fish-school fish-school-one">
        {Array.from({ length: 9 }).map((_, i) => <span key={i} style={{ '--fish-i': i } as React.CSSProperties} />)}
      </div>
      <div className="fish-school fish-school-two">
        {Array.from({ length: 6 }).map((_, i) => <span key={i} style={{ '--fish-i': i } as React.CSSProperties} />)}
      </div>
    </div>
  );
}
