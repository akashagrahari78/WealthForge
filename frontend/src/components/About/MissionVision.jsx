import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut", when: "beforeChildren", staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const Card = ({ title, subtitle, desc, icon, accent }) => (
  <motion.div
    variants={item}
    whileHover={{ y: -3 }}
    transition={{ type: "spring", stiffness: 220, damping: 20 }}
    className="relative overflow-hidden rounded-2xl bg-white ring-1 ring-black/10 shadow-[0_12px_36px_rgba(0,0,0,0.06)]"
  >
    {/* corner accent */}
    <div className={`absolute -right-10 -top-10 h-24 w-24 rounded-full ${accent}`} />
    <div className="relative p-6 md:p-7">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-black/5 flex items-center justify-center">
          {icon}
        </div>
        <div>
          <h3 className="text-lg md:text-xl font-semibold font-quicksand text-black">{title}</h3>
          <p className="text-sm text-black/60">{subtitle}</p>
        </div>
      </div>
      <p className="mt-4 text-black/75 text-sm md:text-base leading-relaxed">
        {desc}
      </p>
    </div>
  </motion.div>
);

const MissionVision = () => {
  return (
    <section className="bg-white py-14 md:py-18 lg:py-22">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-7xl w-[92%] md:w-[86%]"
      >
        {/* Header */}
        <motion.div variants={item} className="mb-8 md:mb-12 text-center">
          <p className="text-sm md:text-base uppercase tracking-[0.18em] text-black/70">Our purpose</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold font-bricolage text-black">Mission & Vision</h2>
          <p className="mt-3 font-quicksand text-sm md:text-base text-black/70 max-w-2xl mx-auto">
            Clarity today, confidence tomorrow—grounded in disciplined planning and transparent advice.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <Card
            title="Our Mission"
            subtitle="Why we exist"
            desc="Empower individuals and families to make confident, long‑term financial decisions through simple, goal‑based planning, cost‑efficient solutions, and ongoing guidance."
            accent="bg-emerald-100"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-700" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2a7 7 0 0 0-7 7c0 2.5 1.6 4.6 3.8 5.5L8 18l2.5-1.3c.5.1 1 .1 1.5.1a7 7 0 0 0 0-14Z" />
              </svg>
            }
          />
          <Card
            title="Our Vision"
            subtitle="Where we’re going"
            desc="Be the most trusted partner for wealth creation—recognized for integrity, measurable outcomes, and a calm, disciplined approach across market cycles."
            accent="bg-blue-100"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 12a9 9 0 1 1 3 6.7L3 21l2.3-3A8.9 8.9 0 0 1 3 12Z" />
              </svg>
            }
          />
        </div>

        {/* Principles strip */}
        <motion.ul variants={item} className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <li className="rounded-xl bg-white ring-1 ring-black/10 p-4 text-sm text-black/75">
            Transparent fees and processes
          </li>
          <li className="rounded-xl bg-white ring-1 ring-black/10 p-4 text-sm text-black/75">
            Goal‑based, tax‑aware planning
          </li>
          <li className="rounded-xl bg-white ring-1 ring-black/10 p-4 text-sm text-black/75">
            Risk‑managed, low‑cost portfolios
          </li>
          <li className="rounded-xl bg-white ring-1 ring-black/10 p-4 text-sm text-black/75">
            Quarterly reviews and rebalancing
          </li>
        </motion.ul>
      </motion.div>
    </section>
  );
};

export default MissionVision;
