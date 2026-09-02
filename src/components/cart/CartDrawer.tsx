"use client";

import Link from "next/link";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { WhatsAppIcon } from "@/components/whatsapp/WhatsAppIcon";
import { useCart } from "@/components/cart/CartProvider";
import { inr, shortWeight } from "@/lib/format";
import { SITE } from "@/lib/site";
import { cartOrderMessage, waUrl } from "@/lib/whatsapp";

export function CartDrawer() {
  const { items, open, setOpen, subtotal, setQty, remove } = useCart();
  const remainingShip = Math.max(0, SITE.freeShippingAt - subtotal);
  const remainingOff = Math.max(0, SITE.bulkOffAt - subtotal);

  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-ink/40 transition-opacity ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={() => setOpen(false)}
      />
      <aside
        className={`fixed top-0 right-0 z-50 flex h-full w-full max-w-md flex-col bg-cream shadow-2xl transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <h2 className="font-serif text-2xl text-ink">Cart ({items.length})</h2>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="rounded-full p-2 hover:bg-white"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-2 border-b border-line bg-white px-5 py-3 text-xs text-chili">
          <p className="font-semibold tracking-wide">
            FREE SHIPPING FOR ORDERS ABOVE {inr(SITE.freeShippingAt)}
          </p>
          <p>10% OFF FOR ORDERS ABOVE {inr(SITE.bulkOffAt)}</p>
          {remainingShip > 0 ? (
            <p className="text-muted">
              You&apos;re <strong>{inr(remainingShip)}</strong> away from free shipping.
            </p>
          ) : (
            <p className="text-gongura">You unlocked free shipping!</p>
          )}
          {remainingOff > 0 && remainingOff < SITE.bulkOffAt && (
            <p className="text-muted">
              Add {inr(remainingOff)} more for 10% off — mention it on WhatsApp.
            </p>
          )}
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center gap-3 py-16 text-center text-muted">
              <ShoppingBag className="h-10 w-10 text-line" />
              <p>Your cart is currently empty</p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-sm font-semibold text-chili underline"
              >
                Continue shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li key={item.key} className="flex gap-3 border-b border-line pb-4">
                  <img
                    src={item.image}
                    alt=""
                    className="h-20 w-20 rounded-xl object-cover bg-white"
                  />
                  <div className="min-w-0 flex-1">
                    <Link
                      href={`/products/${item.handle}`}
                      onClick={() => setOpen(false)}
                      className="font-medium text-ink hover:text-chili"
                    >
                      {item.title}
                    </Link>
                    <p className="text-xs text-muted">
                      {[shortWeight(item.weight), item.preference].filter(Boolean).join(" · ")}
                    </p>
                    <p className="mt-1 font-semibold">{inr(item.price)}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <button
                        type="button"
                        className="rounded-full border border-line p-1"
                        onClick={() => setQty(item.key, item.quantity - 1)}
                        aria-label="Decrease"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="w-6 text-center text-sm">{item.quantity}</span>
                      <button
                        type="button"
                        className="rounded-full border border-line p-1"
                        onClick={() => setQty(item.key, item.quantity + 1)}
                        aria-label="Increase"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                      <button
                        type="button"
                        className="ml-auto text-muted hover:text-chili"
                        onClick={() => remove(item.key)}
                        aria-label="Remove"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-line bg-white p-5">
            <div className="mb-3 flex justify-between text-lg font-semibold">
              <span>Subtotal</span>
              <span>{inr(subtotal)}</span>
            </div>
            <a
              href={waUrl(cartOrderMessage(items))}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] py-3.5 font-semibold text-white shadow-lg transition hover:bg-[#1ebe5d]"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Order on WhatsApp
            </a>
            <p className="mt-2 text-center text-xs text-muted">
              We confirm address, payment and shipping on WhatsApp.
            </p>
          </div>
        )}
      </aside>
    </>
  );
}
