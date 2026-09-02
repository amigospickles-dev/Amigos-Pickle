export const metadata = { title: "Shipping, Returns & Cancellation" };

export default function ShippingPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="font-serif text-4xl">Shipping, returns and cancellation</h1>
      <p className="mt-6 text-sm leading-relaxed text-muted">
        We ship across India after your WhatsApp order is confirmed. Free shipping is offered
        on orders above ₹1,200. Dispatch typically happens in 1–3 working days; transit times
        depend on the courier and destination. Because pickles are perishable food, opened
        jars cannot be returned. Unopened, damaged-in-transit orders may be replaced if you
        share photos within 48 hours of delivery. Cancel before we pack the parcel by
        messaging us on WhatsApp. Refunds, when applicable, follow the payment method agreed
        on chat.
      </p>
    </article>
  );
}
