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
        "relative flex flex-col min-h-screen items-center justify-center bg-space-black",
        className
      )}
      {...props}
    >
      {/* Simplified aurora — pure CSS, no heavy blend modes */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={cn(
            "absolute -inset-[10px] opacity-25 will-change-transform",
            showRadialGradient &&
              "[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]"
          )}
          style={{
            background: "linear-gradient(135deg, rgba(123,47,255,0.15) 0%, rgba(13,27,42,0.3) 40%, rgba(201,168,76,0.08) 70%, rgba(10,10,15,1) 100%)",
          }}
        />
        {/* Slow moving aurora — single element, GPU composited */}
        <div
          className="absolute -inset-[10px] opacity-20 animate-aurora will-change-transform"
          style={{
            backgroundImage: "repeating-linear-gradient(100deg, rgba(123,47,255,0.2) 10%, rgba(76,29,149,0.15) 15%, rgba(30,27,75,0.1) 20%, rgba(201,168,76,0.08) 25%, rgba(123,47,255,0.2) 30%)",
            backgroundSize: "200% 100%",
          }}
        />
      </div>
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
};
