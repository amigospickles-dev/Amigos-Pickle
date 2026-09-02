"use client";

import { useMemo, useState } from "react";
import type { Product } from "@/lib/types";
import { inr, shortWeight } from "@/lib/format";
import { defaultWeight, findVariant } from "@/lib/products";
import { useCart } from "@/components/cart/CartProvider";
import { singleItemMessage, waUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/whatsapp/WhatsAppIcon";

export function AddToCart({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [weight, setWeight] = useState(defaultWeight(product));
  const [qty, setQty] = useState(1);
  const variant = useMemo(
    () => findVariant(product, weight) ?? product.variants[0],
    [product, weight],
  );
  const soldOut = !product.available || !variant?.available;

  const payload = variant
    ? {
        handle: product.handle,
        title: product.title,
        image: product.images[0],
        variantId: variant.id,
        weight: variant.weight ?? variant.title,
        preference: null,
        price: variant.price,
        quantity: qty,
      }
    : null;

  return (
    <div className="space-y-4">
      {product.weights.length > 0 && (
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted">
            Size
          </p>
          <div className="flex flex-wrap gap-2">
            {product.weights.map((w) => (
              <button
                key={w}
                type="button"
                onClick={() => setWeight(w)}
                className={`rounded-full border px-3 py-1.5 text-sm ${weight === w ? "border-chili bg-chili text-white" : "border-line"}`}
              >
                {shortWeight(w)}
              </button>
            ))}
          </div>
        </div>
      )}
      <div className="flex items-end justify-between">
        <div>
          <p className="font-serif text-3xl">{inr(variant?.price ?? product.priceFrom)}</p>
          {variant?.per100 ? (
            <p className="text-sm text-muted">₹{variant.per100} / 100g</p>
          ) : null}
        </div>
        <div className="flex items-center rounded-full border border-line">
          <button type="button" className="px-3 py-2" onClick={() => setQty((n) => Math.max(1, n - 1))}>
            −
          </button>
          <span className="w-8 text-center">{qty}</span>
          <button type="button" className="px-3 py-2" onClick={() => setQty((n) => n + 1)}>
            +
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-2 sm:flex-row">
        <button
          type="button"
          disabled={soldOut || !payload}
          onClick={() => payload && addItem(payload)}
          className="flex-1 rounded-full bg-chili py-3 font-semibold text-white disabled:bg-line"
        >
          {soldOut ? "Sold out" : "Add to cart"}
        </button>
        {payload && (
          <a
            href={waUrl(
              singleItemMessage({
                title: product.title,
                weight: payload.weight,
                preference: payload.preference,
                quantity: qty,
                price: payload.price,
              }),
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] py-3 text-center font-semibold text-white"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Order this on WhatsApp
          </a>
        )}
      </div>
    </div>
  );
}
