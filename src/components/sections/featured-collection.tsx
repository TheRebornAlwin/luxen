"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionDivider } from "@/components/ui/section-divider";
import { ProductCard } from "@/components/product/product-card";
import { products } from "@/lib/data";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { TextGradient } from "@/components/ui/text-gradient";
import { ParallaxSection } from "@/components/ui/parallax-section";

export function FeaturedCollection() {
  return (
    <section className="relative section-gradient-navy">
      <SectionDivider variant="gradient" />

      <div className="mx-auto max-w-7xl px-6 py-24 md:py-36">
        <ParallaxSection speed={0.1}>
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.3em] uppercase text-gold/80 mb-4">
                Our Collection
              </p>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                <TextGradient variant="gold">Featured</TextGradient> Products
              </h2>
              <p className="mt-4 text-white/35 max-w-lg mx-auto leading-relaxed">
                Each piece is designed to transform your space into something
                extraordinary. Hover to explore.
              </p>
            </div>
          </ScrollReveal>
        </ParallaxSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <ScrollReveal key={product.id} delay={i * 0.12}>
              <ProductCard product={product} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-14 text-center">
            <MagneticButton variant="secondary" href="/shop">
              View All Products
            </MagneticButton>
          </div>
        </ScrollReveal>
      </div>

      <SectionDivider variant="gradient" />
    </section>
  );
}
