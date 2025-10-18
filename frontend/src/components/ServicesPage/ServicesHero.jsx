// src/components/Services/ServicesHero.jsx
import React from "react";
import { motion } from "framer-motion";
import { t } from "./ServicesData";
import { container, item } from "./motionVariants";

export const ServicesHero = ({ lang }) => {
  const translations = t[lang] || t.en;

  return (
    <section className="relative z-10 mx-auto max-w-7xl w-[92%] py-16 md:py-24 flex flex-col md:flex-row items-center gap-10">
      {/* Left: Text */}
      <motion.div initial="hidden" animate="show" variants={container} className="flex-1">
        <motion.div variants={item} className="mb-3">
          <span className="text-xs md:text-sm uppercase tracking-widest text-black/40 font-medium">
            {translations.heroTag}
          </span>
        </motion.div>
        <motion.h1 variants={item} className="text-2xl md:text-4xl font-semibold text-black leading-tight">
          {translations.heroTitle}
        </motion.h1>
        <motion.p variants={item} className="mt-4 text-base md:text-lg text-black/70 max-w-lg">
          {translations.heroSub}
        </motion.p>
        <motion.div variants={item} className="mt-8 flex gap-3 flex-wrap">
          <a href="#consult" className="rounded-full bg-black text-white px-5 py-2.5 text-sm font-medium ring-1 ring-black/10 hover:bg-black/90 transition">
            {translations.book}
          </a>
          <a href="#services" className="rounded-full bg-white text-black px-5 py-2.5 text-sm font-medium ring-1 ring-black/10 hover:bg-black/5 transition">
            {translations.explore}
          </a>
        </motion.div>
      </motion.div>
      {/* Right: Illustration */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex-1 flex items-center justify-center"
      >
        <img
          src="https://undraw.co/api/illustrations/undraw_investment_data_re_sh9x.svg"
          alt="Financial advisor illustration"
          className="w-[90%] max-w-xs md:max-w-md drop-shadow-xl animate-float"
        />
      </motion.div>
    </section>
  );
};