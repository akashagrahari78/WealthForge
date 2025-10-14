import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", when: "beforeChildren", staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const steps = [
  {
    key: "understand",
    title: "Understand",
    desc: "We start with your goals, risk profile, and timelines.",
    iconBg: "bg-yellow-100 text-yellow-700 ring-yellow-200",
  },
  {
    key: "plan",
    title: "Plan",
    desc: "We design a simple, tax-aware plan aligned to your needs.",
    iconBg: "bg-emerald-100 text-emerald-700 ring-emerald-200",
  },
  {
    key: "invest",
    title: "Invest",
    desc: "We implement with direct plans, low cost, and rebalancing.",
    iconBg: "bg-blue-100 text-blue-700 ring-blue-200",
  },
  {
    key: "review",
    title: "Review",
    desc: "Quarterly reviews and course-corrections as life changes.",
    iconBg: "bg-purple-100 text-purple-700 ring-purple-200",
  },
];

const Dot = ({ className = "" }) => (
  <div className={`h-4 w-4 rounded-full bg-black ${className}`} />
);

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
        {/* Header */}
        <motion.div variants={item} className="mb-8 md:mb-12">
          <p className="text-sm md:text-base uppercase tracking-[0.18em] text-black/70">Why choose us</p>
          <h2 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-semibold text-black">
            A simple, disciplined journey to wealth
          </h2>
          <p className="mt-3 text-base md:text-lg text-black/70 max-w-3xl">
            From understanding your goals to periodic reviews, the process is transparent and built around you.
          </p>
        </motion.div>

        {/* Timeline wrapper */}
        <motion.div variants={item} className="relative">
          {/* Horizontal line (desktop) */}
          <div className="hidden md:block absolute left-0 right-0 top-16 md:top-20 lg:top-24 h-[2px] bg-black/10" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
            {steps.map((s, idx) => (
              <motion.div
                key={s.key}
                variants={item}
                className="relative rounded-2xl border border-black/10 bg-white p-5 md:p-6 shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
              >
                {/* Connector line (mobile vertical) */}
                {idx !== steps.length - 1 && (
                  <div className="md:hidden absolute left-6 top-[72px] bottom-[-12px] w-[2px] bg-black/10" />
                )}

                {/* Step icon + title */}
                <div className="flex items-start gap-3">
                  <div
                    className={`inline-flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl ring-1 ${s.iconBg}`}
                  >
                    {/* Minimal step icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 md:h-6 md:w-6"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      {s.key === "understand" && (
                        <path d="M12 2a7 7 0 0 0-7 7c0 2.5 1.6 4.6 3.8 5.5L8 18l2.5-1.3c.5.1 1 .1 1.5.1a7 7 0 0 0 0-14Z" />
                      )}
                      {s.key === "plan" && (
                        <path d="M4 6h16v2H4V6Zm0 5h10v2H4v-2Zm0 5h7v2H4v-2Z" />
                      )}
                      {s.key === "invest" && (
                        <path d="M11 3l1 .01a8 8 0 1 1-1 0Zm1 4v5l4 2" />
                      )}
                      {s.key === "review" && (
                        <path d="M3 12a9 9 0 1 1 3 6.7L3 21l2.3-3A8.9 8.9 0 0 1 3 12Z" />
                      )}
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-black">{s.title}</h3>
                    <p className="mt-1 text-sm md:text-base text-black/70">{s.desc}</p>
                  </div>
                </div>

                {/* Horizontal connectors (desktop) */}
                <div className="hidden md:block">
                  <div className="relative mt-6">
                    {/* Dots row: show the dot and connector to next step */}
                    <div className="flex items-center">
                      <Dot />
                      {idx !== steps.length - 1 && (
                        <div className="mx-2 h-[2px] flex-1 bg-black/10" />
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom highlights (optional credibility bullets) */}
        <motion.ul
          variants={item}
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
