"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const mouse = useRef({ x: 0, y: 0 });
  const dot = useRef({ x: 0, y: 0 });
  const glow = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Don't show on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let raf: number;

    const move = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      if (!visible) setVisible(true);
    };

    // Use raw RAF for cursor — no framer motion overhead
    const tick = () => {
      // Dot follows tightly
      dot.current.x += (mouse.current.x - dot.current.x) * 0.35;
      dot.current.y += (mouse.current.y - dot.current.y) * 0.35;

      // Glow trails more
      glow.current.x += (mouse.current.x - glow.current.x) * 0.15;
      glow.current.y += (mouse.current.y - glow.current.y) * 0.15;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dot.current.x - 6}px, ${dot.current.y - 6}px, 0)`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${glow.current.x - 16}px, ${glow.current.y - 16}px, 0)`;
      }

      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseleave", () => setVisible(false));
    document.addEventListener("mouseenter", () => setVisible(true));
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, [visible]);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-difference"
        style={{
          width: 12,
          height: 12,
          borderRadius: "50%",
          background: "#d4af37",
          opacity: visible ? 1 : 0,
          willChange: "transform",
          transition: "opacity 0.2s",
        }}
      />
      <div
        ref={glowRef}
        className="pointer-events-none fixed top-0 left-0 z-[9998]"
        style={{
          width: 32,
          height: 32,
          borderRadius: "50%",
          background: "rgba(123, 47, 255, 0.35)",
          filter: "blur(8px)",
          opacity: visible ? 0.4 : 0,
          willChange: "transform",
          transition: "opacity 0.2s",
        }}
      />
    </>
  );
}
