"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { GlassmorphismCard } from "@/components/ui/glassmorphism-card";

const shippingInfo = [
  {
    title: "Processing Time",
    description:
      "All orders are processed within 1-3 business days. Orders are not shipped or delivered on weekends or holidays.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: "Delivery Time",
    description:
      "Due to high demand, orders may take between 2-4 weeks to arrive. We ship worldwide from our US warehouse.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
  },
  {
    title: "Free Shipping",
    description:
      "We offer free standard shipping on all orders. No minimum purchase required.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    title: "Order Not Received",
    description:
      "If you don't receive your order within 30 days after shipping, you are eligible for a full refund. Contact us at shoptheluxen@gmail.com.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4M12 17h.01" />
      </svg>
    ),
  },
];

export default function ShippingPage() {
  return (
    <main className="min-h-screen bg-space-black pt-32 pb-20">
      <div className="mx-auto max-w-4xl px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-gold/80 mb-4">
              Delivery
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Shipping Information
            </h1>
            <p className="text-white/40 max-w-lg mx-auto">
              We ship worldwide with free standard shipping on every order.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {shippingInfo.map((info, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <GlassmorphismCard className="p-6 h-full">
                <div className="text-gold/60 mb-4">{info.icon}</div>
                <h3 className="font-semibold mb-2">{info.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">
                  {info.description}
                </p>
              </GlassmorphismCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-12 text-center">
            <p className="text-sm text-white/30">
              Have questions about your shipment?{" "}
              <a
                href="mailto:shoptheluxen@gmail.com"
                className="text-gold hover:text-gold/80 transition-colors"
              >
                Email us at shoptheluxen@gmail.com
              </a>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}
