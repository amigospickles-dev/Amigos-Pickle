import * as React from "react";

type ValueCard = {
  kind: "image" | "text";
  title?: string;
  body?: string;
  image?: string;
  alt?: string;
};

const valueCards: ValueCard[] = [
  {
    kind: "image",
    image:
      "https://foodonfarmpickles.com/cdn/shop/files/1000168130_4e832a0d-db92-4b5d-af24-4a784799bc81.jpg?v=1772381295&width=600",
    alt: "A traditional jar of homemade Indian pickle surrounded by fresh ingredients",
  },
  {
    kind: "text",
    title: "Traditional Recipes",
    body: "Our pickles are crafted using age-old Andhra recipes passed down through generations. Every jar preserves the authentic taste of homemade pickles — made the way grandmothers have done it for centuries.",
  },
  {
    kind: "image",
    image:
      "https://foodonfarmpickles.com/cdn/shop/files/tomato-pachadi-scaled_04314ab6-23c6-4e95-8a60-f43b96fdd682.jpg?v=1772381277&width=600",
    alt: "Rich red tomato pachadi with herbs and spices",
  },
  {
    kind: "text",
    title: "Farm Fresh Ingredients",
    body: "We source only the freshest vegetables, raw mangoes, and premium spices directly from farms. Cold-pressed oils and handpicked ingredients ensure every jar bursts with natural flavour.",
  },
  {
    kind: "image",
    image:
      "https://foodonfarmpickles.com/cdn/shop/files/mango-pickle-scaled_f383ec5b-be63-4988-81c1-f2f381d76f8e.webp?v=1772381266&width=600",
    alt: "Golden mango pickle with whole spices",
  },
  {
    kind: "text",
    title: "Zero Preservatives",
    body: "No artificial preservatives, no chemicals, no shortcuts. Our pickles are made in small batches with natural preservation methods — just pure spices, oil, and love in every jar.",
  },
];

export type FarmPickleValuesProps = {
  cards?: ValueCard[];
};

export const FarmPickleValues = ({ cards = valueCards }: FarmPickleValuesProps) => {
  return (
    <section className="pickle-values" aria-label="Why choose our pickles">
      <style>{`
        .pickle-values {
          --pickle-orange: #e79114;
          --pickle-ink: #17130d;
          --pickle-paper: #f7f5ef;
          width: 100%;
          padding: 28px;
          box-sizing: border-box;
          background: var(--pickle-paper);
          color: var(--pickle-ink);
          font-family: Inter, ui-sans-serif, system-ui, sans-serif;
        }
        .pickle-values__grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
          width: 100%;
          max-width: 1800px;
          margin: 0 auto;
        }
        .pickle-values__card {
          min-height: 390px;
          overflow: hidden;
          border-radius: 14px;
          box-sizing: border-box;
        }
        .pickle-values__image-card {
          display: flex;
          flex-direction: column;
          background: #d9d3c7;
        }
        .pickle-values__image {
          width: 100%;
          height: 100%;
          min-height: 390px;
          display: block;
          object-fit: cover;
          object-position: center;
        }
        .pickle-values__text-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 42px 36px;
          text-align: center;
          background: #fff;
          border: 1px solid var(--pickle-ink);
        }
        .pickle-values__title {
          max-width: 15ch;
          margin: 0 0 18px;
          color: var(--pickle-orange);
          font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
          font-size: clamp(26px, 2.25vw, 42px);
          font-style: italic;
          font-weight: 900;
          letter-spacing: .02em;
          line-height: 1.1;
          text-transform: uppercase;
        }
        .pickle-values__body {
          max-width: 34ch;
          margin: 0;
          color: var(--pickle-orange);
          font-size: clamp(16px, 1.18vw, 21px);
          line-height: 1.6;
        }
        @media (max-width: 900px) {
          .pickle-values { padding: 18px; }
          .pickle-values__grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .pickle-values__card, .pickle-values__image { min-height: 300px; }
          .pickle-values__text-card { padding: 30px 24px; }
        }
        @media (max-width: 620px) {
          .pickle-values { padding: 12px; }
          .pickle-values__grid { grid-template-columns: 1fr; gap: 12px; }
          .pickle-values__card, .pickle-values__image { min-height: 300px; }
          .pickle-values__title { font-size: 30px; }
          .pickle-values__body { font-size: 17px; line-height: 1.55; }
        }
      `}</style>
      <div className="pickle-values__grid" aria-label="Our promise">
        {cards.map((card, cardIndex) =>
          card.kind === "image" ? (
            <figure
              className="pickle-values__card pickle-values__image-card"
              key={card.image ?? `image-${cardIndex}`}
            >
              <img
                className="pickle-values__image"
                src={card.image}
                alt={card.alt ?? "Freshly prepared pickle"}
                loading="lazy"
                decoding="async"
              />
            </figure>
          ) : (
            <article
              className="pickle-values__card pickle-values__text-card"
              key={card.title ?? `text-${cardIndex}`}
            >
              <h2 className="pickle-values__title">{card.title}</h2>
              <p className="pickle-values__body">{card.body}</p>
            </article>
          ),
        )}
      </div>
    </section>
  );
};
