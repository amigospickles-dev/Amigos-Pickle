export const metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="font-serif text-4xl">Privacy policy</h1>
      <p className="mt-6 text-sm leading-relaxed text-muted">
        We collect only what we need to fulfil your order: name, phone, shipping address and
        the items you send on WhatsApp. Cart contents stay in your browser (local storage)
        until you check out. We do not sell personal data. WhatsApp messages are processed
        under Meta’s terms. For privacy questions, text {`+91 63019 20526`}.
      </p>
    </article>
  );
}
