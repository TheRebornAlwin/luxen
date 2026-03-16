"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-space-black pt-32 pb-20">
      <div className="mx-auto max-w-3xl px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.3em] uppercase text-gold/80 mb-4">
              Policy
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Privacy Policy
            </h1>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="prose prose-invert prose-sm max-w-none space-y-6 text-white/50 leading-relaxed">
            <p>
              Luxen is committed to protecting your privacy. This policy
              explains how we collect, use, and safeguard your information when
              you visit our website and make purchases.
            </p>

            <h3 className="text-white font-semibold text-base">
              Information We Collect
            </h3>
            <p>
              When you place an order, we collect your name, email address,
              shipping address, and payment information. We also collect browsing
              data such as your IP address, browser type, and pages visited to
              improve your experience.
            </p>

            <h3 className="text-white font-semibold text-base">
              How We Use Your Information
            </h3>
            <p>
              We use your information to process orders, send order
              confirmations and shipping updates, respond to customer service
              requests, and improve our website and products. We do not sell
              your personal information to third parties.
            </p>

            <h3 className="text-white font-semibold text-base">
              Data Security
            </h3>
            <p>
              We implement appropriate security measures to protect your
              personal information. All payment transactions are processed
              through secure, encrypted channels.
            </p>

            <h3 className="text-white font-semibold text-base">
              Cookies
            </h3>
            <p>
              We use cookies to enhance your browsing experience, analyze site
              traffic, and personalize content. You can control cookies through
              your browser settings.
            </p>

            <h3 className="text-white font-semibold text-base">
              Contact Us
            </h3>
            <p>
              If you have questions about this privacy policy, contact us at{" "}
              <a href="mailto:shoptheluxen@gmail.com" className="text-gold hover:text-gold/80">
                shoptheluxen@gmail.com
              </a>
              .
            </p>
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}
