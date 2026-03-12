"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
}

export function MagneticButton({
  children,
  className,
  onClick,
  variant = "primary",
  size = "md",
  href,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) * 0.3;
    const y = (e.clientY - top - height / 2) * 0.3;
    setPosition({ x, y });
  };

  const handleLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const variants = {
    primary:
      "bg-gold text-space-black font-semibold hover:bg-gold/90",
    secondary:
      "border border-white/20 text-white hover:border-gold/50 hover:text-gold",
    ghost: "text-white/70 hover:text-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-8 py-3 text-base",
    lg: "px-10 py-4 text-lg",
  };

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 200, damping: 15, mass: 0.5 }}
      className={cn(
        "relative inline-flex items-center justify-center gap-2 rounded-full overflow-hidden transition-colors duration-300",
        variants[variant],
        sizes[size],
        className
      )}
      onClick={onClick}
    >
      {/* Shimmer overlay */}
      <div
        className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%)",
          backgroundSize: "200% 100%",
          animation: "shimmer 2s linear infinite",
        }}
      />
      <span className="relative z-10">{children}</span>
    </motion.div>
  );

  if (href) {
    return <a href={href}>{content}</a>;
  }

  return content;
}
