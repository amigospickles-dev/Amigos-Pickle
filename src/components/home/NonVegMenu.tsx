import Link from "next/link";
import { ProductGrid } from "@/components/product/ProductGrid";
import { nonVegMenuCategories } from "@/lib/products";

const MENU_IMAGE = "/images/menu/amigos-menu-offers.png";

export function NonVegMenu() {
  const categories = nonVegMenuCategories();

  return (
    <section className="bg-[#f47b20] py-14 text-white" aria-label="Non-vegetarian pickle menu">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase">Menu offers</p>
          <h2 className="mt-2 font-serif text-4xl sm:text-5xl">The Taste of Telangana</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-white/90 sm:text-base">
            Authentic chicken, mutton and fish pickles — all prices shown for 1kg jars.
          </p>
        </div>

        <div className="mt-8 overflow-hidden rounded-3xl border border-white/20 shadow-2xl">
          <img
            src={MENU_IMAGE}
            alt="Amigos non-vegetarian pickle menu with 1kg prices"
            width={1200}
            height={1600}
            className="w-full"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="mt-10 space-y-12">
          {categories.map((category) => (
            <div key={category.id}>
              <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
                <h3 className="font-serif text-3xl">{category.title}</h3>
                <Link
                  href={`/collections/${category.collectionSlug}`}
                  className="text-sm font-semibold text-white/90 underline-offset-4 hover:underline"
                >
                  View all {category.title.toLowerCase()}
                </Link>
              </div>
              <ProductGrid
                products={category.products}
                initialWeight="1kg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
