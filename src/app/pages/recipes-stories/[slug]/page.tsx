import { notFound } from "next/navigation";
import Link from "next/link";
import recipes from "@/data/recipes.json";

export function generateStaticParams() {
  return recipes.map((r) => ({ slug: r.slug }));
}

export default async function RecipePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const recipe = recipes.find((r) => r.slug === slug);
  if (!recipe) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <Link href="/pages/recipes-stories" className="text-sm text-chili">
        ← All stories
      </Link>
      <img src={recipe.image} alt="" className="mt-4 h-72 w-full rounded-3xl object-cover" />
      <p className="mt-4 text-xs text-muted">{recipe.date}</p>
      <h1 className="mt-2 font-serif text-4xl">{recipe.title}</h1>
      {recipe.body.split("\n\n").map((p) => (
        <p key={p.slice(0, 24)} className="mt-4 leading-relaxed text-muted">
          {p}
        </p>
      ))}
    </article>
  );
}
