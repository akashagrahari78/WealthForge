import React from "react";
import { motion } from "framer-motion";
import { item } from "./motion.variants";

const TimelineHeader = () => (
  <motion.div variants={item} className="mb-8 md:mb-12">
    <p className="text-sm md:text-xl uppercase tracking-[0.18em] text-black/70">Why choose us</p>
    <h2 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-semibold font-bricolage text-black">
      A simple, disciplined journey to wealth
    </h2>
    <p className="mt-3 text-base md:text-lg text-black/70 max-w-3xl">
      From understanding your goals to periodic reviews, the process is transparent and built around you.
    </p>
  </motion.div>
);

export default TimelineHeader;
