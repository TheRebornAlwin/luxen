"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function CustomCursor() {
  const [visible, setVisible] = useState(false);

  const cursorX = useSpring(0, { damping: 25, stiffness: 250 });
  const cursorY = useSpring(0, { damping: 25, stiffness: 250 });

  const trailX = useSpring(0, { damping: 20, stiffness: 150 });
  const trailY = useSpring(0, { damping: 20, stiffness: 150 });

  useEffect(() => {
    // Don't show on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      trailX.set(e.clientX);
      trailY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
    };
  }, [cursorX, cursorY, trailX, trailY, visible]);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: visible ? 1 : 0,
        }}
      >
        <div className="h-3 w-3 rounded-full bg-gold" />
      </motion.div>

      {/* Trail glow */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9998]"
        style={{
          x: trailX,
          y: trailY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: visible ? 0.4 : 0,
        }}
      >
        <div className="h-8 w-8 rounded-full bg-electric-violet blur-md" />
      </motion.div>
    </>
  );
}
