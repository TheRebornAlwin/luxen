"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-space-black"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        >
          {/* Background glow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="h-64 w-64 rounded-full bg-electric-violet/20 blur-[100px]"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>

          <div className="relative flex flex-col items-center gap-8">
            {/* Logo */}
            <motion.img
              src="https://cqdsz6sbj4.ufs.sh/f/Zv26MoXsTa78sUfnZyGG71I9kXyqfZrS2VxhbQNaiEsnWL85"
              alt="Luxen"
              className="h-16 md:h-20"
              initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            />

            {/* Loading bar */}
            <div className="h-[1px] w-48 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full bg-gradient-to-r from-electric-violet via-gold to-electric-violet"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.2, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
              />
            </div>

            {/* Tagline */}
            <motion.p
              className="text-[10px] tracking-[0.4em] uppercase text-white/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              Illuminate your universe
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
