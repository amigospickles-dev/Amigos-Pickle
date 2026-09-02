"use client";

import { CartProvider } from "@/components/cart/CartProvider";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FarmPickleValues } from "@/components/home/FarmPickleValues";
import { WhatsAppFab } from "@/components/whatsapp/WhatsAppFab";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <AnnouncementBar />
      <Header />
      <main className="flex-1">{children}</main>
      <FarmPickleValues />
      <Footer />
      <CartDrawer />
      <WhatsAppFab />
    </CartProvider>
  );
}
