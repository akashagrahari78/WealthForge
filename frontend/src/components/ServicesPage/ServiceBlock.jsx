// src/components/Services/ServiceBlock.jsx
import React from "react";
import { motion } from "framer-motion";
import { item } from "./motionVariants";

export const ServiceBlock = ({ s, index }) => (
  <motion.div
    variants={item}
    className={`flex flex-col md:flex-row ${index % 2 === 1 ? "md:flex-row-reverse" : ""} items-center gap-8 md:gap-12`}
  >
    <div className="flex-1 flex items-center justify-center">
      <img
        alt={`${s.title} vector illustration`}
        className="w-[90%] max-w-xs md:max-w-sm"
        // Add your src here, e.g., src={`/assets/services/${s.title}.svg`}
      />
    </div>
    <div className="flex-1">
      <h4 className="text-lg md:text-xl font-semibold text-black">{s.title}</h4>
      <p className="mt-2 text-sm md:text-base text-black/70">{s.desc}</p>
    </div>
  </motion.div>
);