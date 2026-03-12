"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
  const [loading, setLoading] = useState(() => {
    if (typeof window !== "undefined") {
      return !sessionStorage.getItem("luxen-loaded");
    }
    return true;
  });

  useEffect(() => {
    if (!loading) return;
    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem("luxen-loaded", "1");
    }, 1800);
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
      clearTimeout(timer);
    };
  }, [loading]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-space-black"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        >
          {/* Animated background glow */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <motion.div
              className="h-96 w-96 rounded-full bg-electric-violet/15 blur-[150px]"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.2, 1], opacity: [0, 0.8, 0.5] }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
            <motion.div
              className="absolute h-64 w-64 rounded-full bg-gold/10 blur-[120px]"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.3, 1.1], opacity: [0, 0.5, 0.3] }}
              transition={{ duration: 2.2, delay: 0.3, ease: "easeOut" }}
            />
          </div>

          {/* Rotating ring */}
          <div className="absolute">
            <motion.div
              className="w-36 h-36 md:w-44 md:h-44 rounded-full border border-white/[0.04]"
              initial={{ scale: 0, opacity: 0, rotate: 0 }}
              animate={{ scale: 1, opacity: 1, rotate: 360 }}
              transition={{
                scale: { duration: 1, delay: 0.2 },
                opacity: { duration: 1, delay: 0.2 },
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              }}
            >
              {/* Dot on the ring */}
              <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-gold/60" />
            </motion.div>
          </div>

          <div className="relative flex flex-col items-center gap-8">
            {/* Logo */}
            <motion.img
              src="https://cqdsz6sbj4.ufs.sh/f/Zv26MoXsTa78sUfnZyGG71I9kXyqfZrS2VxhbQNaiEsnWL85"
              alt="Luxen"
              width={72}
              height={72}
              className="h-14 md:h-18 w-auto"
              initial={{ opacity: 0, scale: 0.7, filter: "blur(12px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.4, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
            />

            {/* Loading bar */}
            <div className="h-[1px] w-52 overflow-hidden rounded-full bg-white/[0.06]">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-electric-violet via-gold to-electric-violet"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
              />
            </div>

            {/* Tagline */}
            <motion.p
              className="text-[10px] tracking-[0.5em] uppercase text-white/25"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              Illuminate Your Universe
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
