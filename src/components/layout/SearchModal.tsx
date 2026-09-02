"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { searchProducts } from "@/lib/products";
import { inr } from "@/lib/format";

export function SearchModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [q, setQ] = useState("");
  const results = useMemo(() => searchProducts(q).slice(0, 8), [q]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <div className="absolute inset-0 bg-ink/50" onClick={onClose} />
      <div className="relative mx-auto mt-16 max-w-xl px-4">
        <div className="overflow-hidden rounded-2xl bg-white shadow-2xl">
          <div className="flex items-center gap-2 border-b border-line px-4">
            <Search className="h-4 w-4 text-muted" />
            <input
              autoFocus
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search pickles, podis, fryums..."
              className="h-12 w-full bg-transparent text-sm outline-none"
            />
            <button type="button" onClick={onClose} aria-label="Close search">
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="max-h-[60vh] overflow-y-auto p-2">
            {q && results.length === 0 && (
              <p className="p-4 text-sm text-muted">No matches for “{q}”</p>
            )}
            {results.map((p) => (
              <Link
                key={p.handle}
                href={`/products/${p.handle}`}
                onClick={onClose}
                className="flex items-center gap-3 rounded-xl p-2 hover:bg-cream"
              >
                <img src={p.images[0]} alt="" className="h-12 w-12 rounded-lg object-cover" />
                <div>
                  <p className="text-sm font-medium">{p.title}</p>
                  <p className="text-xs text-muted">from {inr(p.priceFrom)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
