"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
  className?: string;
}

export function AnimatedCounter({ value, className }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    // Extract numeric part and suffix
    const match = value.match(/^([\d.]+)(.*)$/);
    if (!match) {
      setDisplay(value);
      return;
    }

    const target = parseFloat(match[1]);
    const suffix = match[2]; // e.g., "K+", "+", ""
    const isDecimal = match[1].includes(".");
    const duration = 1500;
    const steps = 40;
    const increment = target / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(target, increment * step);

      if (isDecimal) {
        setDisplay(current.toFixed(1) + suffix);
      } else {
        setDisplay(Math.floor(current) + suffix);
      }

      if (step >= steps) {
        setDisplay(value);
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
