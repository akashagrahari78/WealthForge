// src/components/About/JourneyMilestones.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/* ----------------------------- Data ------------------------------ */
const MILESTONES = [
  { year: "2015", title: "Advisory founded", text: "Started with a handful of clients to deliver unbiased, goal‑based advice." },
  { year: "2017", title: "100 families onboarded", text: "Scaled carefully with documented processes for planning and reviews." },
  { year: "2020", title: "₹25 Cr AUM", text: "Strengthened research and rebalancing rules across market cycles." },
  { year: "2023", title: "₹50 Cr+ AUM", text: "Expanded client education and digital onboarding for better transparency." },
  { year: "2025", title: "1200+ families", text: "Focused on deeper relationships and measurable, long‑term outcomes." },
];

/* -------------------------- Animations --------------------------- */
const container = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut", when: "beforeChildren", staggerChildren: 0.07 },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

/* ------------------------- Small elements ------------------------ */
const Dot = () => (
  <span className="relative z-10 inline-flex h-3.5 w-3.5 rounded-full bg-black">
    <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-black/30" />
  </span>
);

/* ---------------------------- Card ------------------------------- */
const TimelineCard = ({ year, title, text }) => (
  <motion.div
    variants={item}
    whileHover={{ y: -2 }}
    transition={{ type: "spring", stiffness: 220, damping: 22 }}
    className="rounded-xl bg-white ring-1 ring-black/10 p-4 md:p-5 shadow-[0_8px_24px_rgba(0,0,0,0.05)]"
  >
    <p className="text-xs md:text-sm uppercase tracking-wide text-black/60">{year}</p>
    <h3 className="mt-1 text-base md:text-lg font-semibold text-black">{title}</h3>
    <p className="mt-1.5 text-sm md:text-base text-black/70 leading-relaxed">{text}</p>
  </motion.div>
);

/* --------------------------- Component --------------------------- */
const JourneyMilestones = () => {
  return (
    <section className="relative bg-white py-16 md:py-20">
      {/* Subtle large-cell grid with soft radial fade for minimalism */}
      <div
        className="
          pointer-events-none absolute inset-0
          bg-[linear-gradient(to_right,rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.035)_1px,transparent_1px)]
          bg-[size:28px_28px]
          [mask-image:radial-gradient(80%_80%_at_50%_35%,#000_65%,transparent_100%)]
        "
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="relative mx-auto max-w-7xl w-[92%] md:w-[86%]"
      >
        {/* Header */}
        <motion.div variants={item} className="mb-8 md:mb-12 text-center">
          <p className="text-sm md:text-base uppercase tracking-[0.18em] text-black/60">Journey</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-black">Milestones</h2>
          <p className="mt-3 text-sm md:text-base text-black/70 max-w-2xl mx-auto">
            A steady, disciplined path—prioritizing client outcomes over speed.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line on mobile, center rail on desktop */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-black/10 md:left-1/2 md:-translate-x-1/2" />

          <ol className="space-y-8 md:space-y-12">
            {MILESTONES.map((m, i) => {
              const isLeft = i % 2 === 0;
              return (
                <li key={m.year} className="relative">
                  {/* Dot at rail */}
                  <div className="absolute left-4 -translate-x-1/2 md:left-1/2" style={{ top: "0.45rem" }}>
                    <Dot />
                  </div>

                  {/* Alternates left/right on md+; single column on mobile */}
                  <div className="md:grid md:grid-cols-2 md:gap-10">
                    {isLeft ? (
                      <>
                        <div className="md:pr-8">
                          <TimelineCard year={m.year} title={m.title} text={m.text} />
                        </div>
                        <div className="hidden md:block" />
                      </>
                    ) : (
                      <>
                        <div className="hidden md:block" />
                        <div className="md:pl-8">
                          <TimelineCard year={m.year} title={m.title} text={m.text} />
                        </div>
                      </>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Link
            to="/about"
            className="inline-flex items-center justify-center rounded-full bg-black text-white px-5 py-2.5 text-sm font-medium ring-1 ring-black/10 hover:bg-black/90"
          >
            Explore our approach
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default JourneyMilestones;
