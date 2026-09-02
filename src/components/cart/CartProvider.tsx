"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { CartItem } from "@/lib/types";

type CartContextValue = {
  items: CartItem[];
  count: number;
  subtotal: number;
  open: boolean;
  setOpen: (v: boolean) => void;
  addItem: (item: Omit<CartItem, "key" | "quantity"> & { quantity?: number }) => void;
  setQty: (key: string, quantity: number) => void;
  remove: (key: string) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "fof-cart-v1";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {
      /* ignore */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, ready]);

  const addItem = useCallback(
    (item: Omit<CartItem, "key" | "quantity"> & { quantity?: number }) => {
      const key = `${item.variantId}`;
      const qty = item.quantity ?? 1;
      setItems((prev) => {
        const existing = prev.find((p) => p.key === key);
        if (existing) {
          return prev.map((p) =>
            p.key === key ? { ...p, quantity: p.quantity + qty } : p,
          );
        }
        return [...prev, { ...item, key, quantity: qty }];
      });
      setOpen(true);
    },
    [],
  );

  const setQty = useCallback((key: string, quantity: number) => {
    setItems((prev) =>
      quantity <= 0
        ? prev.filter((p) => p.key !== key)
        : prev.map((p) => (p.key === key ? { ...p, quantity } : p)),
    );
  }, []);

  const remove = useCallback((key: string) => {
    setItems((prev) => prev.filter((p) => p.key !== key));
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const value = useMemo(
    () => ({
      items,
      count: items.reduce((s, i) => s + i.quantity, 0),
      subtotal: items.reduce((s, i) => s + i.price * i.quantity, 0),
      open,
      setOpen,
      addItem,
      setQty,
      remove,
      clear,
    }),
    [items, open, addItem, setQty, remove, clear],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
