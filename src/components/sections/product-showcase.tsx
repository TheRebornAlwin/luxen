"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { GlassmorphismCard } from "@/components/ui/glassmorphism-card";
import { FloatingElement } from "@/components/ui/floating-element";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { heroProduct } from "@/lib/data";

export function ProductShowcase() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-32">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-gold/80 mb-4">
              Hero Product
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              {heroProduct.title}
            </h2>
            <p className="mt-2 text-lg text-white/40 italic">
              {heroProduct.tagline}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Product Visual */}
          <ScrollReveal direction="left">
            <div className="relative flex items-center justify-center">
              {/* Background glow */}
              <div className="absolute w-80 h-80 rounded-full bg-electric-violet/10 blur-[100px]" />

              <FloatingElement amplitude={10} duration={7}>
                <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-[0_0_80px_rgba(123,47,255,0.12)]">
                  <img
                    src="https://cqdsz6sbj4.ufs.sh/f/Zv26MoXsTa78WZ0XA8n2lEyVhDXz2vU5jxeOc1u0FrmnwZf4"
                    alt="Nebula Astronaut Projector"
                    className="w-full h-full object-cover"
                  />
                </div>
              </FloatingElement>
            </div>
          </ScrollReveal>

          {/* Features */}
          <div className="space-y-4">
            {heroProduct.features.map((feature, i) => (
              <ScrollReveal key={i} delay={i * 0.1} direction="right">
                <GlassmorphismCard className="p-5">
                  <div className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                      <span className="text-gold text-sm font-bold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-xs text-white/40 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </GlassmorphismCard>
              </ScrollReveal>
            ))}

            <ScrollReveal delay={0.5} direction="right">
              <div className="flex items-center gap-4 pt-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-gold">
                    ${heroProduct.price.toFixed(2)}
                  </span>
                  <span className="text-lg text-white/30 line-through">
                    ${heroProduct.compareAtPrice.toFixed(2)}
                  </span>
                </div>
                <span className="text-xs bg-gold/20 text-gold px-3 py-1 rounded-full font-medium">
                  50% OFF
                </span>
              </div>
              <div className="mt-4">
                <MagneticButton
                  variant="primary"
                  size="lg"
                  href="/products/nebula-astronaut-projector"
                >
                  Shop Now
                </MagneticButton>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
