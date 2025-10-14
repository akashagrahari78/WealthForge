import React from "react";
import { motion } from "framer-motion";
import { item } from "./motion.variants";

const ServicesHeader = () => (
  <motion.div variants={item} className="mb-8 md:mb-10">
    <p className="text-xs md:text-sm uppercase tracking-wide text-black/70">Our services</p>
    <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-black">Services tailored to your goals</h2>
    <p className="mt-2 text-sm md:text-base text-black/70">
      Simple, transparent plans for wealth creation, protection, and tax efficiency.
    </p>
  </motion.div>
);

export default ServicesHeader;
