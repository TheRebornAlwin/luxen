"use client";

import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  disabled?: boolean;
}

export function MagneticButton({
  children,
  className,
  onClick,
  variant = "primary",
  size = "md",
  href,
  disabled,
}: MagneticButtonProps) {
  const variants = {
    primary:
      "bg-gold text-space-black font-semibold hover:bg-gold/90 hover:shadow-[0_4px_24px_rgba(201,168,76,0.35)]",
    secondary:
      "border border-white/20 text-white hover:border-gold/50 hover:text-gold hover:shadow-[0_4px_24px_rgba(201,168,76,0.15)]",
    ghost: "text-white/70 hover:text-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-8 py-3 text-base",
    lg: "px-10 py-4 text-lg",
  };

  const content = (
    <div
      className={cn(
        "relative inline-flex items-center justify-center gap-2 rounded-full overflow-hidden transition-all duration-300 hover:-translate-y-0.5",
        variants[variant],
        sizes[size],
        disabled && "opacity-50 pointer-events-none",
        className
      )}
      onClick={disabled ? undefined : onClick}
    >
      <span className="relative z-10">{children}</span>
    </div>
  );

  if (href) {
    return <a href={href}>{content}</a>;
  }

  return content;
}
