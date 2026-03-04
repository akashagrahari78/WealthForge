// src/components/GridBackground.jsx
import React from "react";
import { motion } from "framer-motion";

const GridBackground = ({ children }) => (
  <div className="relative w-full min-h-screen bg-white">
    {/* Animated grid that fades in with a radial mask */}
    <motion.div
      className="pointer-events-none absolute inset-0 grid-bg-animated"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    />

    {/* Page content always above */}
    <div className="relative z-10">{children}</div>
  </div>
);

export default GridBackground;
