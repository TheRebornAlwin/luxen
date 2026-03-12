"use client";

import { cn } from "@/lib/utils";

interface SectionDividerProps {
  variant?: "aurora" | "ray" | "gradient";
  className?: string;
}

export function SectionDivider({
  variant = "aurora",
  className,
}: SectionDividerProps) {
  if (variant === "ray") {
    return (
      <div className={cn("relative h-px w-full overflow-hidden", className)}>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
          style={{
            backgroundSize: "200% 100%",
            animation: "shimmer 3s linear infinite",
          }}
        />
      </div>
    );
  }

  if (variant === "gradient") {
    return (
      <div className={cn("relative h-24 w-full", className)}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-electric-violet/5 to-transparent" />
      </div>
    );
  }

  // Aurora variant
  return (
    <div className={cn("relative h-1 w-full overflow-hidden", className)}>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, transparent, #7b2fff40, #c9a84c40, #7b2fff40, transparent)",
          backgroundSize: "200% 100%",
          animation: "shimmer 4s linear infinite",
        }}
      />
    </div>
  );
}
