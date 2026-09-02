import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Authentic Andhra Fish Pickles | No Preservatives | Amigos Pickles",
    template: "%s | Amigos Fish Pickles",
  },
  description:
    "Handcrafted Andhra fish pickles with farm-fresh ingredients and zero preservatives. Order on WhatsApp.",
  icons: {
    icon: "/images/brand/amigos-logo.png",
    apple: "/images/brand/amigos-logo.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-cream text-ink">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
