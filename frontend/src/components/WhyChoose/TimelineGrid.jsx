import React from "react";
import { motion } from "framer-motion";
import { item } from "./motion.variants";
import TimelineStepCard from "./TimelineStepCard";

const TimelineGrid = ({ steps }) => (
  <motion.div variants={item} className="relative">
    {/* Desktop guide line */}
    <div className="hidden md:block absolute inset-x-0 top-20 lg:top-24 h-px bg-black/10" />
    <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-7">
      {steps.map((s, idx) => (
        <TimelineStepCard key={s.key} step={s} index={idx} total={steps.length} />
      ))}
    </div>
  </motion.div>
);

export default TimelineGrid;
