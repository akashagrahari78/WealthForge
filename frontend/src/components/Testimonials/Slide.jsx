import React from "react";
import { motion } from "framer-motion";
import { slideVariants } from "./variants";

const Slide = ({ t, direction }) => (
  <motion.div
    key={t.name + t.quote.slice(0, 8)}
    custom={direction}
    variants={slideVariants}
    initial="enter"
    animate="center"
    exit="exit"
    transition={{ duration: 0.45, ease: "easeOut" }}
    className="flex flex-col items-center text-center gap-6 md:gap-8"
  >
    <p className="text-xl md:text-[28px] leading-relaxed md:leading-[1.6] text-black max-w-4xl">
      “{t.quote}”
    </p>

    <div className="flex items-center gap-3 md:gap-4">
      {t.avatar ? (
        <img src={t.avatar} alt={t.name} className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover" />
      ) : (
        <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-black/10" />
      )}
      <div className="text-left">
        <div className="text-sm md:text-base font-semibold text-black">{t.name}</div>
        <div className="text-xs md:text-sm text-black/60">{t.role}</div>
      </div>
    </div>
  </motion.div>
);

export default Slide;
