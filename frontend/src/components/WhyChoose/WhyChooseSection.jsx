import React from "react";
import { motion } from "framer-motion";
import { container, item } from "./motion.variants.js";
import TimelineHeader from "./TimelineHeader.jsx";
import TimelineGrid from "./TimelineGrid.jsx";
import { steps } from "./steps.data.jsx";

const WhyChooseSection = () => {
  const highlights = [
    "SEBI/AMFI compliant process",
    "Goal-based, tax-aware planning",
    "Direct plans and periodic rebalancing",
    "Quarterly reviews and support"
  ];

  return (
    <section className="bg-white py-16 md:py-24 relative overflow-hidden">
      {/* Subtle top/bottom grid fading */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="mx-auto w-[92%] md:w-[86%] max-w-6xl relative z-10"
      >
        <TimelineHeader />

        {/* Main interactive timeline */}
        <TimelineGrid steps={steps} />

        {/* Bottom highlights - Premium pills layout */}
        <motion.div
          variants={item}
          className="mt-16 pt-8 border-t border-black/10 flex flex-wrap justify-center gap-4 lg:justify-between"
        >
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="flex items-center gap-2.5 px-3 py-1.5"
            >
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-50 text-green-600 flex items-center justify-center ring-1 ring-green-100/50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <span className="text-sm md:text-base font-medium text-black/75">
                {highlight}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhyChooseSection;
