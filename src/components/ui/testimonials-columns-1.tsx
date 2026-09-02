"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";

export type Testimonial = {
  text: string;
  image: string;
  name: string;
  role: string;
};

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  const reduceMotion = useReducedMotion();

  return (
    <div className={props.className}>
      <motion.div
        animate={reduceMotion ? undefined : { translateY: "-50%" }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div
                  className="w-full max-w-xs rounded-3xl border border-line bg-white p-10 shadow-lg shadow-primary/10"
                  key={`${index}-${i}`}
                >
                  <div className="text-sm leading-relaxed text-ink">{text}</div>
                  <div className="mt-5 flex items-center gap-2">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="flex flex-col">
                      <div className="font-medium leading-5 tracking-tight">{name}</div>
                      <div className="leading-5 tracking-tight text-muted">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
