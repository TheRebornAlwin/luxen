"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-space-black pt-32 pb-20">
      <div className="mx-auto max-w-3xl px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.3em] uppercase text-gold/80 mb-4">
              Policy
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Refund Policy
            </h1>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="prose prose-invert prose-sm max-w-none space-y-6 text-white/50 leading-relaxed">
            <p>
              At Luxen, we want you to be completely satisfied with your
              purchase. If you are not satisfied, we offer a straightforward
              refund policy.
            </p>

            <h3 className="text-white font-semibold text-base">Returns</h3>
            <p>
              You have 30 days from the date of delivery to request a return.
              Items must be in their original packaging and in unused condition.
              To initiate a return, please contact us at{" "}
              <a href="mailto:shoptheluxen@gmail.com" className="text-gold hover:text-gold/80">
                shoptheluxen@gmail.com
              </a>{" "}
              with your order number and reason for return.
            </p>

            <h3 className="text-white font-semibold text-base">Refunds</h3>
            <p>
              Once we receive your returned item, we will inspect it and notify
              you of the status of your refund. If approved, your refund will be
              processed and a credit will be applied to your original payment
              method within 7-10 business days.
            </p>

            <h3 className="text-white font-semibold text-base">
              Non-Delivered Orders
            </h3>
            <p>
              If your order has not been delivered within 30 days of the shipping
              date, you are eligible for a full refund. Please contact our
              support team to process this.
            </p>

            <h3 className="text-white font-semibold text-base">
              Damaged or Defective Items
            </h3>
            <p>
              If you receive a damaged or defective product, please contact us
              immediately with your order number and photographs of the damage.
              We will arrange a replacement or full refund at no additional cost
              to you.
            </p>

            <h3 className="text-white font-semibold text-base">
              Contact Us
            </h3>
            <p>
              For any questions about our refund policy, please email us at{" "}
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
