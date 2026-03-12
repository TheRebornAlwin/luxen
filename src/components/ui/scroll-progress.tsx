"use client";

import { motion, useScroll } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[9999] h-[2px] origin-left bg-gradient-to-r from-electric-violet via-gold to-electric-violet"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
