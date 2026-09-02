import { Leaf, ShieldCheck, Sparkles, Sprout, Heart, BadgeCheck } from "lucide-react";
import { Hero } from "@/components/home/Hero";
import { NonVegMenu } from "@/components/home/NonVegMenu";
import { PicklePairingGrid } from "@/components/home/PicklePairingGrid";
import { Testimonials } from "@/components/home/Testimonials";
import { SITE } from "@/lib/site";

const WHY = [
  { icon: Sprout, label: "100% Natural" },
  { icon: ShieldCheck, label: "No Preservatives" },
  { icon: Heart, label: "Traditional Recipes" },
  { icon: BadgeCheck, label: "FSSAI Certified" },
  { icon: Leaf, label: "Farm Fresh Ingredients" },
  { icon: Sparkles, label: "Handcrafted with Love" },
];

const JOURNEY = [
  {
    year: "2019",
    title: "Born in a home kitchen",
    body: "Chef Venkatesh began making pickles the traditional way — family recipes passed down through generations of Andhra cooking.",
  },
  {
    year: "2021",
    title: "Amigos Pickles YouTube",
    body: "The channel launched, sharing traditional Andhra cooking in nature. Authentic recipes quickly won millions of hearts.",
  },
  {
    year: "2023",
    title: "From videos to jars",
    body: "Fans demanded the pickles they saw on screen. Food on Farm Pickles was born — those exact recipes at your doorstep.",
  },
  {
    year: "2025",
    title: "Across India & beyond",
    body: "Thousands of families, 20+ pickle varieties and overseas orders — the same recipes, the same love, every batch.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <NonVegMenu />

      <section className="border-y border-line bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-center font-serif text-3xl sm:text-4xl">Why choose Amigos?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-muted">
            Traditional Andhra recipes meet farm-fresh ingredients — authentic homestyle taste
            with zero preservatives.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {WHY.map((w) => (
              <div
                key={w.label}
                className="flex flex-col items-center gap-2 rounded-2xl border border-line bg-cream p-4 text-center"
              >
                <w.icon className="h-7 w-7 text-chili" />
                <p className="text-sm font-semibold">{w.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-muted">
            Trusted by {SITE.stats.followers} followers · {SITE.stats.youtube} YouTube ·{" "}
            {SITE.stats.instagram} Instagram · {SITE.stats.facebook} Facebook
          </p>
        </div>
      </section>

      <PicklePairingGrid />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <h2 className="text-center font-serif text-4xl">How it all began</h2>
        <p className="mt-2 text-center text-muted">
          From a village kitchen to thousands of homes across India.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {JOURNEY.map((j) => (
            <div key={j.year} className="rounded-3xl border border-line bg-white p-5">
              <p className="text-sm font-bold text-chili">{j.year}</p>
              <h3 className="mt-1 font-serif text-xl">{j.title}</h3>
              <p className="mt-2 text-sm text-muted">{j.body}</p>
            </div>
          ))}
        </div>
      </section>

      <Testimonials />

      <section className="border-t border-line bg-cream py-10">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 text-center sm:grid-cols-4 sm:px-6">
          {[
            ["Outstanding quality", "The best in class. No compromises."],
            ["Free shipping", `On orders over ₹${SITE.freeShippingAt}`],
            ["Easy returns", "Peace of mind. Terms may apply."],
            ["WhatsApp ordering", "Secure, personal, farm-direct."],
          ].map(([t, d]) => (
            <div key={t}>
              <p className="font-semibold">{t}</p>
              <p className="text-sm text-muted">{d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
