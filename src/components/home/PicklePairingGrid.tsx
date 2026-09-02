"use client";

import { useState } from "react";

type Pairing = {
  title: string;
  body: string;
  image: string;
  alt: string;
  imageSide: "left" | "right";
};

const pairings: Pairing[] = [
  {
    title: "Perfect with Hot Rice",
    body: "Mix a spoonful of pickle with steaming hot rice and a dash of ghee. The heat releases the rich aroma of spices, creating the ultimate comfort meal — a staple in every Andhra household.",
    image:
      "https://foodonfarmpickles.com/cdn/shop/files/idli-kaaram1-scaled_ff06c10d-3125-4e84-a0f6-c1d90ea8ad66.webp?v=1772381290&width=600",
    alt: "A colorful serving of spiced pickle alongside rice",
    imageSide: "left",
  },
  {
    title: "Side with Dosa & Idli",
    body: "Pair our tangy pickles as a side with crispy dosas or soft idlis. The burst of spice elevates your breakfast, adding that authentic Andhra kick to your morning routine.",
    image:
      "https://foodonfarmpickles.com/cdn/shop/files/Gongura-scaled_9c2853eb-9dcc-4be9-a303-300898ead3ec.webp?v=1758989293&width=600",
    alt: "Gongura pickle served with traditional South Indian breakfast",
    imageSide: "left",
  },
  {
    title: "Spread on Roti & Paratha",
    body: "Spread a thin layer of our gongura or mango pickle on warm roti or paratha for a flavour-packed meal. The tangy, spicy taste turns a simple flatbread into something extraordinary.",
    image:
      "https://foodonfarmpickles.com/cdn/shop/files/Usirikaya-1-scaled_964d7e2c-3b58-472e-b472-eea5651e11c9.webp?v=1772381271&width=600",
    alt: "Indian flatbreads served with a bright pickle accompaniment",
    imageSide: "right",
  },
  {
    title: "Flavour Boost for Curries",
    body: "Add a spoonful of our pickle to dals, gravies, or stir-fries for an instant depth of flavour. It works as a secret ingredient that transforms everyday cooking into something special.",
    image:
      "https://foodonfarmpickles.com/cdn/shop/files/1000038257.jpg?v=1758989299&width=600",
    alt: "A richly colored homemade curry ready to be seasoned",
    imageSide: "right",
  },
];

export const PicklePairingGrid = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <section className="pickle-pairing" aria-labelledby="pickle-heading">
      <style>{`
        .pickle-pairing {
          --pickle-orange: #e79114;
          --pickle-ink: #17130d;
          --pickle-paper: #f8e7c8;
          width: 100%;
          padding: 56px 28px;
          box-sizing: border-box;
          background: var(--pickle-paper);
          color: var(--pickle-ink);
          font-family: Inter, ui-sans-serif, system-ui, sans-serif;
        }
        .pickle-pairing__wrap {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }
        .pickle-pairing__header {
          margin-bottom: 36px;
          text-align: center;
        }
        .pickle-pairing__eyebrow {
          margin: 0 0 10px;
          color: var(--pickle-orange);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.28em;
          text-transform: uppercase;
        }
        .pickle-pairing__heading {
          margin: 0;
          font-family: var(--font-playfair), Georgia, serif;
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 700;
          line-height: 1.15;
        }
        .pickle-pairing__intro {
          margin: 12px 0 0;
          color: #6b574c;
          font-size: 17px;
        }
        .pickle-pairing__grid {
          display: grid;
          gap: 16px;
        }
        .pickle-pairing__card {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 220px;
          overflow: hidden;
          border-radius: 18px;
          background: #fff;
          border: 1px solid transparent;
          box-shadow: 0 2px 12px rgba(23, 19, 13, 0.06);
          cursor: default;
          transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
        }
        .pickle-pairing__card.is-active {
          border-color: var(--pickle-orange);
          box-shadow: 0 8px 28px rgba(231, 145, 20, 0.18);
          transform: translateY(-2px);
        }
        .pickle-pairing__image-side {
          margin: 0;
          overflow: hidden;
          background: #d9d3c7;
        }
        .pickle-pairing__image-side img {
          width: 100%;
          height: 100%;
          min-height: 220px;
          display: block;
          object-fit: cover;
          object-position: center;
          transition: transform 0.35s ease;
        }
        .pickle-pairing__card.is-active .pickle-pairing__image-side img {
          transform: scale(1.04);
        }
        .pickle-pairing__text-side {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 28px 32px;
        }
        .pickle-pairing__card-title {
          margin: 0 0 12px;
          color: var(--pickle-orange);
          font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
          font-size: clamp(22px, 2vw, 30px);
          font-style: italic;
          font-weight: 900;
          letter-spacing: 0.02em;
          line-height: 1.1;
          text-transform: uppercase;
        }
        .pickle-pairing__card-body {
          margin: 0;
          color: #4a3f35;
          font-size: clamp(15px, 1.1vw, 17px);
          line-height: 1.6;
        }
        @media (max-width: 768px) {
          .pickle-pairing {
            padding: 40px 16px;
          }
          .pickle-pairing__card {
            grid-template-columns: 1fr;
          }
          .pickle-pairing__card--image-right .pickle-pairing__image-side {
            order: -1;
          }
          .pickle-pairing__text-side {
            padding: 24px;
          }
        }
      `}</style>
      <div className="pickle-pairing__wrap">
        <header className="pickle-pairing__header">
          <p className="pickle-pairing__eyebrow">From the Andhra kitchen</p>
          <h2 id="pickle-heading" className="pickle-pairing__heading">
            One Pickle, Multiple Delicious Ways
          </h2>
          <p className="pickle-pairing__intro">A little spoonful goes a long way.</p>
        </header>

        <div className="pickle-pairing__grid">
          {pairings.map((pairing) => (
            <article
              className={`pickle-pairing__card ${pairing.imageSide === "right" ? "pickle-pairing__card--image-right" : ""} ${activeCard === pairing.title ? "is-active" : ""}`}
              key={pairing.title}
              onMouseEnter={() => setActiveCard(pairing.title)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {pairing.imageSide === "left" && (
                <figure className="pickle-pairing__image-side">
                  <img
                    src={pairing.image}
                    alt={pairing.alt}
                    loading="lazy"
                    decoding="async"
                    width={600}
                    height={400}
                  />
                </figure>
              )}
              <div className="pickle-pairing__text-side">
                <p className="pickle-pairing__card-title">{pairing.title}</p>
                <p className="pickle-pairing__card-body">{pairing.body}</p>
              </div>
              {pairing.imageSide === "right" && (
                <figure className="pickle-pairing__image-side">
                  <img
                    src={pairing.image}
                    alt={pairing.alt}
                    loading="lazy"
                    decoding="async"
                    width={600}
                    height={400}
                  />
                </figure>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
