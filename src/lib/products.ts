import productsData from "@/data/products.json";
import collectionsData from "@/data/collections.json";
import type { Collection, Product, Variant } from "@/lib/types";

export const products = productsData as Product[];
export const collections = collectionsData as Collection[];

const NON_VEG_MENU = {
  chicken: [
    "chicken-pickle-with-bone",
    "chicken-boneless-pickle",
    "gongura-chicken-pickle",
    "boneless-gongura-chicken-pickle",
  ],
  mutton: ["mutton-boneless-pickle", "gongura-mutton-pickle"],
  fish: [
    "bocha-fish-pickle",
    "korramenu-fish-pickle",
    "boneless-korramenu-fish-pickle",
    "apollo-fish-pickle",
    "prawns-pickle-medium",
    "prawns-pickle-large",
    "tuna-fish-pickle",
    "salmon-fish-pickle",
  ],
} as const;

export const menuProductHandles = [
  ...NON_VEG_MENU.chicken,
  ...NON_VEG_MENU.mutton,
  ...NON_VEG_MENU.fish,
] as const;

export type NonVegMenuCategory = keyof typeof NON_VEG_MENU;

export function getProduct(handle: string) {
  return products.find((p) => p.handle === handle);
}

export function getCollection(slug: string) {
  return collections.find((c) => c.slug === slug);
}

export function productsInCollection(slug: string) {
  if (slug === "best-sellers") {
    const listed = products.filter((p) => p.collections.includes("best-sellers"));
    if (listed.length) return listed.sort((a, b) => b.reviewCount - a.reviewCount);
    return [...products].sort((a, b) => b.reviewCount - a.reviewCount).slice(0, 8);
  }
  return products.filter((p) => p.collections.includes(slug));
}

export function bestsellers() {
  return productsInCollection("best-sellers");
}

export function searchProducts(q: string) {
  const s = q.trim().toLowerCase();
  if (!s) return [];
  return products.filter(
    (p) =>
      p.title.toLowerCase().includes(s) ||
      p.type.toLowerCase().includes(s) ||
      p.tags.some((t) => t.toLowerCase().includes(s)),
  );
}

export function relatedProducts(product: Product, limit = 4) {
  const same = products.filter(
    (p) => p.handle !== product.handle && p.collections.some((c) => product.collections.includes(c)),
  );
  return (same.length ? same : products.filter((p) => p.handle !== product.handle)).slice(0, limit);
}

export function findVariant(
  product: Product,
  weight: string | null,
): Variant | undefined {
  return product.variants.find((v) => !weight || v.weight === weight || v.title === weight);
}

export function defaultWeight(product: Product) {
  return product.weights[0] ?? product.variants[0]?.weight ?? product.variants[0]?.title ?? "";
}

export function nonVegMenuCategories(): {
  id: NonVegMenuCategory;
  title: string;
  collectionSlug: string;
  products: Product[];
}[] {
  return [
    {
      id: "chicken",
      title: "Chicken Pickles",
      collectionSlug: "chicken-pickles",
      products: menuProducts(NON_VEG_MENU.chicken),
    },
    {
      id: "mutton",
      title: "Mutton Pickles",
      collectionSlug: "mutton-pickles",
      products: menuProducts(NON_VEG_MENU.mutton),
    },
    {
      id: "fish",
      title: "Fish Pickles",
      collectionSlug: "fish-pickles",
      products: menuProducts(NON_VEG_MENU.fish),
    },
  ];
}

function menuProducts(handles: readonly string[]) {
  return handles.map(getProduct).filter(Boolean) as Product[];
}

export function oneKgVariant(product: Product) {
  return product.variants.find(
    (v) => v.weight?.toLowerCase() === "1kg" || v.title?.toLowerCase() === "1kg",
  );
}
