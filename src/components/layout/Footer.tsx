"use client";

import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { collections } from "@/lib/products";

const SOCIAL = [
  { href: SITE.social.youtube, label: "YouTube" },
  { href: SITE.social.instagram, label: "Instagram" },
  { href: SITE.social.facebook, label: "Facebook" },
] as const;

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-[#2A1810] text-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <Image
              src="/images/brand/amigos-logo.png"
              alt={SITE.name}
              width={56}
              height={56}
              className="h-14 w-14 rounded-full object-cover"
            />
            <p className="font-serif text-2xl">{SITE.name}</p>
          </div>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-cream/75">
            The finest, most flavorful, authentic Andhra fish pickles — traditional recipes,
            farm-fresh ingredients, zero preservatives.
          </p>
          <p className="mt-4 text-sm">
            <strong>FSSAI License No:</strong> {SITE.fssai}
          </p>
          <p className="mt-4 text-sm text-cream/75">
            {SITE.company}
            <br />
            {SITE.address.join(", ")}
          </p>
          <div className="mt-4 space-y-1 text-sm">
            {SITE.phones.map((p) => (
              <p key={p.raw}>
                <a className="underline" href={`tel:+${p.raw}`}>
                  {p.display}
                </a>
              </p>
            ))}
            <p>
              <a className="underline" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
            </p>
            <p className="text-cream/75">Open {SITE.hours}</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {SOCIAL.map(({ href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold transition hover:bg-white/20"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-turmeric">
            Menu
          </p>
          <ul className="mt-3 space-y-2 text-sm text-cream/80">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/pages/about-us">About us</Link>
            </li>
            <li>
              <Link href="/collections/best-sellers">Best sellers</Link>
            </li>
            {collections
              .filter((c) => c.slug !== "best-sellers")
              .slice(0, 6)
              .map((c) => (
                <li key={c.slug}>
                  <Link href={`/collections/${c.slug}`}>{c.title}</Link>
                </li>
              ))}
            <li>
              <Link href="/pages/contact">Contact</Link>
            </li>
            <li>
              <Link href="/pages/faqs">FAQs</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-turmeric">
            Information
          </p>
          <ul className="mt-3 space-y-2 text-sm text-cream/80">
            <li>
              <Link href="/pages/policies/terms">Terms and conditions</Link>
            </li>
            <li>
              <Link href="/pages/policies/shipping">Shipping, returns & cancellation</Link>
            </li>
            <li>
              <Link href="/pages/policies/privacy">Privacy policy</Link>
            </li>
          </ul>
          <form
            className="mt-6"
            onSubmit={(e) => e.preventDefault()}
            action="#"
          >
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-turmeric">
              Newsletter
            </p>
            <p className="mt-2 text-xs text-cream/70">
              Be the first to know about offers.
            </p>
            <div className="mt-2 flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="h-10 flex-1 rounded-full bg-white/10 px-4 text-sm outline-none placeholder:text-cream/40"
              />
              <button
                type="submit"
                className="rounded-full bg-chili px-4 text-sm font-semibold"
              >
                Join
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} {SITE.shortName.toLowerCase().replace(/\s+/g, "")}.
      </div>
    </footer>
  );
}
