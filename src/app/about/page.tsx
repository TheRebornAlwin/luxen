"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { GlassmorphismCard } from "@/components/ui/glassmorphism-card";
import { SectionDivider } from "@/components/ui/section-divider";

const values = [
  {
    title: "Premium Quality",
    description:
      "Every Luxen product undergoes rigorous quality testing. We use only the finest materials and components to ensure a product that lasts.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: "Designed with Purpose",
    description:
      "Every feature, every color mode, every angle of projection has been thoughtfully designed to create a transformative experience.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    title: "Customer First",
    description:
      "With our 30-day guarantee, responsive support team, and worldwide shipping, we put your experience above everything else.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-space-black pt-32 pb-20">
      {/* Hero */}
      <div className="mx-auto max-w-7xl px-6 mb-20">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xs tracking-[0.3em] uppercase text-gold/80 mb-4">
              About Luxen
            </p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
              We bring the cosmos
              <span className="text-gold"> to your home</span>
            </h1>
            <p className="text-lg text-white/50 leading-relaxed">
              Luxen was born from a simple but powerful idea. The awe of
              standing under a star-filled sky shouldn&apos;t be reserved for remote
              countryside escapes. It should be something you can experience
              every single night, in the comfort of your own room.
            </p>
          </div>
        </ScrollReveal>
      </div>

      <SectionDivider variant="ray" className="max-w-xl mx-auto" />

      {/* Story */}
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <div className="relative aspect-square rounded-2xl bg-gradient-to-b from-midnight-navy/40 to-space-black/40 border border-white/[0.06] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-electric-violet/5 to-gold/5" />
              <div className="text-center">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" className="mx-auto text-gold/30 mb-4">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                </svg>
                <span className="text-xs tracking-[0.2em] uppercase text-white/20">
                  Brand Image
                </span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-6">
              Why we created <span className="text-gold">Luxen</span>
            </h2>
            <div className="space-y-4 text-white/50 leading-relaxed">
              <p>
                We found that the ambient lighting market was flooded with cheap,
                poorly made products that broke within weeks and produced
                underwhelming results. Color accuracy was off, motors were loud,
                and the overall experience was far from what the marketing
                promised.
              </p>
              <p>
                So we decided to change that. We partnered with expert engineers
                to develop projectors that are whisper quiet, produce stunning
                color-accurate projections, and are built to last. Our products
                go through 12 quality checks before they reach your door.
              </p>
              <p>
                Today, Luxen has helped over 50,000 customers transform their
                spaces, from bedrooms to gaming rooms, from meditation spaces
                to romantic settings. And we are just getting started.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <SectionDivider variant="aurora" />

      {/* Values */}
      <div className="mx-auto max-w-7xl px-6 py-20">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
              What We Stand For
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <GlassmorphismCard className="p-8 text-center h-full">
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-5 text-gold">
                  {value.icon}
                </div>
                <h3 className="font-semibold text-lg mb-3">{value.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">
                  {value.description}
                </p>
              </GlassmorphismCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </main>
  );
}
