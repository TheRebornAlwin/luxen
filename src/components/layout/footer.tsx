"use client";

import Link from "next/link";
import { SectionDivider } from "@/components/ui/section-divider";

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
  return (
    <footer className="relative bg-space-black">
      <SectionDivider variant="aurora" />

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
