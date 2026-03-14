"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { TextGradient } from "@/components/ui/text-gradient";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "30-Day Guarantee",
    description: "Not satisfied? Full refund within 30 days, no questions asked.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    title: "Free Worldwide Shipping",
    description: "We deliver to your doorstep anywhere on the planet, on us.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: "Premium Quality",
    description: "12 quality checks before every unit ships. Built to last, designed to impress.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    title: "24h Support",
    description: "Our team responds within 24 hours. Real humans, real solutions.",
  },
];

export function WhyLuxen() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
              Why Choose{" "}
              <TextGradient variant="gold">Luxen</TextGradient>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {reasons.map((reason, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <motion.div
                className="text-center group"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-b from-gold/10 to-electric-violet/5 border border-white/[0.06] flex items-center justify-center mx-auto mb-4 text-gold/70 group-hover:text-gold group-hover:border-gold/20 transition-all duration-500">
                  {reason.icon}
                </div>
                <h3 className="font-semibold text-sm mb-2 group-hover:text-gold transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-xs text-white/35 leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
