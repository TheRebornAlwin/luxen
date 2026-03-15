"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/contexts/cart-context";
import { createCheckout } from "@/lib/shopify";

export function CartDrawer() {
  const {
    items,
    removeItem,
    updateQuantity,
    totalPrice,
    isOpen,
    setIsOpen,
  } = useCart();
  const [checkingOut, setCheckingOut] = useState(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />

          {/* Drawer */}
          <motion.div
            className="fixed top-0 right-0 z-[70] h-full w-full max-w-md bg-space-black/95 backdrop-blur-xl border-l border-white/[0.06]"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            <div className="flex h-full flex-col">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/[0.06] px-6 py-4">
                <h2 className="text-lg font-semibold tracking-wide">
                  Your Cart
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/40 hover:text-white transition-colors"
                  aria-label="Close cart"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Items */}
              <div className="flex-1 overflow-y-auto px-6 py-4">
                {items.length === 0 ? (
                  <div className="flex h-full flex-col items-center justify-center text-center">
                    <div className="text-4xl mb-4 opacity-20">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" />
                      </svg>
                    </div>
                    <p className="text-white/30 text-sm">Your cart is empty</p>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="mt-4 text-sm text-gold hover:text-gold/80 transition-colors"
                    >
                      Continue Shopping
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {items.map((item) => (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex gap-4 rounded-xl bg-white/[0.03] p-4 border border-white/[0.06]"
                      >
                        {/* Image */}
                        <div className="h-20 w-20 rounded-lg bg-midnight-navy overflow-hidden shrink-0">
                          {item.image ? (
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="opacity-30">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 2a7 7 0 017 7" />
                              </svg>
                            </div>
                          )}
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-medium truncate">
                            {item.title}
                          </h3>
                          <p className="text-sm text-gold mt-1">
                            ${item.price.toFixed(2)}
                          </p>

                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity - 1)
                                }
                                className="h-6 w-6 rounded-full border border-white/10 flex items-center justify-center text-xs text-white/50 hover:text-white hover:border-white/30 transition-colors"
                              >
                                -
                              </button>
                              <span className="text-sm w-6 text-center">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity + 1)
                                }
                                className="h-6 w-6 rounded-full border border-white/10 flex items-center justify-center text-xs text-white/50 hover:text-white hover:border-white/30 transition-colors"
                              >
                                +
                              </button>
                            </div>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-white/30 hover:text-red-400 transition-colors text-xs"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              {items.length > 0 && (
                <div className="border-t border-white/[0.06] px-6 py-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/50">Subtotal</span>
                    <span className="text-lg font-semibold text-gold">
                      ${totalPrice.toFixed(2)}
                    </span>
                  </div>
<button
                    disabled={checkingOut}
                    onClick={async () => {
                      setCheckingOut(true);
                      try {
                        const url = await createCheckout(items);
                        window.location.href = url;
                      } catch {
                        setCheckingOut(false);
                        alert("Something went wrong. Please try again.");
                      }
                    }}
                    className="w-full rounded-full bg-gold py-3 text-sm font-semibold text-space-black hover:bg-gold/90 transition-colors disabled:opacity-50"
                  >
                    {checkingOut ? "Redirecting..." : "Checkout"}
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
