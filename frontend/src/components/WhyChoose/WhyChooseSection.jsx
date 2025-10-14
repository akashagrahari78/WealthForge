import React from "react";
import { motion } from "framer-motion";
import { container } from "./motion.variants.js";
import TimelineHeader from "./TimelineHeader.jsx";
import TimelineGrid from "./TimelineGrid.jsx";
import { steps } from "./steps.data.jsx";

const WhyChooseSection = () => {
  return (
    <section className="bg-white py-16 md:py-20">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto w-[92%] md:w-[86%] max-w-6xl"
      >
        <TimelineHeader />
        <TimelineGrid steps={steps} />

        {/* Bottom highlights */}
        <motion.ul
          variants={container}
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-black/75"
        >
          <li className="rounded-xl border border-black/10 bg-white p-4">SEBI/AMFI compliant process</li>
          <li className="rounded-xl border border-black/10 bg-white p-4">Goal‑based, tax‑aware planning</li>
          <li className="rounded-xl border border-black/10 bg-white p-4">Direct plans and periodic rebalancing</li>
          <li className="rounded-xl border border-black/10 bg-white p-4">Quarterly reviews and support</li>
        </motion.ul>
      </motion.div>
    </section>
  );
};

export default WhyChooseSection;
