"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Star } from "lucide-react";
import type { Product } from "@/lib/types";
import { inr, shortWeight } from "@/lib/format";
import { defaultWeight, findVariant } from "@/lib/products";
import { useCart } from "@/components/cart/CartProvider";

export function ProductCard({
  product,
  initialWeight,
}: {
  product: Product;
  initialWeight?: string;
}) {
  const { addItem } = useCart();
  const [weight, setWeight] = useState(initialWeight ?? defaultWeight(product));
  const variant = useMemo(
    () => findVariant(product, weight) ?? product.variants[0],
    [product, weight],
  );
  const soldOut = !product.available || (variant && !variant.available);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
      <Link href={`/products/${product.handle}`} className="relative block aspect-square overflow-hidden bg-cream">
        <img
          src={product.images[0]}
          alt={product.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        {soldOut && (
          <span className="absolute right-3 top-3 rounded-full bg-ink px-2 py-0.5 text-[10px] font-bold text-cream">
            Sold out
          </span>
        )}
      </Link>
      <div className="flex flex-1 flex-col p-4">
        <div className="mb-1 flex items-center gap-1 text-turmeric">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-3.5 w-3.5 ${i < Math.round(product.rating) ? "fill-turmeric" : "text-line"}`}
            />
          ))}
          <span className="ml-1 text-xs text-muted">
            {product.rating} ({product.reviewCount})
          </span>
        </div>
        <Link href={`/products/${product.handle}`} className="font-serif text-xl leading-snug text-ink">
          {product.title}
        </Link>
        <p className="mt-1 line-clamp-2 text-xs text-muted">
          Handcrafted with age-old spices & fresh ingredients
        </p>
        {product.weights.length > 1 && (
          <div className="mt-3 flex flex-wrap gap-1">
            {product.weights.map((w) => (
              <button
                key={w}
                type="button"
                onClick={() => setWeight(w)}
                className={`rounded-full border px-2 py-0.5 text-[11px] ${weight === w ? "border-chili bg-chili text-white" : "border-line text-muted"}`}
              >
                {shortWeight(w)}
              </button>
            ))}
          </div>
        )}
        <div className="mt-auto flex items-end justify-between pt-3">
          <div>
            {variant?.compareAt ? (
              <p className="text-xs text-muted line-through">{inr(variant.compareAt)}</p>
            ) : null}
            <p className="font-semibold text-ink">{inr(variant?.price ?? product.priceFrom)}</p>
            {variant?.per100 ? (
              <p className="text-[11px] text-muted">₹{variant.per100} / 100g</p>
            ) : null}
          </div>
          <button
            type="button"
            disabled={soldOut || !variant}
            onClick={() =>
              variant &&
              addItem({
                handle: product.handle,
                title: product.title,
                image: product.images[0],
                variantId: variant.id,
                weight: variant.weight ?? variant.title,
                preference: null,
                price: variant.price,
              })
            }
            className="rounded-full bg-chili px-4 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:bg-line"
          >
            {soldOut ? "Sold" : "Add"}
          </button>
        </div>
      </div>
    </article>
  );
}
