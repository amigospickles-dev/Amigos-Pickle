import type { Product } from "@/lib/types";
import { ProductCard } from "@/components/product/ProductCard";

export function ProductGrid({
  products,
  initialWeight,
}: {
  products: Product[];
  initialWeight?: string;
}) {
  if (!products.length) {
    return <p className="py-16 text-center text-muted">No products in this collection yet.</p>;
  }
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((p) => (
        <ProductCard key={p.handle} product={p} initialWeight={initialWeight} />
      ))}
    </div>
  );
}
