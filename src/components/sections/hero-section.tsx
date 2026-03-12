"use client";

import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { FloatingElement } from "@/components/ui/floating-element";
import { MagneticButton } from "@/components/ui/magnetic-button";

export function HeroSection() {
  return (
    <AuroraBackground className="relative overflow-hidden">
      {/* God ray beneath product */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="god-ray w-[600px] h-[600px] md:w-[800px] md:h-[800px] animate-glow-pulse" />
      </div>

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-[400px] h-[400px] rounded-full bg-electric-violet/10 blur-[120px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center">
        {/* Floating Product */}
        <FloatingElement amplitude={12} duration={5}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 3, ease: "easeOut" }}
            className="relative mb-8"
          >
            {/* Product glow ring */}
            <div className="absolute inset-0 -m-8 rounded-full bg-gradient-to-b from-gold/20 via-electric-violet/10 to-transparent blur-2xl animate-glow-pulse" />

            {/* Product placeholder - replace with actual image */}
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-b from-midnight-navy/80 to-space-black/80 border border-white/[0.08] flex items-center justify-center shadow-[0_0_60px_rgba(123,47,255,0.15),0_0_120px_rgba(201,168,76,0.08)]">
              <div className="text-center">
                <div className="text-5xl md:text-6xl mb-2 opacity-50">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" className="mx-auto text-gold/60">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a7 7 0 017 7M12 2a7 7 0 00-7 7" />
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 9v-2M12 17v-2M15 12h2M7 12h-2" />
                  </svg>
                </div>
                <span className="text-[10px] tracking-[0.3em] uppercase text-white/30">
                  Image Soon
                </span>
              </div>
            </div>
          </motion.div>
        </FloatingElement>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.4, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl leading-[1.1]"
        >
          Light Years Ahead
          <span className="block text-gold">of Ordinary</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.7, ease: "easeOut" }}
          className="mt-6 max-w-lg text-base md:text-lg text-white/50 font-light leading-relaxed"
        >
          Transform any room into a breathtaking galaxy experience with our
          premium astronaut projector.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 4, ease: "easeOut" }}
          className="mt-10"
        >
          <MagneticButton
            variant="primary"
            size="lg"
            href="/products/nebula-astronaut-projector"
          >
            Explore the Nebula
          </MagneticButton>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[10px] tracking-[0.3em] uppercase text-white/20">
              Scroll
            </span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-white/20">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </AuroraBackground>
  );
}
