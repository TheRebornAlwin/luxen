"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ProductCard } from "@/components/product/product-card";
import { products } from "@/lib/data";

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-space-black pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-gold/80 mb-4">
              Our Collection
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              All Products
            </h1>
            <p className="text-white/40 max-w-lg mx-auto">
              Explore our full range of premium galaxy projectors and ambient
              lighting.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <ScrollReveal key={product.id} delay={i * 0.1}>
              <ProductCard product={product} />
            </ScrollReveal>
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-20">
            <p className="text-white/30">No products found.</p>
          </div>
        )}
      </div>
    </main>
  );
}
