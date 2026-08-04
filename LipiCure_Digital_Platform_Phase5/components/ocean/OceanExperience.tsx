'use client';

import { useEffect, useRef, useState } from 'react';

const FISH_COUNT = 18;
const JELLY_COUNT = 2;

type Fish = {
  x: number;
  y: number;
  speed: number;
  scale: number;
  phase: number;
  alpha: number;
};

type Jelly = {
  x: number;
  y: number;
  speed: number;
  scale: number;
  phase: number;
  alpha: number;
};

function isLowPowerDevice() {
  if (typeof window === 'undefined') return true;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const narrow = window.matchMedia('(max-width: 720px)').matches;
  const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
  return Boolean(reduced || narrow || saveData);
}

export default function OceanExperience() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(!isLowPowerDevice());
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || !enabled) return;

    const onPointerMove = (event: PointerEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 9;
      const y = (event.clientY / window.innerHeight - 0.5) * 5;
      root.style.setProperty('--ocean-x', `${x}px`);
      root.style.setProperty('--ocean-y', `${y}px`);
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', onPointerMove);
  }, [enabled]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !enabled) return;
    const context = canvas.getContext('2d', { alpha: true });
    if (!context) return;

    let frame = 0;
    let width = 0;
    let height = 0;
    let dpr = 1;

    const fish: Fish[] = Array.from({ length: FISH_COUNT }, (_, index) => ({
      x: Math.random(),
      y: 0.23 + Math.random() * 0.42,
      speed: 0.000035 + Math.random() * 0.000045,
      scale: 0.55 + Math.random() * 0.8,
      phase: index * 0.47,
      alpha: 0.24 + Math.random() * 0.42,
    }));

    const jelly: Jelly[] = Array.from({ length: JELLY_COUNT }, (_, index) => ({
      x: index === 0 ? 0.78 : 0.58,
      y: index === 0 ? 0.18 : 0.34,
      speed: index === 0 ? 0.000018 : 0.000012,
      scale: index === 0 ? 1 : 0.68,
      phase: index * 2.2,
      alpha: index === 0 ? 0.42 : 0.28,
    }));

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 1.75);
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const drawFish = (item: Fish, time: number) => {
      const x = item.x * width;
      const y = item.y * height + Math.sin(time * 0.0012 + item.phase) * 8;
      const s = 12 * item.scale;
      context.save();
      context.translate(x, y);
      context.scale(item.scale, item.scale);
      context.globalAlpha = item.alpha;

      const gradient = context.createLinearGradient(-s, 0, s, 0);
      gradient.addColorStop(0, 'rgba(101,183,196,.28)');
      gradient.addColorStop(0.5, 'rgba(223,249,250,.82)');
      gradient.addColorStop(1, 'rgba(104,200,211,.38)');
      context.fillStyle = gradient;
      context.beginPath();
      context.ellipse(0, 0, s * 1.3, s * 0.42, 0, 0, Math.PI * 2);
      context.fill();

      context.fillStyle = 'rgba(107,202,211,.42)';
      context.beginPath();
      context.moveTo(-s * 1.22, 0);
      context.lineTo(-s * 1.85, -s * 0.52);
      context.lineTo(-s * 1.72, s * 0.52);
      context.closePath();
      context.fill();

      context.fillStyle = 'rgba(228,255,255,.7)';
      context.beginPath();
      context.arc(s * 0.75, -s * 0.08, Math.max(1, s * 0.07), 0, Math.PI * 2);
      context.fill();
      context.restore();
    };

    const drawJelly = (item: Jelly, time: number) => {
      const pulse = 1 + Math.sin(time * 0.002 + item.phase) * 0.07;
      const x = item.x * width + Math.sin(time * 0.00045 + item.phase) * 16;
      const y = item.y * height + Math.sin(time * item.speed + item.phase) * 20;
      const radius = 26 * item.scale;

      context.save();
      context.translate(x, y);
      context.globalAlpha = item.alpha;
      context.shadowColor = 'rgba(65,234,241,.65)';
      context.shadowBlur = 24;

      const glow = context.createRadialGradient(0, -radius * 0.2, 2, 0, 0, radius * 1.3);
      glow.addColorStop(0, 'rgba(224,255,255,.95)');
      glow.addColorStop(0.45, 'rgba(70,234,239,.45)');
      glow.addColorStop(1, 'rgba(16,125,143,.02)');
      context.fillStyle = glow;
      context.beginPath();
      context.ellipse(0, 0, radius * pulse, radius * 0.62 / pulse, 0, Math.PI, 0);
      context.quadraticCurveTo(radius * 0.65, radius * 0.38, 0, radius * 0.44);
      context.quadraticCurveTo(-radius * 0.65, radius * 0.38, -radius * pulse, 0);
      context.fill();

      context.shadowBlur = 10;
      context.strokeStyle = 'rgba(105,244,246,.48)';
      context.lineWidth = 1;
      for (let i = -2; i <= 2; i += 1) {
        context.beginPath();
        context.moveTo(i * radius * 0.24, radius * 0.28);
        const sway = Math.sin(time * 0.0011 + item.phase + i) * 7;
        context.bezierCurveTo(i * radius * 0.22 + sway, radius * 0.9, i * radius * 0.16 - sway, radius * 1.5, i * radius * 0.2, radius * 2.05);
        context.stroke();
      }
      context.restore();
    };

    const render = (time: number) => {
      context.clearRect(0, 0, width, height);

      fish.forEach((item) => {
        item.x -= item.speed * Math.min(42, Math.max(10, time - frame || 16));
        if (item.x < -0.08) item.x = 1.08 + Math.random() * 0.3;
        drawFish(item, time);
      });
      jelly.forEach((item) => drawJelly(item, time));

      frame = time;
      animationFrame = requestAnimationFrame(render);
    };

    let animationFrame = requestAnimationFrame(render);
    resize();
    window.addEventListener('resize', resize, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resize);
    };
  }, [enabled]);

  return (
    <div ref={rootRef} className="ocean-experience" aria-hidden="true">
      <div className="ocean-experience-image" />
      {enabled && <canvas ref={canvasRef} className="ocean-life-canvas" />}
      <div className="ocean-experience-light" />
    </div>
  );
}
