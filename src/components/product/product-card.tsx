"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TiltCard } from "@/components/ui/tilt-card";
import type { Product } from "@/lib/data";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const discount = Math.round(
    ((product.compareAtPrice - product.price) / product.compareAtPrice) * 100
  );

  return (
    <Link href={`/products/${product.handle}`}>
      <TiltCard
        tiltAmount={6}
        glowColor="rgba(123, 47, 255, 0.12)"
        className="h-full"
      >
        <div className="relative h-full rounded-2xl overflow-hidden bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] p-4 group hover:border-gold/20 transition-all duration-700">
          {/* Image area */}
          <div className="relative aspect-square rounded-xl bg-gradient-to-b from-midnight-navy/40 to-space-black/40 overflow-hidden mb-4">
            {/* Animated border glow on hover */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-t from-electric-violet/8 via-transparent to-gold/5 z-10" />

            {product.images[0] ? (
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-white/15">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
            )}

            {/* Discount badge */}
            {discount > 0 && (
              <span className="absolute top-3 right-3 z-10 text-[10px] bg-gold/90 text-space-black font-bold px-2.5 py-0.5 rounded-full shadow-[0_0_12px_rgba(201,168,76,0.3)]">
                -{discount}%
              </span>
            )}
          </div>

          {/* Info */}
          <div className="space-y-2">
            <p className="text-[10px] tracking-[0.2em] uppercase text-white/25 group-hover:text-gold/40 transition-colors duration-500">
              {product.category}
            </p>
            <h3 className="font-semibold text-sm group-hover:text-gold transition-colors duration-500">
              {product.title}
            </h3>
            <p className="text-xs text-white/35 line-clamp-2 leading-relaxed">
              {product.tagline}
            </p>
            <div className="flex items-baseline gap-2 pt-2">
              <span className="text-xl font-bold text-gold">
                ${product.price.toFixed(2)}
              </span>
              {product.compareAtPrice > product.price && (
                <span className="text-xs text-white/25 line-through">
                  ${product.compareAtPrice.toFixed(2)}
                </span>
              )}
            </div>
          </div>
        </div>
      </TiltCard>
    </Link>
  );
}
