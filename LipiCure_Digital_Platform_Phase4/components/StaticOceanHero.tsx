'use client';

import { useEffect, useRef } from 'react';

export default function StaticOceanHero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 8;
      const y = (event.clientY / window.innerHeight - 0.5) * 5;
      el.style.setProperty('--hero-x', `${x}px`);
      el.style.setProperty('--hero-y', `${y}px`);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div ref={ref} className="static-ocean-hero" aria-hidden="true">
      <div className="ocean-drift ocean-drift-one" />
      <div className="ocean-drift ocean-drift-two" />
      <div className="ocean-drift ocean-drift-three" />
    </div>
  );
}
