"use client";

import { CartProvider } from "@/contexts/cart-context";
import { ParticleField } from "@/components/ui/particle-field";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { LoadingScreen } from "@/components/layout/loading-screen";
import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CartDrawer } from "@/components/layout/cart-drawer";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <LoadingScreen />
      <ScrollProgress />
      <ParticleField />

      <div className="relative z-10">
        <AnnouncementBar />
        <Header />
        <main>{children}</main>
        <Footer />
      </div>

      <CartDrawer />
    </CartProvider>
  );
}
