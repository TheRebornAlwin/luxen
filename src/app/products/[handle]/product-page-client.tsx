"use client";

import { useParams } from "next/navigation";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { GlassmorphismCard } from "@/components/ui/glassmorphism-card";
import { FloatingElement } from "@/components/ui/floating-element";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { SectionDivider } from "@/components/ui/section-divider";
import { ProductCard } from "@/components/product/product-card";
import { useCart } from "@/contexts/cart-context";
import { products } from "@/lib/data";
import { useState } from "react";

export function ProductPageClient() {
  const params = useParams();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.handle === params.handle);

  if (!product) {
    return (
      <main className="min-h-screen bg-space-black pt-32 pb-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <a href="/shop" className="text-gold hover:text-gold/80 transition-colors">
            Back to Shop
          </a>
        </div>
      </main>
    );
  }

  const discount = Math.round(
    ((product.compareAtPrice - product.price) / product.compareAtPrice) * 100
  );

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.images[0] || "",
      });
    }
  };

  return (
    <main className="min-h-screen bg-space-black pt-28 pb-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Breadcrumb */}
        <ScrollReveal>
          <nav className="flex items-center gap-2 text-xs text-white/30 mb-8">
            <a href="/" className="hover:text-white/50 transition-colors">
              Home
            </a>
            <span>/</span>
            <a href="/shop" className="hover:text-white/50 transition-colors">
              Shop
            </a>
            <span>/</span>
            <span className="text-white/60">{product.title}</span>
          </nav>
        </ScrollReveal>

        {/* Product Section */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left - Image */}
          <ScrollReveal direction="left">
            <div className="sticky top-28">
              <div className="relative aspect-square rounded-2xl bg-gradient-to-b from-midnight-navy/40 to-space-black/60 border border-white/[0.06] overflow-hidden flex items-center justify-center">
                {/* Glow effect */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-64 h-64 rounded-full bg-electric-violet/10 blur-[80px]" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1/2 god-ray" />

                <FloatingElement amplitude={8} duration={6}>
                  <div className="relative">
                    <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-gold/30">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 2a7 7 0 017 7M12 2a7 7 0 00-7 7" />
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 9v-2M12 17v-2M15 12h2M7 12h-2" />
                    </svg>
                    <span className="block text-[10px] tracking-[0.2em] uppercase text-white/20 text-center mt-4">
                      Product Image
                    </span>
                  </div>
                </FloatingElement>

                {discount > 0 && (
                  <span className="absolute top-4 right-4 text-xs bg-gold/90 text-space-black font-bold px-3 py-1 rounded-full">
                    -{discount}% OFF
                  </span>
                )}
              </div>
            </div>
          </ScrollReveal>

          {/* Right - Info */}
          <div>
            <ScrollReveal direction="right">
              <p className="text-xs tracking-[0.3em] uppercase text-gold/60 mb-2">
                {product.category}
              </p>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
                {product.title}
              </h1>
              <p className="text-lg text-white/40 italic mb-6">
                {product.tagline}
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-3xl font-bold text-gold">
                  ${product.price.toFixed(2)}
                </span>
                {product.compareAtPrice > product.price && (
                  <span className="text-lg text-white/30 line-through">
                    ${product.compareAtPrice.toFixed(2)}
                  </span>
                )}
                {discount > 0 && (
                  <span className="text-xs bg-gold/20 text-gold px-3 py-1 rounded-full font-medium">
                    SAVE {discount}%
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-sm text-white/50 leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Quantity + Add to Cart */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center rounded-full border border-white/10">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2.5 text-white/50 hover:text-white transition-colors"
                  >
                    -
                  </button>
                  <span className="px-4 py-2.5 text-sm font-medium min-w-[40px] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2.5 text-white/50 hover:text-white transition-colors"
                  >
                    +
                  </button>
                </div>
                <div className="flex-1">
                  <MagneticButton
                    variant="primary"
                    size="lg"
                    className="w-full justify-center"
                    onClick={handleAddToCart}
                  >
                    Add to Cart
                  </MagneticButton>
                </div>
              </div>

              {/* Trust badges */}
              <div className="grid grid-cols-3 gap-3 mb-8">
                {[
                  { icon: "Free Shipping", label: "Worldwide" },
                  { icon: "30-Day", label: "Guarantee" },
                  { icon: "Secure", label: "Checkout" },
                ].map((badge) => (
                  <div
                    key={badge.label}
                    className="text-center p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]"
                  >
                    <p className="text-xs font-medium text-gold/80">
                      {badge.icon}
                    </p>
                    <p className="text-[10px] text-white/30 mt-0.5">
                      {badge.label}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Specs */}
            <ScrollReveal direction="right" delay={0.2}>
              <GlassmorphismCard className="p-6">
                <h3 className="font-semibold text-sm mb-4 uppercase tracking-wider text-white/60">
                  Specifications
                </h3>
                <ul className="space-y-2">
                  {product.specs.map((spec, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-sm text-white/50"
                    >
                      <span className="w-1 h-1 rounded-full bg-gold/60 shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </GlassmorphismCard>
            </ScrollReveal>
          </div>
        </div>

        {/* Features Section */}
        {product.features.length > 0 && (
          <div className="mt-20">
            <SectionDivider variant="ray" className="mb-16" />
            <ScrollReveal>
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
                Why You&apos;ll Love It
              </h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.features.map((feature, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <GlassmorphismCard className="p-6 h-full">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                      <span className="text-gold text-sm font-bold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-white/40 leading-relaxed">
                      {feature.description}
                    </p>
                  </GlassmorphismCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        )}

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <SectionDivider variant="aurora" className="mb-16" />
            <ScrollReveal>
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
                You Might Also Like
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p, i) => (
                <ScrollReveal key={p.id} delay={i * 0.1}>
                  <ProductCard product={p} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
