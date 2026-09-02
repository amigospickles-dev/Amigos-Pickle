import { notFound } from "next/navigation";
import { ProductGrid } from "@/components/product/ProductGrid";
import { collections, getCollection, productsInCollection } from "@/lib/products";

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getCollection(slug);
  return { title: c?.title ?? "Collection" };
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const collection = getCollection(slug);
  if (!collection) notFound();
  const items = productsInCollection(slug);

  return (
    <div>
      <div className="relative h-48 overflow-hidden sm:h-64">
        <img src={collection.image} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-ink/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-cream">
          <p className="text-xs tracking-[0.25em] uppercase">{collection.tagline}</p>
          <h1 className="font-serif text-4xl sm:text-5xl">{collection.title}</h1>
          <p className="mt-2 max-w-xl text-sm text-cream/80">{collection.description}</p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <p className="mb-6 text-sm text-muted">{items.length} products</p>
        <ProductGrid products={items} />
      </div>
    </div>
  );
}
