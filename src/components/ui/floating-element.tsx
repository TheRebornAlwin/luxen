"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FloatingElementProps {
  children: React.ReactNode;
  className?: string;
  amplitude?: number;
  duration?: number;
  delay?: number;
}

export function FloatingElement({
  children,
  className,
  amplitude = 15,
  duration = 6,
  delay = 0,
}: FloatingElementProps) {
  return (
    <motion.div
      animate={{ y: [-amplitude, amplitude, -amplitude] }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
