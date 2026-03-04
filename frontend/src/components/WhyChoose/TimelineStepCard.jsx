import React from "react";
import { motion } from "framer-motion";
import { item } from "./motion.variants";
import { stepIcon } from "./steps.data";

const TimelineStepCard = ({ step, index, total }) => {
  const numberStr = `0${index + 1}`;

  return (
    <motion.div
      variants={item}
      className="
        relative flex flex-col items-start
        rounded-2xl border border-black/8 bg-white
        p-6 md:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.03)]
        hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]
        transition-all duration-300 group
        hover:-translate-y-1 hover:border-black/15
      "
    >
      {/* 
        LARGE BACKGROUND NUMBER effect.
        This sits behind the content, barely visible but super premium.
      */}
      <div className="absolute top-4 right-4 text-7xl font-bold text-black/[0.03] select-none pointer-events-none font-bricolage transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2 group-hover:text-black/[0.05]">
        {numberStr}
      </div>

      {/* 
        This is the icon container.
        On large screens where we have the horizontal line, this sits directly on top of it.
        We'll make it pop with a crisp background and outer ring.
      */}
      <div
        className={`
          relative z-10 shrink-0
          flex h-12 w-12 md:h-14 md:w-14 items-center justify-center
          rounded-full ring-[4px] ring-white
          ${step.iconBg} text-black mb-6
          shadow-sm group-hover:scale-110 transition-transform duration-300
        `}
      >
        <span className="pointer-events-none absolute inset-0 rounded-full bg-white/0 [mask-image:linear-gradient(to_bottom,rgba(255,255,255,0.7),transparent_40%)]" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 md:h-6 md:w-6"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          {stepIcon(step.key)}
        </svg>
      </div>

      <div className="relative z-10">
        <h3 className="font-quicksand text-xl md:text-2xl font-bold text-black tracking-tight">
          {step.title}
        </h3>
        <p className="mt-3 text-sm md:text-base leading-relaxed text-black/65">
          {step.desc}
        </p>
      </div>

      {/* 
        Mobile Vertical Connector 
        For small screens where cards stack vertically, this gives sequence.
      */}
      {index !== total - 1 && (
        <div className="hidden max-lg:block absolute left-[3.25rem] md:left-[3.75rem] bottom-[-24px] w-px h-[24px] bg-gradient-to-b from-black/20 to-transparent" />
      )}
    </motion.div>
  );
};

export default TimelineStepCard;
