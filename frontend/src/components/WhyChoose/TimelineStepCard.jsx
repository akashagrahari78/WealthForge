import React from "react";
import { motion } from "framer-motion";
import { item } from "./motion.variants";
import Dot from "./Dot";
import { stepIcon } from "./steps.data";

const TimelineStepCard = ({ step, index, total }) => {
  return (
    <motion.div
      variants={item}
      className="
        relative rounded-2xl border border-black/[0.08] bg-white
        p-5 sm:p-6 shadow-[0_6px_20px_rgba(0,0,0,0.06)]
        hover:shadow-[0_10px_28px_rgba(0,0,0,0.10)] transition-shadow
      "
    >
      {/* Mobile vertical connector */}
      {index !== total - 1 && (
        <div className="md:hidden absolute left-8 top-[74px] bottom-[-14px] w-px bg-black/10" />
      )}

      {/* Header: smaller circular badge + title + desc */}
      <div className="flex items-start gap-3 sm:gap-4">
        <div
          className={`
            relative shrink-0
            inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center
            rounded-full ring-1 ring-black/[0.06]
            ${step.iconBg} text-black
            shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]
          `}
        >
          {/* subtle glossy highlight */}
          <span className="pointer-events-none absolute inset-0 rounded-full bg-white/0 [mask-image:linear-gradient(to_bottom,rgba(255,255,255,0.7),transparent_40%)]" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-[18px] w-[18px] sm:h-[19px] sm:w-[19px]"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            {stepIcon(step.key)}
          </svg>
        </div>

        <div>
          <h3 className="font-quicksand text-lg sm:text-xl font-semibold text-black">
            {step.title}
          </h3>
          <p className="mt-1 text-sm sm:text-base leading-relaxed text-black/70">
            {step.desc}
          </p>
        </div>
      </div>

      {/* Desktop connector: dot — line — dot */}
      <div className="hidden md:block">
        <div className="relative mt-6">
          <div className="flex items-center">
            <Dot />
            {index !== total - 1 && (
              <div className="mx-2 h-px flex-1 bg-black/10" />
            )}
          </div>
        </div>
      </div>

      {/* Mobile bottom dot to match rhythm */}
      <div className="md:hidden mt-5">
        <Dot />
      </div>
    </motion.div>
  );
};

export default TimelineStepCard;
