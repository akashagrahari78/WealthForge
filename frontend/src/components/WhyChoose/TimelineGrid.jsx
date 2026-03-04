import React from "react";
import { motion } from "framer-motion";
import { item } from "./motion.variants";
import TimelineStepCard from "./TimelineStepCard";

const TimelineGrid = ({ steps }) => {
  return (
    <motion.div variants={item} className="relative mt-8">
      {/* 
        Animated dotted/dashed line connecting the steps (Desktop only).
        It's positioned right across the center of the icons.
      */}
      <div className="hidden lg:block absolute left-[12%] right-[12%] top-[34px] h-[2px] bg-black/5 rounded-full overflow-hidden">
        <motion.div
          className="w-full h-full bg-gradient-to-r from-yellow-300 via-emerald-300 to-purple-300 origin-left"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {steps.map((s, idx) => (
          <TimelineStepCard key={s.key} step={s} index={idx} total={steps.length} />
        ))}
      </div>
    </motion.div>
  );
};

export default TimelineGrid;
