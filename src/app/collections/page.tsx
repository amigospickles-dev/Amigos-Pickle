import Link from "next/link";
import { collections } from "@/lib/products";

export const metadata = { title: "Collections" };

export default function CollectionsIndex() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <h1 className="font-serif text-4xl">Shop by collection</h1>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {collections.map((c) => (
          <Link
            key={c.slug}
            href={`/collections/${c.slug}`}
            className="group relative min-h-[200px] overflow-hidden rounded-3xl"
          >
            <img
              src={c.image}
              alt=""
              className="absolute inset-0 h-full w-full object-cover transition group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
            <div className="relative flex h-full flex-col justify-end p-5 text-cream">
              <p className="font-serif text-2xl">{c.title}</p>
              <p className="text-sm">{c.tagline}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
