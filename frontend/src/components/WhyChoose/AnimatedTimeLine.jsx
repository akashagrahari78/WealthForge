import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  { key: "understand", title: "Understand", desc: "Goals, risk profile, timelines." },
  { key: "plan",       title: "Plan",       desc: "Simple, tax-aware roadmap." },
  { key: "invest",     title: "Invest",     desc: "Direct plans, low cost, rebalance." },
  { key: "review",     title: "Review",     desc: "Quarterly check-ins and updates." },
];

const stepIcon = (k) => {
  switch (k) {
    case "understand":
      return (
        <path d="M12 2a7 7 0 1 0 0 14c.5 0 1 0 1.5-.1L16 17l-.7-2.5A6.9 6.9 0 0 0 12 2Z" />
      );
    case "plan":
      return <path d="M4 6h16v2H4V6Zm0 5h10v2H4v-2Zm0 5h7v2H4v-2Z" />;
    case "invest":
      return <path d="M11 3l1 .01a8 8 0 1 1-1 0Zm1 4v5l4 2" />;
    default:
      return <path d="M3 12a9 9 0 1 1 3 6.7L3 21l2.3-3A8.9 8.9 0 0 1 3 12Z" />;
  }
};

const AnimatedTimeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-white py-14">
      <div className="mx-auto w-[92%] md:w-[86%] max-w-6xl">
        <div className="mb-8 md:mb-12">
          <p className="text-sm md:text-base uppercase tracking-[0.18em] text-gray-500">
            Why choose us
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900">
            How we work, at a glance
          </h2>
          <p className="mt-3 text-base md:text-lg text-gray-600 max-w-3xl">
            A guided journey that fills as you go—clear, disciplined, and built
            around your goals.
          </p>
        </div>

        {/* --- Horizontal timeline (desktop) --- */}
        <div className="hidden md:block">
          <div ref={ref} className="relative">
            {/* Base line */}
            <div className="absolute left-0 right-0 top-10 lg:top-12 h-[3px] bg-gray-200 rounded-full" />
            {/* Animated progress line */}
            <motion.div
              className="absolute left-0 top-10 lg:top-12 h-[3px] rounded-full bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200"
              initial={{ width: 0 }}
              animate={{ width: isInView ? "100%" : 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />

            <div className="grid grid-cols-4 gap-8">
              {steps.map((s, i) => {
                const delay = 0.2 + i * 0.15;
                return (
                  <motion.div
                    key={s.key}
                    initial={{ opacity: 0, y: 14, rotate: -1 }}
                    animate={{
                      opacity: isInView ? 1 : 0,
                      y: isInView ? 0 : 14,
                      rotate: isInView ? 0 : -1,
                    }}
                    transition={{ duration: 0.6, ease: "easeOut", delay }}
                    className="relative pt-16"
                  >
                    {/* Step dot */}
                    <motion.div
                      initial={{ scale: 0.8 }}
                      animate={{ scale: isInView ? 1 : 0.8 }}
                      transition={{ type: "spring", stiffness: 220, damping: 16, delay }}
                      className="absolute left-1/2 -translate-x-1/2 top-8 lg:top-10 h-5 w-5 rounded-full bg-gray-800 shadow ring-4 ring-yellow-200"
                    />
                    {/* Icon bubble */}
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white ring-1 ring-gray-900/10 shadow">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-800"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        {stepIcon(s.key)}
                      </svg>
                    </div>
                    <h3 className="mt-3 text-lg font-semibold text-gray-900 text-center">
                      {s.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600 text-center">
                      {s.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* --- Vertical timeline (mobile) --- */}
        <div className="md:hidden">
          <div ref={ref} className="relative pl-8">
            {/* Vertical progress line */}
            <div className="absolute left-3 top-0 bottom-0 w-[3px] bg-gray-200 rounded-full" />
            <motion.div
              className="absolute left-3 top-0 w-[3px] rounded-full bg-gradient-to-b from-yellow-400 via-yellow-300 to-yellow-200"
              initial={{ height: 0 }}
              animate={{ height: isInView ? "100%" : 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
            <div className="space-y-6">
              {steps.map((s, i) => {
                const delay = 0.2 + i * 0.15;
                return (
                  <motion.div
                    key={s.key}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -10 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay }}
                    className="relative"
                  >
                    {/* Node dot */}
                    <motion.div
                      initial={{ scale: 0.8 }}
                      animate={{ scale: isInView ? 1 : 0.8 }}
                      transition={{ type: "spring", stiffness: 220, damping: 16, delay }}
                      className="absolute left-0 top-2 h-5 w-5 -translate-x-[9px] rounded-full bg-gray-800 ring-4 ring-yellow-200"
                    />
                    <div className="ml-4 rounded-xl border border-gray-900/10 bg-white p-4 shadow">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white ring-1 ring-gray-900/10">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-gray-800"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            {stepIcon(s.key)}
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-base font-semibold text-gray-900">
                            {s.title}
                          </h3>
                          <p className="text-sm text-gray-600">{s.desc}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedTimeline;