import React from "react";
import { motion } from "framer-motion";
import { item } from "./motion.variants";

const TimelineHeader = () => {
  const words = ["A", "simple,", "disciplined", "journey", "to", "wealth"];

  return (
    <motion.header variants={item} className="mb-12 md:mb-16 text-center md:text-left">
      {/* Eyebrow label */}
      <motion.div
        className="flex items-center justify-center md:justify-start gap-2.5 mb-4"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="text-sm md:text-base uppercase tracking-[0.25em] font-medium text-black/50">
          Why choose us
        </p>
      </motion.div>

      {/* Headline with staggered word animation */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-merriweather leading-tight text-black flex flex-wrap justify-center md:justify-start gap-x-[0.3em]">
        {words.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 + i * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
          >
            {word}
          </motion.span>
        ))}
      </h2>

      {/* Subtext */}
      <motion.p
        className="mt-4 text-base md:text-lg font-quicksand text-black/60 max-w-3xl mx-auto md:mx-0"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        From understanding your goals to periodic reviews, the process is transparent and built around you.
      </motion.p>
    </motion.header>
  );
};

export default TimelineHeader;
