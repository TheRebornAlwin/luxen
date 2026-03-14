"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { GlassmorphismCard } from "@/components/ui/glassmorphism-card";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { useCart } from "@/contexts/cart-context";
import { buildCheckoutUrl } from "@/lib/shopify";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice } = useCart();

  return (
    <main className="min-h-screen bg-space-black pt-32 pb-20">
      <div className="mx-auto max-w-4xl px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Your Cart
            </h1>
            <p className="text-white/40">
              {items.length === 0
                ? "Your cart is empty"
                : `${items.reduce((sum, i) => sum + i.quantity, 0)} item${items.reduce((sum, i) => sum + i.quantity, 0) !== 1 ? "s" : ""} in your cart`}
            </p>
          </div>
        </ScrollReveal>

        {items.length === 0 ? (
          <ScrollReveal>
            <div className="text-center py-16">
              <div className="text-white/10 mb-6">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" className="mx-auto">
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" />
                </svg>
              </div>
              <p className="text-white/30 mb-6">
                Looks like you haven&apos;t added anything yet.
              </p>
              <MagneticButton variant="primary" href="/shop">
                Start Shopping
              </MagneticButton>
            </div>
          </ScrollReveal>
        ) : (
          <div className="space-y-6">
            {items.map((item, i) => (
              <ScrollReveal key={item.id} delay={i * 0.05}>
                <GlassmorphismCard className="p-6">
                  <motion.div
                    layout
                    className="flex flex-col sm:flex-row gap-6"
                  >
                    {/* Image */}
                    <div className="w-24 h-24 rounded-xl bg-midnight-navy/50 flex items-center justify-center shrink-0 border border-white/[0.04]">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-white/15">
                        <circle cx="12" cy="12" r="10" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <Link
                        href={`/products/${item.id}`}
                        className="font-semibold hover:text-gold transition-colors"
                      >
                        {item.title}
                      </Link>
                      <p className="text-gold font-medium mt-1">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>

                    {/* Controls */}
                    <div className="flex items-center gap-6">
                      <div className="flex items-center rounded-full border border-white/10">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="px-3 py-1.5 text-white/50 hover:text-white transition-colors"
                        >
                          -
                        </button>
                        <span className="px-3 py-1.5 text-sm font-medium min-w-[32px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="px-3 py-1.5 text-white/50 hover:text-white transition-colors"
                        >
                          +
                        </button>
                      </div>

                      <p className="font-semibold text-lg min-w-[80px] text-right">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-white/20 hover:text-red-400 transition-colors"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
                        </svg>
                      </button>
                    </div>
                  </motion.div>
                </GlassmorphismCard>
              </ScrollReveal>
            ))}

            {/* Summary */}
            <ScrollReveal>
              <GlassmorphismCard className="p-6 mt-8">
                <div className="space-y-3">
                  <div className="flex justify-between text-sm text-white/50">
                    <span>Subtotal</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-white/50">
                    <span>Shipping</span>
                    <span className="text-gold">Free</span>
                  </div>
                  <div className="border-t border-white/[0.06] pt-3 flex justify-between">
                    <span className="font-semibold">Total</span>
                    <span className="text-2xl font-bold text-gold">
                      ${totalPrice.toFixed(2)}
                    </span>
                  </div>
                </div>

                <p className="text-[11px] text-white/30 mt-4">
                  Taxes calculated at checkout. Free shipping on all orders.
                </p>

                <div className="mt-6">
                  <MagneticButton
                    variant="primary"
                    size="lg"
                    className="w-full justify-center"
                    onClick={() => {
                      window.location.href = buildCheckoutUrl(items);
                    }}
                  >
                    Proceed to Checkout
                  </MagneticButton>
                </div>
              </GlassmorphismCard>
            </ScrollReveal>
          </div>
        )}
      </div>
    </main>
  );
}
