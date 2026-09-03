import Link from "next/link";
import { notFound } from "next/navigation";
import { Star } from "lucide-react";
import { AddToCart } from "@/components/product/AddToCart";
import { ProductGrid } from "@/components/product/ProductGrid";
import { getProduct, products, relatedProducts } from "@/lib/products";
import faqs from "@/data/faqs.json";

export function generateStaticParams() {
  return products.map((p) => ({ handle: p.handle }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  const p = getProduct(handle);
  return { title: p?.title ?? "Product" };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  const product = getProduct(decodeURIComponent(handle));
  if (!product) notFound();
  const related = relatedProducts(product);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <p className="text-xs text-muted">
        <Link href="/">Home</Link> / <Link href="/collections">Collections</Link> /{" "}
        {product.title}
      </p>
      <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:items-start">
        <div
          className={
            product.images.length > 1
              ? "grid gap-3 sm:grid-cols-2"
              : "mx-auto w-full max-w-xl lg:max-w-none"
          }
        >
          {product.images.map((src) => (
            <img
              key={src}
              src={src}
              alt={product.title}
              className="aspect-square w-full rounded-3xl bg-white object-contain"
            />
          ))}
        </div>
        <div>
          <h1 className="font-serif text-4xl">{product.title}</h1>
          <div className="mt-2 flex items-center gap-2 text-sm">
            <span className="flex text-turmeric">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < Math.round(product.rating) ? "fill-turmeric" : ""}`}
                />
              ))}
            </span>
            {product.rating} ({product.reviewCount} reviews)
          </div>
          <p className="mt-4 leading-relaxed text-muted">{product.description}</p>
          <div className="mt-8">
            <AddToCart product={product} />
          </div>
        </div>
      </div>

      <section className="mt-16">
        <h2 className="font-serif text-3xl">You may also like</h2>
        <div className="mt-6">
          <ProductGrid products={related} />
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-serif text-3xl">Frequently asked questions</h2>
        <div className="mt-4 divide-y divide-line rounded-3xl bg-white">
          {faqs.slice(0, 5).map((f) => (
            <details key={f.q} className="px-5 py-4">
              <summary className="cursor-pointer font-medium">{f.q}</summary>
              <p className="mt-2 text-sm text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
