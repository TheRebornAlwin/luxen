"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { GlassmorphismCard } from "@/components/ui/glassmorphism-card";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { ProductCard } from "@/components/product/product-card";
import { products } from "@/lib/data";

export default function TrackOrderPage() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingNumber.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <main className="min-h-screen bg-space-black pt-32 pb-20">
      <div className="mx-auto max-w-4xl px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.3em] uppercase text-gold/80 mb-4">
              Order Status
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Track Your Order
            </h1>
            <p className="text-white/40 max-w-lg mx-auto">
              Enter your tracking number to see the latest status of your
              delivery.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <GlassmorphismCard className="p-8 max-w-xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs tracking-wider uppercase text-white/40 mb-2">
                  Tracking Number
                </label>
                <input
                  type="text"
                  value={trackingNumber}
                  onChange={(e) => {
                    setTrackingNumber(e.target.value);
                    setSubmitted(false);
                  }}
                  className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/20 focus:border-gold/50 focus:outline-none transition-colors"
                  placeholder="Enter your tracking number"
                />
              </div>
              <MagneticButton
                variant="primary"
                className="w-full justify-center"
              >
                Track Order
              </MagneticButton>
            </form>

            {submitted && (
              <div className="mt-6 p-4 rounded-lg bg-white/[0.03] border border-white/[0.06] text-center">
                <p className="text-sm text-white/50">
                  Tracking information for{" "}
                  <span className="text-gold font-medium">
                    {trackingNumber}
                  </span>{" "}
                  will appear here once integrated with your shipping provider.
                </p>
                <p className="text-xs text-white/30 mt-2">
                  Can&apos;t find your tracking number? Check your order
                  confirmation email or{" "}
                  <a
                    href="mailto:support@luxen.com"
                    className="text-gold hover:text-gold/80"
                  >
                    contact support
                  </a>
                  .
                </p>
              </div>
            )}
          </GlassmorphismCard>
        </ScrollReveal>

        {/* Product Recommendations */}
        <div className="mt-20">
          <ScrollReveal>
            <div className="text-center mb-8">
              <h2 className="text-xl font-semibold">
                While you wait, check these out
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(0, 4).map((product, i) => (
              <ScrollReveal key={product.id} delay={i * 0.1}>
                <ProductCard product={product} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
