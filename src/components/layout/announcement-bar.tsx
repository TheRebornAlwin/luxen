"use client";

import { useState } from "react";

export function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-space-black via-midnight-navy to-space-black border-b border-white/[0.06]">
      <div className="flex items-center justify-center px-4 py-2">
        <p className="text-xs tracking-[0.2em] uppercase text-white/70">
          <span className="text-gold">Free Shipping</span> — Limited Time
          Only
        </p>
        <button
          onClick={() => setVisible(false)}
          className="absolute right-4 text-white/30 hover:text-white/60 transition-colors"
          aria-label="Close announcement"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
