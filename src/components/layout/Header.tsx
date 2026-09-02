"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";
import { Menu, Search, ShoppingBag, X, ChevronDown } from "lucide-react";
import { useCart } from "@/components/cart/CartProvider";
import { collections } from "@/lib/products";
import { SearchModal } from "@/components/layout/SearchModal";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/collections/best-sellers", label: "Best Sellers" },
];

export function Header() {
  const { count, setOpen } = useCart();
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const shopLinks = collections.filter((c) => c.slug !== "best-sellers");

  return (
    <>
      <header
        className={`sticky top-0 z-40 border-b border-line/70 bg-cream/95 backdrop-blur ${scrolled ? "shadow-sm" : ""}`}
      >
        <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-4 px-4 sm:h-20 sm:px-6">
          <button
            type="button"
            className="lg:hidden rounded-full p-2 hover:bg-white"
            onClick={() => setMobile(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>

          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/brand/amigos-logo.png"
              alt={SITE.name}
              width={64}
              height={64}
              className="h-14 w-14 rounded-full object-cover sm:h-16 sm:w-16"
              priority
            />
            <span className="leading-tight">
              <span className="block font-serif text-xl text-ink sm:text-2xl">
                Amigos
              </span>
              <span className="block text-[10px] font-semibold tracking-[0.2em] text-chili uppercase">
                Fish Pickles
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-medium text-ink lg:flex">
            {NAV.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-chili">
                {l.label}
              </Link>
            ))}
            <div
              className="relative"
              onMouseEnter={() => setShopOpen(true)}
              onMouseLeave={() => setShopOpen(false)}
            >
              <button type="button" className="inline-flex items-center gap-1 hover:text-chili">
                Shop by collection <ChevronDown className="h-4 w-4" />
              </button>
              {shopOpen && (
                <div className="absolute left-1/2 top-full z-50 w-[540px] -translate-x-1/2 pt-3">
                  <div className="grid grid-cols-2 gap-1 rounded-2xl border border-line bg-white p-3 shadow-xl">
                    {shopLinks.map((c) => (
                      <Link
                        key={c.slug}
                        href={`/collections/${c.slug}`}
                        className="rounded-xl px-3 py-2 hover:bg-cream"
                      >
                        <span className="block text-sm font-semibold">{c.title}</span>
                        <span className="text-xs text-muted">{c.tagline}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link href="/pages/about-us" className="hover:text-chili">
              About us
            </Link>
            <Link href="/pages/recipes-stories" className="hover:text-chili">
              Recipes & Stories
            </Link>
            <Link href="/pages/contact" className="hover:text-chili">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-1">
            <button
              type="button"
              className="rounded-full p-2 hover:bg-white"
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              type="button"
              className="relative rounded-full p-2 hover:bg-white"
              onClick={() => setOpen(true)}
              aria-label="Open cart"
            >
              <ShoppingBag className="h-5 w-5" />
              {count > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-chili px-1 text-[10px] font-bold text-white">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {mobile && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-ink/40" onClick={() => setMobile(false)} />
          <div className="absolute inset-y-0 left-0 w-[86%] max-w-sm overflow-y-auto bg-cream p-5 shadow-2xl">
            <div className="mb-6 flex items-center justify-between">
              <span className="font-serif text-xl">Menu</span>
              <button type="button" onClick={() => setMobile(false)} aria-label="Close">
                <X />
              </button>
            </div>
            <div className="flex flex-col gap-3 text-base font-medium">
              {NAV.map((l) => (
                <Link key={l.href} href={l.href} onClick={() => setMobile(false)}>
                  {l.label}
                </Link>
              ))}
              <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-muted">
                Collections
              </p>
              {shopLinks.map((c) => (
                <Link
                  key={c.slug}
                  href={`/collections/${c.slug}`}
                  onClick={() => setMobile(false)}
                  className="pl-1"
                >
                  {c.title}
                </Link>
              ))}
              <Link href="/pages/about-us" onClick={() => setMobile(false)}>
                About us
              </Link>
              <Link href="/pages/recipes-stories" onClick={() => setMobile(false)}>
                Recipes & Stories
              </Link>
              <Link href="/pages/contact" onClick={() => setMobile(false)}>
                Contact
              </Link>
              <Link href="/pages/faqs" onClick={() => setMobile(false)}>
                FAQs
              </Link>
            </div>
          </div>
        </div>
      )}

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
