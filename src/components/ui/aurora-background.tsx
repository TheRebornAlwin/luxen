"use client";

import { cn } from "@/lib/utils";
import React, { type ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col h-[100vh] items-center justify-center bg-space-black transition-all",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={cn(
            "aurora-bg pointer-events-none absolute -inset-[10px] opacity-40 will-change-transform",
            "after:absolute after:inset-0 after:animate-aurora after:will-change-transform",
            showRadialGradient &&
              "[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]"
          )}
        />
      </div>
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
};
