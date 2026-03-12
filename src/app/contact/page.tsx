"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { GlassmorphismCard } from "@/components/ui/glassmorphism-card";
import { MagneticButton } from "@/components/ui/magnetic-button";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-space-black pt-32 pb-20">
      <div className="mx-auto max-w-4xl px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-gold/80 mb-4">
              Get In Touch
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Contact Us
            </h1>
            <p className="text-white/40 max-w-lg mx-auto">
              Have a question, concern, or just want to say hello? We&apos;d love to
              hear from you.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <ScrollReveal direction="left">
            <GlassmorphismCard className="p-8">
              <h2 className="text-lg font-semibold mb-6">Send us a message</h2>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-4"
              >
                <div>
                  <label className="block text-xs tracking-wider uppercase text-white/40 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/20 focus:border-gold/50 focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-wider uppercase text-white/40 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/20 focus:border-gold/50 focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-wider uppercase text-white/40 mb-2">
                    Order Number (optional)
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/20 focus:border-gold/50 focus:outline-none transition-colors"
                    placeholder="#LUXEN-0000"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-wider uppercase text-white/40 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/20 focus:border-gold/50 focus:outline-none transition-colors resize-none"
                    placeholder="How can we help?"
                  />
                </div>
                <MagneticButton variant="primary" className="w-full justify-center">
                  Send Message
                </MagneticButton>
              </form>
            </GlassmorphismCard>
          </ScrollReveal>

          {/* Contact Info */}
          <ScrollReveal direction="right">
            <div className="space-y-6">
              <GlassmorphismCard className="p-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-sm mb-1">Email</h3>
                    <a
                      href="mailto:support@luxen.com"
                      className="text-sm text-gold hover:text-gold/80 transition-colors"
                    >
                      support@luxen.com
                    </a>
                    <p className="text-xs text-white/30 mt-1">
                      We respond within 24 hours
                    </p>
                  </div>
                </div>
              </GlassmorphismCard>

              <GlassmorphismCard className="p-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-sm mb-1">
                      Business Hours
                    </h3>
                    <p className="text-sm text-white/50">
                      Monday - Friday
                    </p>
                    <p className="text-xs text-white/30 mt-1">
                      9:00 AM - 6:00 PM (HKT)
                    </p>
                  </div>
                </div>
              </GlassmorphismCard>

              <GlassmorphismCard className="p-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-sm mb-1">Shipping From</h3>
                    <p className="text-sm text-white/50">Hong Kong</p>
                    <p className="text-xs text-white/30 mt-1">
                      Worldwide delivery available
                    </p>
                  </div>
                </div>
              </GlassmorphismCard>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </main>
  );
}
