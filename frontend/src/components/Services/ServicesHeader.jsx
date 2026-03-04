import React from "react";
import { motion } from "framer-motion";
import { item } from "./motion.variants";

const ServicesHeader = () => {
  const words = ["Services", "tailored", "to", "your", "goals"];

  return (
    <motion.header variants={item} className="mb-10 md:mb-14">
      {/* Eyebrow label */}
      <motion.div
        className="flex items-center gap-2.5 mb-4"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-yellow-100 to-amber-100 text-yellow-700 ring-1 ring-yellow-200/60 shadow-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M10 4h4a2 2 0 0 1 2 2v1h3a2 2 0 0 1 2 2v3h-3v2h3v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3h3v-2H3V9a2 2 0 0 1 2-2h3V6a2 2 0 0 1 2-2Zm0 3h4V6h-4v1Z" />
          </svg>
        </span>
        <p className="text-sm md:text-base uppercase tracking-[0.25em] font-medium text-black/50">
          Our services
        </p>
      </motion.div>

      {/* Headline with staggered word animation */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-merriweather leading-tight text-black flex flex-wrap gap-x-[0.3em]">
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
        className="mt-4 text-base md:text-lg font-quicksand text-black/60 max-w-2xl"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        Simple, transparent plans for wealth creation, protection, and tax efficiency.
      </motion.p>

      {/* Animated accent bar */}
      <motion.div
        className="mt-5 h-[3px] w-24 md:w-32 rounded-full bg-gradient-to-r from-yellow-400 via-amber-300 to-transparent"
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
      />
    </motion.header>
  );
};

export default ServicesHeader;
