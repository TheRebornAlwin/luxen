"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { FloatingElement } from "@/components/ui/floating-element";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { TextGradient } from "@/components/ui/text-gradient";

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const productY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.9]);

  return (
    <div ref={ref}>
      <AuroraBackground className="relative overflow-hidden">
        {/* Layered god rays */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            className="god-ray w-[700px] h-[700px] md:w-[1000px] md:h-[1000px]"
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.08, 1],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Floating glow orbs */}
        <div className="absolute top-1/4 left-1/4 pointer-events-none">
          <motion.div
            className="w-64 h-64 rounded-full bg-electric-violet/8 blur-[120px]"
            animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <div className="absolute bottom-1/4 right-1/4 pointer-events-none">
          <motion.div
            className="w-48 h-48 rounded-full bg-gold/5 blur-[100px]"
            animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <motion.div
          style={{ opacity, scale }}
          className="relative z-10 flex flex-col items-center justify-center px-6 text-center"
        >
          {/* Floating Product with parallax */}
          <motion.div style={{ y: productY }}>
            <FloatingElement amplitude={12} duration={5}>
              <motion.div
                initial={{ opacity: 0, scale: 0.6, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 3, ease: [0.25, 0.4, 0.25, 1] }}
                className="relative mb-6"
              >
                {/* Outer glow rings */}
                <div className="absolute inset-0 -m-16 rounded-full border border-gold/[0.06] animate-glow-pulse" />
                <div className="absolute inset-0 -m-10 rounded-full border border-electric-violet/[0.08] animate-glow-pulse" style={{ animationDelay: "0.5s" }} />

                {/* Product glow */}
                <div className="absolute inset-0 -m-8 rounded-full bg-gradient-to-b from-gold/15 via-electric-violet/10 to-transparent blur-3xl animate-glow-pulse" />

                {/* Product container */}
                <div className="relative w-52 h-52 md:w-72 md:h-72 rounded-full bg-gradient-to-b from-midnight-navy/80 to-space-black/80 border border-white/[0.08] flex items-center justify-center shadow-[0_0_80px_rgba(123,47,255,0.15),0_0_160px_rgba(201,168,76,0.06)]">
                  <div className="text-center">
                    <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.4" className="mx-auto text-gold/50">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 2a7 7 0 017 7M12 2a7 7 0 00-7 7" />
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 9v-2M12 17v-2M15 12h2M7 12h-2" />
                    </svg>
                    <span className="text-[9px] tracking-[0.3em] uppercase text-white/25 mt-3 block">
                      Image Soon
                    </span>
                  </div>
                </div>
              </motion.div>
            </FloatingElement>
          </motion.div>

          {/* Text with parallax */}
          <motion.div style={{ y: textY }} className="flex flex-col items-center">
            {/* Tagline chip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 3.2 }}
              className="mb-6"
            >
              <span className="inline-block text-[10px] tracking-[0.4em] uppercase text-gold/70 border border-gold/20 rounded-full px-5 py-1.5 backdrop-blur-sm">
                Premium Galaxy Projectors
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 3.4, ease: [0.25, 0.4, 0.25, 1] }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-[-0.02em] max-w-5xl leading-[1.05]"
            >
              Light Years Ahead
              <span className="block">
                of{" "}
                <TextGradient variant="gold">Ordinary</TextGradient>
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 3.8, ease: "easeOut" }}
              className="mt-6 max-w-xl text-base md:text-lg text-white/40 font-light leading-relaxed"
            >
              Transform any room into a breathtaking galaxy experience.
              <br className="hidden md:block" />
              {" "}Premium projectors designed for those who see beyond the ceiling.
            </motion.p>

            {/* CTA Group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 4.1, ease: "easeOut" }}
              className="mt-10 flex flex-col sm:flex-row items-center gap-4"
            >
              <MagneticButton variant="primary" size="lg" href="/products/nebula-astronaut-projector">
                Explore the Nebula
              </MagneticButton>
              <MagneticButton variant="secondary" size="lg" href="/shop">
                View Collection
              </MagneticButton>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4.6, duration: 0.8 }}
              className="mt-12 flex items-center gap-3"
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-gold">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <span className="text-xs text-white/30">
                Loved by <span className="text-white/50">50,000+</span> customers
              </span>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 5.2, duration: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-[9px] tracking-[0.4em] uppercase text-white/15">
                Scroll to explore
              </span>
              <div className="w-5 h-8 rounded-full border border-white/10 flex justify-center pt-1.5">
                <motion.div
                  className="w-1 h-1.5 rounded-full bg-gold/50"
                  animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </AuroraBackground>
    </div>
  );
}
