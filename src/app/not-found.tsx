import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-space-black flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        {/* Big 404 */}
        <h1 className="text-8xl md:text-9xl font-bold tracking-tight text-white/[0.04] select-none">
          404
        </h1>

        {/* Fun tagline */}
        <p className="text-xl md:text-2xl font-semibold -mt-6 mb-3">
          Lost in <span className="text-gold">deep space</span>
        </p>
        <p className="text-sm text-white/40 leading-relaxed mb-8">
          Looks like this page drifted past the last known galaxy.
          Let&apos;s get you back to familiar stars.
        </p>

        {/* Back to homepage */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3 text-sm font-semibold text-space-black hover:bg-gold/90 hover:shadow-[0_4px_24px_rgba(212,175,55,0.35)] transition-all duration-300 hover:-translate-y-0.5"
        >
          Back to Mission Control
        </Link>
      </div>
    </main>
  );
}
