import React from "react";
import { motion } from "framer-motion";
import StatItem from "./StatItem";
import Counter from "./Counter";

const dividerVariants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.8, delay: 0.3, ease: "easeOut" },
  },
};

const StatsSection = () => {
  return (
    <section className="relative z-10 bg-white text-gray-800 py-16 mt-16 md:mt-24 lg:mt-32 overflow-hidden">
      {/* grid bg */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:22px_22px]" />

      {/* subtle top edge line */}
      <motion.div
        className="absolute top-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent origin-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={dividerVariants}
      />

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
        <StatItem subtitle="Assets Under Management">
          <Counter to={50} prefix="₹" suffix=" Cr+" duration={1.4} />
        </StatItem>

        <StatItem subtitle="Years of Experience" delay={0.1}>
          <Counter to={20} suffix="+" duration={1.2} />
        </StatItem>

        <StatItem subtitle="Satisfied Clients" delay={0.2}>
          <Counter to={950} suffix="+" duration={1.6} />
        </StatItem>

        <StatItem
          title="ARN Holder"
          subtitle="Certified Mutual Fund Distributor"
          delay={0.3}
        />

        <StatItem
          title="AMFI Registered"
          subtitle="Trusted Financial Advisor"
          delay={0.4}
        />
      </div>

      {/* subtle bottom edge line */}
      <motion.div
        className="absolute bottom-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent origin-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={dividerVariants}
      />
    </section>
  );
};

export default StatsSection;
