"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { GlassmorphismCard } from "@/components/ui/glassmorphism-card";
import { TextGradient } from "@/components/ui/text-gradient";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah M.",
    location: "New York, USA",
    text: "ok so i was skeptical at first but this thing is actually insane?? my whole ceiling looks like outer space now. literally cant sleep without it anymore",
    rating: 5,
  },
  {
    name: "James T.",
    location: "London, UK",
    text: "Got it for my gaming setup and WOW. The colours are super rich, covers the whole ceiling too. Mates come over and they all want one now lol. 10/10 would buy again.",
    rating: 5,
  },
  {
    name: "Emily K.",
    location: "Melbourne, AU",
    text: "Bought this for my daughter, she absolutely loves it. You can tell its well made, not like the cheap ones that break after a week. Motor is silent too which is a big plus for us.",
    rating: 5,
  },
  {
    name: "David R.",
    location: "Toronto, CA",
    text: "The timer feature is so clutch. I set it for 30 min and just fall asleep under the stars every night, turns off on its own. Remote is nice too so I don't have to get out of bed",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="relative section-gradient-navy">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-36">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-gold/80 mb-4">
              Reviews
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              What Our Customers{" "}
              <TextGradient variant="gold">Say</TextGradient>
            </h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-gold">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-white/40">4.9 average from 2,400+ reviews</span>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <GlassmorphismCard
                className="p-6 h-full flex flex-col group hover:border-gold/15 transition-all duration-500"
                glowColor="rgba(201, 168, 76, 0.05)"
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <motion.svg
                      key={j}
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-gold/80"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + j * 0.05 }}
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </motion.svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm text-white/50 leading-relaxed flex-1 mb-4">
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Author */}
                <div className="border-t border-white/[0.06] pt-4">
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-[11px] text-white/30">{t.location}</p>
                </div>
              </GlassmorphismCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
