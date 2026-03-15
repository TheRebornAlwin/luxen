"use client";

import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { FloatingElement } from "@/components/ui/floating-element";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { TextGradient } from "@/components/ui/text-gradient";

export function HeroSection() {
  return (
    <AuroraBackground className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      {/* God ray — simple CSS, no motion animation */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="god-ray w-[600px] h-[600px] md:w-[900px] md:h-[900px] animate-glow-pulse" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center">
        {/* Floating Product */}
        <FloatingElement amplitude={10} duration={6}>
          <motion.div
            initial={{ opacity: 0, scale: 0.7, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="relative mb-8"
          >
            {/* Product glow */}
            <div className="absolute inset-0 -m-6 rounded-full bg-gradient-to-b from-gold/10 via-electric-violet/8 to-transparent blur-2xl animate-glow-pulse" />

            {/* Product image */}
            <div className="relative w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden shadow-[0_0_60px_rgba(123,47,255,0.12),0_0_120px_rgba(201,168,76,0.05)]">
              <img
                src="https://cqdsz6sbj4.ufs.sh/f/Zv26MoXsTa78WZ0XA8n2lEyVhDXz2vU5jxeOc1u0FrmnwZf4"
                alt="Nebula Astronaut Projector"
                // @ts-expect-error fetchpriority not in React types yet
                fetchpriority="high"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </FloatingElement>

        {/* Text */}
        <div className="flex flex-col items-center">
          {/* Tagline chip */}
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-[-0.02em] max-w-4xl leading-[1.1]"
          >
            Light Years Ahead
            <span className="block mt-1">
              of{" "}
              <TextGradient variant="gold">Ordinary</TextGradient>
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
            className="mt-6 max-w-lg text-base md:text-lg text-white/40 font-light leading-relaxed"
          >
            Transform any room into a breathtaking galaxy experience.
            Premium projectors designed for those who see beyond the ceiling.
          </motion.p>

          {/* CTA Group */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3, ease: "easeOut" }}
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
            transition={{ delay: 1.6, duration: 0.8 }}
            className="mt-10 flex items-center gap-3"
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
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0, duration: 1 }}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
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
      </div>
    </AuroraBackground>
  );
}
