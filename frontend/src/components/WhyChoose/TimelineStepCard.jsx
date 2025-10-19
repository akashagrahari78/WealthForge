import React from "react";
import { motion } from "framer-motion";
import { item } from "./motion.variants";
import Dot from "./Dot";
import { stepIcon } from "./steps.data";

const TimelineStepCard = ({ step, index, total }) => {
  return (
    <motion.div
      variants={item}
      className="relative rounded-2xl border border-black/10 bg-white p-5 md:p-6 shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
    >
      {/* Connector line (mobile vertical) */}
      {index !== total - 1 && (
        <div className="md:hidden absolute left-6 top-[72px] bottom-[-12px] w-[2px] bg-black/10" />
      )}

      {/* Step icon + title: ROUND badges */}
      <div className="flex items-start gap-3">
        <div
          className={`inline-flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full ring-1 ${step.iconBg}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-[20px] w-[20px] md:h-[22px] md:w-[22px] text-current" viewBox="0 0 24 24" fill="currentColor">
            {stepIcon(step.key)}
          </svg>
        </div>
        <div>
          <h3 className="font-quicksand text-lg md:text-xl font-semibold text-black">{step.title}</h3>
          <p className="mt-1 text-sm md:text-base text-black/70">{step.desc}</p>
        </div>
      </div>

      {/* Horizontal connectors (desktop) */}
      <div className="hidden md:block">
        <div className="relative mt-6">
          <div className="flex items-center">
            <Dot />
            {index !== total - 1 && <div className="mx-2 h-[2px] flex-1 bg-black/10" />}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TimelineStepCard;
