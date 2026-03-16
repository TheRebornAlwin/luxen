"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-space-black pt-32 pb-20">
      <div className="mx-auto max-w-3xl px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.3em] uppercase text-gold/80 mb-4">
              Legal
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Terms of Service
            </h1>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="prose prose-invert prose-sm max-w-none space-y-6 text-white/50 leading-relaxed">
            <p>
              By accessing and using the Luxen website, you agree to be bound by
              these terms and conditions.
            </p>

            <h3 className="text-white font-semibold text-base">
              Products & Pricing
            </h3>
            <p>
              We reserve the right to modify prices at any time. All prices are
              listed in US Dollars. We make every effort to display accurate
              product information, but we do not guarantee that descriptions,
              colors, or other content is error-free.
            </p>

            <h3 className="text-white font-semibold text-base">
              Orders & Payment
            </h3>
            <p>
              By placing an order, you represent that the information you
              provide is accurate and that you are authorized to use the payment
              method provided. We reserve the right to cancel any order for any
              reason.
            </p>

            <h3 className="text-white font-semibold text-base">
              Shipping & Delivery
            </h3>
            <p>
              Delivery times are estimates and not guaranteed. We are not
              responsible for delays caused by shipping carriers or customs.
              Risk of loss transfers to you upon delivery to the carrier.
            </p>

            <h3 className="text-white font-semibold text-base">
              Limitation of Liability
            </h3>
            <p>
              Luxen shall not be liable for any indirect, incidental, or
              consequential damages arising from the use of our products or
              website.
            </p>

            <h3 className="text-white font-semibold text-base">
              Contact
            </h3>
            <p>
              For questions regarding these terms, contact us at{" "}
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
