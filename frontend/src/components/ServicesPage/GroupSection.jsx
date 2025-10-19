// src/components/Services/GroupSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { ServiceBlock } from "./ServiceBlock";
import { container, item } from "./motionVariants";

export const GroupSection = ({ g }) => (
  <section className="relative z-10" style={{ backgroundColor: g.bg }}>
    <div className="mx-auto max-w-5xl w-[92%] py-14 md:py-10">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={container}>
        <motion.h3 variants={item} className="text-center text-2xl md:text-3xl font-semibold text-black">
          {g.heading}
        </motion.h3>

        <div className="mt-10 md:mt-14 space-y-20 md:space-y-44">
          {g.services.map((s, i) => (
            <ServiceBlock key={`${g.heading}-${s.title}`} s={s} index={i} />
          ))}
        </div>

        <motion.div variants={item} className="mt-12 md:mt-16 flex items-center justify-center">
          <span className="block h-px w-24 bg-gradient-to-r from-transparent via-black/20 to-transparent" />
        </motion.div>

        {g.cta && (
          <motion.div variants={item} className="mt-6 flex items-center justify-center">
            <a
              href={g.cta.href}
              className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium bg-black text-white hover:bg-black/90 ring-1 ring-black/10"
            >
              {g.cta.label}
            </a>
          </motion.div>
        )}
      </motion.div>
    </div>
  </section>
);