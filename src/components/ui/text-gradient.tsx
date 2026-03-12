"use client";

import { cn } from "@/lib/utils";

interface TextGradientProps {
  children: React.ReactNode;
  className?: string;
  variant?: "gold" | "violet" | "aurora";
}

export function TextGradient({
  children,
  className,
  variant = "gold",
}: TextGradientProps) {
  const gradients = {
    gold: "from-gold via-amber-200 to-gold",
    violet: "from-electric-violet via-purple-300 to-electric-violet",
    aurora: "from-electric-violet via-gold to-electric-violet",
  };

  return (
    <span
      className={cn(
        "bg-gradient-to-r bg-clip-text text-transparent",
        gradients[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
