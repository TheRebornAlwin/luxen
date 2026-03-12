"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { faqData } from "@/lib/data";

function FAQItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <ScrollReveal delay={index * 0.05}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left glass rounded-xl p-5 transition-all duration-300 hover:border-gold/20"
      >
        <div className="flex items-center justify-between gap-4">
          <h3 className="font-medium text-sm md:text-base">{question}</h3>
          <motion.div
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.2 }}
            className="shrink-0 text-gold/60"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12h14" />
            </svg>
          </motion.div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="mt-4 text-sm text-white/50 leading-relaxed border-t border-white/[0.06] pt-4">
                {answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </ScrollReveal>
  );
}

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-space-black pt-32 pb-20">
      <div className="mx-auto max-w-3xl px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.3em] uppercase text-gold/80 mb-4">
              Help Centre
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-white/40">
              Everything you need to know about ordering from Luxen.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-3">
          {faqData.map((item, i) => (
            <FAQItem
              key={i}
              question={item.question}
              answer={item.answer}
              index={i}
            />
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-12 text-center glass rounded-xl p-8">
            <h3 className="font-semibold mb-2">Still have questions?</h3>
            <p className="text-sm text-white/40 mb-4">
              Our team is here to help.
            </p>
            <a
              href="mailto:shoptheluxen@gmail.com"
              className="inline-block rounded-full bg-gold px-6 py-2.5 text-sm font-semibold text-space-black hover:bg-gold/90 transition-colors"
            >
              Contact Support
            </a>
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}
