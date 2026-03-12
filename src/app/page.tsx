"use client";

import { HeroSection } from "@/components/sections/hero-section";
import { FeaturedCollection } from "@/components/sections/featured-collection";
import { ProductShowcase } from "@/components/sections/product-showcase";
import { BrandStory } from "@/components/sections/brand-story";
import { Testimonials } from "@/components/sections/testimonials";
import { WhyLuxen } from "@/components/sections/why-luxen";
import { SectionDivider } from "@/components/ui/section-divider";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SectionDivider variant="aurora" />
      <WhyLuxen />
      <SectionDivider variant="ray" className="max-w-2xl mx-auto" />
      <FeaturedCollection />
      <ProductShowcase />
      <SectionDivider variant="ray" className="max-w-2xl mx-auto" />
      <Testimonials />
      <SectionDivider variant="aurora" />
      <BrandStory />
    </>
  );
}
