"use client";

import { useState } from "react";
import Link from "next/link";
import { SectionDivider } from "@/components/ui/section-divider";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { subscribeNewsletter } from "@/lib/shopify";

const footerLinks = {
  shop: [
    { href: "/shop", label: "All Products" },
    { href: "/products/nebula-astronaut-projector", label: "Astronaut Projector" },
  ],
  support: [
    { href: "/faq", label: "FAQ" },
    { href: "/shipping", label: "Shipping" },
    { href: "/contact", label: "Contact Us" },
    { href: "/track-order", label: "Track Order" },
  ],
  legal: [
    { href: "/refund-policy", label: "Refund Policy" },
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-of-service", label: "Terms of Service" },
  ],
};

export function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status === "loading") return;
    setStatus("loading");
    try {
      await subscribeNewsletter(email);
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <footer className="relative bg-space-black">
      <SectionDivider variant="aurora" />

      {/* Newsletter Section */}
      <ScrollReveal>
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="glass mx-auto max-w-2xl rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
              Join the <span className="text-gold">Luxen</span> Universe
            </h3>
            <p className="text-white/50 text-sm mb-6">
              Get 10% off your first order and be the first to know about new
              products and exclusive drops.
            </p>
            {status === "success" ? (
              <p className="text-gold text-sm font-medium">
                You&apos;re in! Check your inbox for 10% off.
              </p>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 rounded-full bg-white/5 border border-white/10 px-5 py-3 text-sm text-white placeholder:text-white/30 focus:border-gold/50 focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-space-black hover:bg-gold/90 transition-colors disabled:opacity-50"
                >
                  {status === "loading" ? "Subscribing..." : "Subscribe"}
                </button>
                {status === "error" && (
                  <p className="text-red-400/70 text-xs mt-1 sm:mt-0 sm:self-center">
                    Something went wrong. Try again.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </ScrollReveal>

      {/* Links */}
      <div className="mx-auto max-w-7xl px-6 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <img
              src="https://cqdsz6sbj4.ufs.sh/f/Zv26MoXsTa78KDHACKorgNdXr3qCb9EGYnushPvIa0FiwSMy"
              alt="Luxen"
              width={80}
              height={80}
              loading="lazy"
              className="h-20 w-auto mb-4 opacity-70"
            />
            <p className="text-xs text-white/30 leading-relaxed">
              Transforming spaces into cosmic experiences.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-white/50 mb-4">
              Shop
            </h4>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/30 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-white/50 mb-4">
              Support
            </h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/30 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-white/50 mb-4">
              Legal
            </h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/30 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/20">
            &copy; {new Date().getFullYear()} Luxen. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {/* Payment icons as text for now */}
            <span className="text-[10px] tracking-wider uppercase text-white/20">
              Visa
            </span>
            <span className="text-[10px] tracking-wider uppercase text-white/20">
              Mastercard
            </span>
            <span className="text-[10px] tracking-wider uppercase text-white/20">
              Amex
            </span>
            <span className="text-[10px] tracking-wider uppercase text-white/20">
              PayPal
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
