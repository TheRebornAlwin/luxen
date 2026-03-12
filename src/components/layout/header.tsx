"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useCart } from "@/contexts/cart-context";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-space-black/80 backdrop-blur-xl border-b border-white/[0.06]"
            : "bg-transparent"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 2.8, ease: "easeOut" }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <img
              src="https://cqdsz6sbj4.ufs.sh/f/Zv26MoXsTa78sUfnZyGG71I9kXyqfZrS2VxhbQNaiEsnWL85"
              alt="Luxen"
              className="h-8 md:h-10 transition-opacity hover:opacity-80"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm tracking-[0.15em] uppercase text-white/60 hover:text-gold transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Cart */}
            <button
              onClick={() => setIsOpen(true)}
              className="relative text-white/60 hover:text-gold transition-colors"
              aria-label="Open cart"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" />
              </svg>
              {totalItems > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[10px] font-bold text-space-black"
                >
                  {totalItems}
                </motion.span>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="relative z-10 md:hidden text-white/60 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-1.5">
                <motion.span
                  className="block h-[1px] w-6 bg-current"
                  animate={mobileOpen ? { rotate: 45, y: 3.5 } : { rotate: 0, y: 0 }}
                />
                <motion.span
                  className="block h-[1px] w-6 bg-current"
                  animate={mobileOpen ? { rotate: -45, y: -3.5 } : { rotate: 0, y: 0 }}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex items-center justify-center bg-space-black/95 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-2xl tracking-[0.2em] uppercase text-white/80 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
              >
                <Link
                  href="/track-order"
                  onClick={() => setMobileOpen(false)}
                  className="text-lg tracking-[0.2em] uppercase text-white/40 hover:text-gold transition-colors"
                >
                  Track Order
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
