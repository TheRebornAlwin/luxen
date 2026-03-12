"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { GlassmorphismCard } from "@/components/ui/glassmorphism-card";
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
      <GlassmorphismCard className="group h-full p-4 hover:border-gold/20 transition-all duration-500">
        {/* Image area */}
        <div className="relative aspect-square rounded-xl bg-gradient-to-b from-midnight-navy/40 to-space-black/40 overflow-hidden mb-4 flex items-center justify-center">
          {/* Hover glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-electric-violet/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Floating product placeholder */}
          <motion.div
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-white/20 group-hover:text-gold/40 transition-colors duration-500">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a7 7 0 017 7" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </motion.div>

          {/* Discount badge */}
          {discount > 0 && (
            <span className="absolute top-3 right-3 text-[10px] bg-gold/90 text-space-black font-bold px-2 py-0.5 rounded-full">
              -{discount}%
            </span>
          )}
        </div>

        {/* Info */}
        <div className="space-y-2">
          <p className="text-[10px] tracking-[0.2em] uppercase text-white/30">
            {product.category}
          </p>
          <h3 className="font-semibold text-sm group-hover:text-gold transition-colors duration-300">
            {product.title}
          </h3>
          <p className="text-xs text-white/40 line-clamp-2">
            {product.tagline}
          </p>
          <div className="flex items-baseline gap-2 pt-1">
            <span className="text-lg font-bold text-gold">
              ${product.price.toFixed(2)}
            </span>
            {product.compareAtPrice > product.price && (
              <span className="text-sm text-white/30 line-through">
                ${product.compareAtPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </GlassmorphismCard>
    </Link>
  );
}
