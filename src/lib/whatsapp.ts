import { SITE } from "@/lib/site";
import type { CartItem } from "@/lib/types";
import { inr, shortWeight } from "@/lib/format";

export function waUrl(text: string) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function cartOrderMessage(items: CartItem[]) {
  const lines = items.map((item, i) => {
    const extra = [shortWeight(item.weight), item.preference].filter(Boolean).join(", ");
    const lineTotal = item.price * item.quantity;
    return `${i + 1}. ${item.title}${extra ? ` — ${extra}` : ""} × ${item.quantity} — ${inr(lineTotal)}`;
  });
  const subtotal = items.reduce((s, i) => s + i.price * i.quantity, 0);
  return [
    `New order from ${SITE.name}`,
    "",
    ...lines,
    "",
    `Subtotal: ${inr(subtotal)}`,
    "",
    "Please confirm address and payment. Thank you!",
  ].join("\n");
}

export function singleItemMessage(item: {
  title: string;
  weight: string;
  preference: string | null;
  quantity: number;
  price: number;
}) {
  const extra = [shortWeight(item.weight), item.preference].filter(Boolean).join(", ");
  return [
    `Hi, I want to order from ${SITE.name}:`,
    `${item.title}${extra ? ` — ${extra}` : ""} × ${item.quantity} — ${inr(item.price * item.quantity)}`,
    "",
    "Please confirm availability and delivery.",
  ].join("\n");
}
