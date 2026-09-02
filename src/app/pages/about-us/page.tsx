import { SITE } from "@/lib/site";

export const metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="font-serif text-5xl">About us</h1>
      <p className="mt-2 text-xl text-muted">From a village kitchen to your doorstep</p>
      <p className="mt-6 leading-relaxed text-muted">
        Food on Farm Pickles was born from a simple belief — that the best food comes from
        honest ingredients, traditional methods, and a whole lot of love. We are based in the
        heart of Andhra Pradesh. Every jar carries the flavours of a region known for bold,
        fiery, deeply satisfying cuisine.
      </p>
      <h2 className="mt-10 font-serif text-3xl">The man behind the pickles</h2>
      <p className="mt-4 leading-relaxed text-muted">
        Chef Arjun Reddy brings over 40 years of culinary experience rooted in the
        villages of Andhra Pradesh. Growing up in Kolluru, he learned to cook the way
        generations before him did — outdoors, with farm-fresh ingredients, cold-pressed oils,
        and spices ground by hand.
      </p>
      <p className="mt-4 leading-relaxed text-muted">
        In 2021 he took those recipes to YouTube as Food on Farm. Today the channel has grown
        to over {SITE.stats.youtube} subscribers, with a combined following of{" "}
        {SITE.stats.followers} across YouTube, Instagram and Facebook. The pickles you saw on
        screen? People wanted them at home. In 2023, Food on Farm Pickles was born.
      </p>
      <h2 className="mt-10 font-serif text-3xl">What makes our pickles different</h2>
      <p className="mt-4 leading-relaxed text-muted">
        Most pickles on store shelves use artificial preservatives, refined oils and shortcuts.
        Every jar at Food on Farm is handcrafted in small batches. We source vegetables, raw
        mangoes and spices from farms. We use only cold-pressed oils. We add zero artificial
        preservatives. FSSAI License No: {SITE.fssai}. Trusted by over {SITE.stats.families}{" "}
        families.
      </p>
      <p className="mt-8 font-serif text-lg">
        Thank you for being part of the Food on Farm family.
        <br />— Arjun Reddy & Team
      </p>
    </article>
  );
}
