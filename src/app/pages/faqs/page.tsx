import faqs from "@/data/faqs.json";

export const metadata = { title: "FAQs" };

export default function FaqsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="font-serif text-5xl">FAQs</h1>
      <div className="mt-8 divide-y divide-line rounded-3xl bg-white">
        {faqs.map((f) => (
          <details key={f.q} className="px-5 py-4">
            <summary className="cursor-pointer font-medium">{f.q}</summary>
            <p className="mt-2 text-sm text-muted">{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
