"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { GlassmorphismCard } from "@/components/ui/glassmorphism-card";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { TextGradient } from "@/components/ui/text-gradient";

const stats = [
  { value: "50K+", label: "Happy Customers" },
  { value: "12", label: "Color Modes" },
  { value: "4.9", label: "Average Rating" },
  { value: "30", label: "Day Guarantee" },
];

export function BrandStory() {
  return (
    <section className="relative section-gradient-violet">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-36">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left - Story */}
          <ScrollReveal direction="left">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.15] mb-6">
              Born from a love of
              <span className="block">
                <TextGradient variant="aurora">the cosmos</TextGradient>
              </span>
            </h2>
            <div className="space-y-4 text-white/45 leading-relaxed">
              <p>
                Luxen was created with a single vision. To bring the
                breathtaking beauty of the night sky into every home. We
                believed that everyone deserves to experience the wonder of the
                cosmos, not just on clear nights far from the city, but every
                single evening.
              </p>
              <p>
                Our team of designers and engineers obsess over every detail,
                from the color accuracy of our nebula projections to the
                whisper-quiet motors that let you drift off under the stars
                without a sound. This is not just a product. It is an
                experience.
              </p>
            </div>
            <div className="mt-8">
              <MagneticButton variant="secondary" href="/about">
                Learn More About Us
              </MagneticButton>
            </div>
          </ScrollReveal>

          {/* Right - Stats */}
          <ScrollReveal direction="right">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <GlassmorphismCard
                  key={i}
                  className="p-6 md:p-8 text-center group hover:border-gold/15 transition-all duration-500"
                  glowColor={
                    i % 2 === 0
                      ? "rgba(245, 197, 66, 0.08)"
                      : "rgba(123, 47, 255, 0.08)"
                  }
                >
                  <div className="text-3xl md:text-4xl font-bold text-gold mb-2">
                    <AnimatedCounter value={stat.value} />
                  </div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-white/35 group-hover:text-white/50 transition-colors">
                    {stat.label}
                  </div>
                </GlassmorphismCard>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
