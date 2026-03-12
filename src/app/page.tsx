"use client";

import { HeroSection } from "@/components/sections/hero-section";
import { FeaturedCollection } from "@/components/sections/featured-collection";
import { ProductShowcase } from "@/components/sections/product-showcase";
import { BrandStory } from "@/components/sections/brand-story";
import { SectionDivider } from "@/components/ui/section-divider";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SectionDivider variant="aurora" />
      <FeaturedCollection />
      <ProductShowcase />
      <SectionDivider variant="ray" />
      <BrandStory />
    </>
  );
}
