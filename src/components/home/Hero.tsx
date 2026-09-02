"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FarmPickleBanner } from "@/components/home/FarmPickleBanner";
import { SITE } from "@/lib/site";

const heroImages = [
  {
    src: "https://foodonfarmpickles.com/cdn/shop/files/1000168130_4e832a0d-db92-4b5d-af24-4a784799bc81.jpg?v=1772381295&width=600",
    alt: "Traditional pickle preparation with fresh ingredients",
    className: "col-span-2 row-span-2",
  },
  {
    src: "https://foodonfarmpickles.com/cdn/shop/files/Gongura-scaled_9c2853eb-9dcc-4be9-a303-300898ead3ec.webp?v=1758989293&width=600",
    alt: "Gongura pickle served fresh",
    className: "",
  },
  {
    src: "https://foodonfarmpickles.com/cdn/shop/files/mango-pickle-scaled_f383ec5b-be63-4988-81c1-f2f381d76f8e.webp?v=1772381266&width=600",
    alt: "Mango pickle in a traditional bowl",
    className: "",
  },
];

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100svh-6.5rem)] flex-col overflow-hidden bg-gradient-to-br from-[#F8E7C8] via-cream to-[#f3e4cc]">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-chili/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-32 -left-16 h-64 w-64 rounded-full bg-turmeric/20 blur-3xl"
      />

      <div className="mx-auto flex w-full max-w-7xl flex-1 items-center px-4 py-12 sm:px-6 lg:py-16">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="max-w-2xl"
          >
            <p className="inline-flex items-center rounded-full border border-chili/20 bg-white/70 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-chili uppercase backdrop-blur">
              Authentic Andhra · Zero preservatives
            </p>
            <h1 className="mt-6 font-serif text-5xl leading-[1.05] text-ink sm:text-6xl lg:text-7xl">
              Homestyle pickles, farm-fresh in every jar.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
              Traditional chicken, mutton and fish pickles from Chef Arjun Reddy —
              made with cold-pressed oils and no shortcuts.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/collections/non-vegetarian-pickles"
                className="rounded-full bg-chili px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-chili/25 transition hover:bg-chili/90"
              >
                Shop the menu
              </Link>
              <Link
                href="/collections/best-sellers"
                className="rounded-full border border-ink/15 bg-white/80 px-8 py-3.5 text-sm font-semibold backdrop-blur transition hover:bg-white"
              >
                Best sellers
              </Link>
            </div>
            <p className="mt-8 text-sm font-medium text-muted">
              Trusted by {SITE.stats.followers} followers · FSSAI certified · {SITE.stats.families}{" "}
              families
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12 }}
            className="mx-auto w-full max-w-xl lg:max-w-none"
          >
            <div className="grid grid-cols-2 grid-rows-2 gap-3 sm:gap-4">
              {heroImages.map(({ src, alt, className }) => (
                <img
                  key={src}
                  src={src}
                  alt={alt}
                  width={500}
                  height={500}
                  loading="eager"
                  decoding="async"
                  className={`aspect-square w-full rounded-2xl object-cover shadow-2xl ring-4 ring-white/90 sm:rounded-3xl ${className}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <FarmPickleBanner className="mt-auto block h-auto w-full" />
    </section>
  );
}
