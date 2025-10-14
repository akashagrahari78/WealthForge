import React from "react";
import { motion } from "framer-motion";
import { item } from "./motion.variants";
import TimelineStepCard from "./TimelineStepCard";

const TimelineGrid = ({ steps }) => (
  <motion.div variants={item} className="relative">
    {/* Horizontal guide line (desktop) */}
    <div className="hidden md:block absolute left-0 right-0 top-16 md:top-20 lg:top-24 h-[2px] bg-black/10" />
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
      {steps.map((s, idx) => (
        <TimelineStepCard key={s.key} step={s} index={idx} total={steps.length} />
      ))}
    </div>
  </motion.div>
);

export default TimelineGrid;
