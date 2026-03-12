"use client";

import { cn } from "@/lib/utils";

interface GlassmorphismCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export function GlassmorphismCard({
  children,
  className,
  glowColor = "rgba(123, 47, 255, 0.08)",
}: GlassmorphismCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl overflow-hidden",
        "bg-white/[0.03] backdrop-blur-sm",
        "border border-white/[0.06]",
        "shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]",
        "transition-all duration-500 hover:border-white/[0.12]",
        className
      )}
      style={{
        boxShadow: `inset 0 1px 1px rgba(255,255,255,0.05), 0 0 30px ${glowColor}`,
      }}
    >
      {children}
    </div>
  );
}
