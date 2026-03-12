"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleOffset: number;
}

export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let stars: Star[] = [];
    let lastTime = 0;
    const FPS = 30; // Cap at 30fps — particles don't need 60
    const frameInterval = 1000 / FPS;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 1.5); // Limit DPR
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.scale(dpr, dpr);
      initStars();
    };

    const initStars = () => {
      // Much fewer stars — max 150
      const count = Math.min(150, Math.floor((window.innerWidth * window.innerHeight) / 15000));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 1.2 + 0.3,
        opacity: Math.random() * 0.5 + 0.1,
        twinkleOffset: Math.random() * Math.PI * 2,
      }));
    };

    const animate = (time: number) => {
      animationId = requestAnimationFrame(animate);

      const delta = time - lastTime;
      if (delta < frameInterval) return;
      lastTime = time - (delta % frameInterval);

      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);

      for (const star of stars) {
        const twinkle = Math.sin(time * 0.001 + star.twinkleOffset) * 0.3 + 0.7;
        ctx.globalAlpha = star.opacity * twinkle;
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(star.x, star.y, star.size, star.size); // Rect is faster than arc
      }
      ctx.globalAlpha = 1;
    };

    resize();
    animationId = requestAnimationFrame(animate);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      style={{ opacity: 0.5 }}
    />
  );
}
