"use client";

import { useParams } from "next/navigation";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { GlassmorphismCard } from "@/components/ui/glassmorphism-card";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { SectionDivider } from "@/components/ui/section-divider";
import { ProductTabs } from "@/components/product/product-tabs";
import { ProductReviews } from "@/components/product/product-reviews";
import { VolumeDiscounts } from "@/components/product/volume-discounts";
import { useCurrency } from "@/components/product/currency-converter";
import { useCart } from "@/contexts/cart-context";
import { products } from "@/lib/data";
import { useState } from "react";

export function ProductPageClient() {
  const params = useParams();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const { convert, currencyName } = useCurrency();

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
          <nav className="flex items-center justify-center md:justify-start gap-2 text-xs text-white/30 mb-8">
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
          {/* Left - Image Gallery */}
          <ScrollReveal direction="left" className="min-w-0">
            <div className="sticky top-28 overflow-hidden">
              {/* Main Image */}
              <div className="relative aspect-square rounded-2xl bg-gradient-to-b from-midnight-navy/40 to-space-black/60 border border-white/[0.06] overflow-hidden">
                {product.images.length > 0 ? (
                  <img
                    src={product.images[selectedImage]}
                    alt={`${product.title} - Image ${selectedImage + 1}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-white/20 text-sm">No image</span>
                  </div>
                )}

                {discount > 0 && (
                  <span className="absolute top-4 right-4 text-xs bg-gold/90 text-space-black font-bold px-3 py-1 rounded-full">
                    -{discount}% OFF
                  </span>
                )}
              </div>

              {/* Thumbnails */}
              {product.images.length > 1 && (
                <div className="flex gap-2 mt-3 overflow-x-auto pb-1 max-w-full justify-center md:justify-start">
                  {product.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImage(i)}
                      className={`shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImage === i
                          ? "border-gold/70 opacity-100"
                          : "border-white/[0.06] opacity-50 hover:opacity-80"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${product.title} thumbnail ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </ScrollReveal>

          {/* Right - Info */}
          <div className="min-w-0">
            <ScrollReveal direction="right">
              <p className="text-xs tracking-[0.3em] uppercase text-gold/60 mb-2 text-center md:text-left">
                {product.category}
              </p>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 text-center md:text-left">
                {product.title}
              </h1>
              <p className="text-lg text-white/40 italic mb-6 text-center md:text-left">
                {product.tagline}
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-2 justify-center md:justify-start">
                <span className="text-3xl font-bold text-gold">
                  {convert(product.price)}
                </span>
                {product.compareAtPrice > product.price && (
                  <span className="text-lg text-white/30 line-through">
                    {convert(product.compareAtPrice)}
                  </span>
                )}
                {discount > 0 && (
                  <span className="text-xs bg-gold/20 text-gold px-3 py-1 rounded-full font-medium">
                    SAVE {discount}%
                  </span>
                )}
              </div>
              {currencyName !== "USD" && (
                <p className="text-[10px] text-white/25 mb-6 text-center md:text-left">
                  Prices shown in {currencyName}. Charged in USD at checkout.
                </p>
              )}
              {currencyName === "USD" && <div className="mb-6" />}

              {/* Description */}
              <p className="text-sm text-white/50 leading-relaxed mb-6 text-center md:text-left">
                {product.description}
              </p>

              {/* Volume Discounts */}
              <div className="mb-6">
                <VolumeDiscounts
                  price={product.price}
                  quantity={quantity}
                  onQuantityChange={setQuantity}
                />
              </div>

              {/* Quantity + Add to Cart */}
              <div className="flex items-center justify-center md:justify-start gap-4 mb-8">
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

            {/* Product Tabs */}
            <ScrollReveal direction="right" delay={0.1}>
              <GlassmorphismCard className="p-6">
                <ProductTabs
                  tabs={[
                    {
                      label: "Details",
                      content: (
                        <ul className="space-y-2">
                          {product.specs.map((spec, i) => (
                            <li key={i} className="flex items-center gap-3">
                              <span className="w-1 h-1 rounded-full bg-gold/60 shrink-0" />
                              {spec}
                            </li>
                          ))}
                        </ul>
                      ),
                    },
                    {
                      label: "Shipping",
                      content: (
                        <div className="space-y-3">
                          <p>
                            Due to high demand, orders may take 2-4 weeks to arrive.
                            We ship worldwide with tracking included on every order.
                          </p>
                          <p>
                            Free shipping on all orders. No minimum purchase required.
                          </p>
                          <p>
                            Need help? Email us at{" "}
                            <a
                              href="mailto:shoptheluxen@gmail.com"
                              className="text-gold hover:text-gold/80 transition-colors"
                            >
                              shoptheluxen@gmail.com
                            </a>
                          </p>
                        </div>
                      ),
                    },
                    {
                      label: "Our Guarantee",
                      content: (
                        <div className="space-y-3">
                          <p>
                            We truly believe we make some of the best galaxy projectors
                            available, and we back that up with a risk-free, ironclad
                            30-day money back guarantee.
                          </p>
                          <p>
                            If you don't have a positive experience for any reason,
                            we will do whatever it takes to make sure you are 100%
                            satisfied with your purchase.
                          </p>
                          <p>
                            Contact our friendly support team at{" "}
                            <a
                              href="mailto:shoptheluxen@gmail.com"
                              className="text-gold hover:text-gold/80 transition-colors"
                            >
                              shoptheluxen@gmail.com
                            </a>
                            {" "}and we'll make it right.
                          </p>
                        </div>
                      ),
                    },
                  ]}
                />
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
                  <GlassmorphismCard className="p-6 h-full text-center md:text-left">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mb-4 mx-auto md:mx-0">
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

        {/* Reviews Section */}
        <div className="mt-20">
          <SectionDivider variant="aurora" className="mb-16" />
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Customer Reviews
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <ProductReviews />
          </ScrollReveal>
        </div>

      </div>
    </main>
  );
}
