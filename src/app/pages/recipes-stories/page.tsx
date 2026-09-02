import Link from "next/link";
import recipes from "@/data/recipes.json";

export const metadata = { title: "Recipes & Stories" };

export default function RecipesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <h1 className="font-serif text-4xl">Recipes & Stories</h1>
      <p className="mt-2 text-muted">Traditional Andhra recipes from the Food on Farm kitchen.</p>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {recipes.map((r) => (
          <Link
            key={r.slug}
            href={`/pages/recipes-stories/${r.slug}`}
            className="overflow-hidden rounded-3xl bg-white shadow-sm"
          >
            <img src={r.image} alt="" className="h-48 w-full object-cover" />
            <div className="p-5">
              <p className="text-xs text-muted">{r.date}</p>
              <h2 className="mt-1 font-serif text-xl">{r.title}</h2>
              <p className="mt-2 text-sm text-muted">{r.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
