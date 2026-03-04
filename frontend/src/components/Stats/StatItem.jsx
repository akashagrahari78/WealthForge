import React from "react";
import { motion } from "framer-motion";

const StatItem = ({ title, subtitle, children, delay = 0 }) => {
  return (
    <motion.div
      className="stat-card flex flex-col items-center"
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      viewport={{ once: true, margin: "-60px" }}
    >
      <h2 className="text-3xl md:text-4xl font-bold font-merriweather text-black">
        {children || title}
      </h2>
      <p className="text-sm font-quicksand text-gray-500 mt-2">{subtitle}</p>
    </motion.div>
  );
};

export default StatItem;
