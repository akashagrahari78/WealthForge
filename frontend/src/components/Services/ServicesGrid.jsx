import React from "react";
import { motion } from "framer-motion";
import { item } from "./motion.variants";
import ServiceCard from "./ServiceCard";

const ServicesGrid = ({ data = [] }) => (
  <motion.div variants={item} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
    {data.map((s, i) => (
      <ServiceCard key={i} {...s} />
    ))}
  </motion.div>
);

export default ServicesGrid;
