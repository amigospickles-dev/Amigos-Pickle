"use client";

import { TestimonialsColumn, type Testimonial } from "@/components/ui/testimonials-columns-1";
import { motion } from "motion/react";
import { MessageCircleHeart } from "lucide-react";

const testimonials: Testimonial[] = [
  {
    text: "The veg mixed pickle is very tasty and well-balanced. The vegetables are fresh, spices are perfect, and the flavor is authentic. Not too oily or too spicy — just right.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
    name: "Naveen Inukollu",
    role: "Verified buyer · Hyderabad",
  },
  {
    text: "You would not get this taste from any branded pickles in the market. Totally worth ordering for its authenticity and traditional tastes. Feels like homemade pickle from a Telugu kitchen.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    name: "Dinesh M",
    role: "Verified buyer · Bengaluru",
  },
  {
    text: "We received the order just now. Chicken pickle taste is awesome. Super packing. No leakage. We are from Bangalore. Thank you Babai.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    name: "Madhavi Villuri",
    role: "Verified buyer · Bengaluru",
  },
  {
    text: "Really, the pickle taste was awesome. Fresh and full of authentic flavour! Goes perfectly with hot rice and a spoon of ghee.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
    name: "Suresh P",
    role: "Verified buyer · Vijayawada",
  },
  {
    text: "Excellent taste of Andhra pickles. Especially the vegetable pickle is very tasty — reminds me of my grandmother's kitchen.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face",
    name: "Divya Sarika",
    role: "Verified buyer · Chennai",
  },
  {
    text: "Really awesome and tasty, no words to say that much super — amma pachadi laga undi. Will definitely order again.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
    name: "Verified Buyer",
    role: "Verified buyer · Guntur",
  },
  {
    text: "The mutton boneless pickle is incredible — tender meat, perfect spice level, and that smoky Andhra flavour. Best non-veg pickle I've had online.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face",
    name: "Priya Reddy",
    role: "Verified buyer · Hyderabad",
  },
  {
    text: "Ordered from the US for my parents. They loved the gongura pickle — said it tastes exactly like what they grew up eating in Andhra.",
    image:
      "https://images.unsplash.com/photo-1519345185760-3f2917c472ef?w=80&h=80&fit=crop&crop=face",
    name: "Ravi Kumar",
    role: "Verified buyer · New Jersey",
  },
  {
    text: "Fast delivery, beautiful packaging, and the fish pickle is outstanding. You can tell it's made in small batches with real care.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=80&h=80&fit=crop&crop=face",
    name: "Anitha Rao",
    role: "Verified buyer · Pune",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export function Testimonials() {
  return (
    <section className="relative my-20 bg-background" aria-labelledby="testimonials-heading">
      <div className="container z-10 mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mx-auto flex max-w-[540px] flex-col items-center justify-center"
        >
          <div className="flex justify-center">
            <div className="flex items-center gap-2 rounded-lg border border-line bg-white px-4 py-1 text-sm font-medium text-chili">
              <MessageCircleHeart className="h-4 w-4" aria-hidden />
              Testimonials
            </div>
          </div>

          <h2
            id="testimonials-heading"
            className="mt-5 text-center font-serif text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          >
            What our customers say
          </h2>
          <p className="mt-5 text-center text-muted">
            Real reviews from families who love our Andhra pickles.
          </p>
        </motion.div>

        <div className="mt-10 flex max-h-[740px] justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
}
