export type Variant = {
  id: number;
  title: string;
  price: number;
  compareAt: number | null;
  available: boolean;
  weight: string | null;
  preference: string | null;
  grams: number;
  per100: number | null;
};

export type Product = {
  id: number;
  title: string;
  handle: string;
  description: string;
  html: string;
  type: string;
  tags: string[];
  options: { name: string; values: string[] }[];
  weights: string[];
  preferences: string[];
  variants: Variant[];
  images: string[];
  collections: string[];
  available: boolean;
  priceFrom: number;
  rating: number;
  reviewCount: number;
  badges: string[];
  featured: boolean;
};

export type Collection = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
};

export type CartItem = {
  key: string;
  handle: string;
  title: string;
  image: string;
  variantId: number;
  weight: string;
  preference: string | null;
  price: number;
  quantity: number;
};
