import React from "react";
import { motion } from "framer-motion";

const StatItem = ({ title, subtitle, children, delay = 0 }) => {
  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl md:text-4xl font-bold font-merriweather text-black">
        {children || title}
      </h2>
      <p className="text-sm font-quicksand text-gray-600 mt-1">{subtitle}</p>
    </motion.div>
  );
};

export default StatItem;
