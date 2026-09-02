"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FarmPickleBanner } from "@/components/home/FarmPickleBanner";
import { SITE } from "@/lib/site";

const heroImages = [
  {
    src: "https://foodonfarmpickles.com/cdn/shop/files/1000168130_4e832a0d-db92-4b5d-af24-4a784799bc81.jpg?v=1772381295&width=600",
    alt: "Traditional pickle preparation with fresh ingredients",
  },
  {
    src: "https://foodonfarmpickles.com/cdn/shop/files/Gongura-scaled_9c2853eb-9dcc-4be9-a303-300898ead3ec.webp?v=1758989293&width=600",
    alt: "Gongura pickle served fresh",
  },
  {
    src: "https://foodonfarmpickles.com/cdn/shop/files/mango-pickle-scaled_f383ec5b-be63-4988-81c1-f2f381d76f8e.webp?v=1772381266&width=600",
    alt: "Mango pickle in a traditional bowl",
  },
  {
    src: "https://foodonfarmpickles.com/cdn/shop/files/tomato-pachadi-scaled_04314ab6-23c6-4e95-8a60-f43b96fdd682.jpg?v=1772381277&width=600",
    alt: "Tomato pachadi with spices",
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F8E7C8] via-cream to-cream">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-8 pt-14 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:pb-10 lg:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold tracking-[0.25em] text-chili uppercase">
            Authentic Andhra · Zero preservatives
          </p>
          <h1 className="mt-3 font-serif text-4xl leading-[1.1] text-ink sm:text-5xl lg:text-6xl">
            Homestyle pickles, farm-fresh in every jar.
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Traditional chicken, mutton and fish pickles from Chef Murala Venkatesh —
            made with cold-pressed oils and no shortcuts.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/collections/non-vegetarian-pickles"
              className="rounded-full bg-chili px-6 py-3 text-sm font-semibold text-white shadow-lg"
            >
              Shop the menu
            </Link>
            <Link
              href="/collections/best-sellers"
              className="rounded-full border border-ink/20 bg-white px-6 py-3 text-sm font-semibold"
            >
              Best sellers
            </Link>
          </div>
          <p className="mt-6 text-sm text-muted">
            Trusted by {SITE.stats.followers} followers · FSSAI certified · {SITE.stats.families}{" "}
            families
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto w-full max-w-lg lg:max-w-none"
        >
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {heroImages.map(({ src, alt }) => (
              <img
                key={src}
                src={src}
                alt={alt}
                width={400}
                height={400}
                loading="eager"
                decoding="async"
                className="aspect-square w-full rounded-2xl object-cover shadow-xl ring-4 ring-white sm:rounded-3xl"
              />
            ))}
          </div>
        </motion.div>
      </div>

      <FarmPickleBanner className="block h-auto w-full" />
    </section>
  );
}
