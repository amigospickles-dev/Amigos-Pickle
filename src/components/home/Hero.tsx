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
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-8 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:py-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold tracking-[0.2em] text-chili uppercase">
            Authentic Andhra · Zero preservatives
          </p>
          <h1 className="mt-2 font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-[2.75rem]">
            Homestyle pickles, farm-fresh in every jar.
          </h1>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted sm:text-base">
            Traditional chicken, mutton and fish pickles from Chef Arjun Reddy —
            made with cold-pressed oils and no shortcuts.
          </p>
          <div className="mt-5 flex flex-wrap gap-2.5">
            <Link
              href="/collections/non-vegetarian-pickles"
              className="rounded-full bg-chili px-5 py-2.5 text-sm font-semibold text-white shadow-md"
            >
              Shop the menu
            </Link>
            <Link
              href="/collections/best-sellers"
              className="rounded-full border border-ink/20 bg-white px-5 py-2.5 text-sm font-semibold"
            >
              Best sellers
            </Link>
          </div>
          <p className="mt-4 text-xs text-muted sm:text-sm">
            Trusted by {SITE.stats.followers} followers · FSSAI certified · {SITE.stats.families}{" "}
            families
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto w-full max-w-sm lg:max-w-md"
        >
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            {heroImages.map(({ src, alt }) => (
              <img
                key={src}
                src={src}
                alt={alt}
                width={280}
                height={280}
                loading="eager"
                decoding="async"
                className="aspect-square w-full rounded-xl object-cover shadow-lg ring-2 ring-white sm:rounded-2xl"
              />
            ))}
          </div>
        </motion.div>
      </div>

      <FarmPickleBanner className="block h-auto w-full" />
    </section>
  );
}
