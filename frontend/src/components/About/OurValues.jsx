import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1, y: 0,
    transition: { duration: 0.45, ease: "easeOut", when: "beforeChildren", staggerChildren: 0.07 },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const ValueCard = ({ title, desc, icon, glow = "rgba(0,0,0,0.10)" }) => {
  const ref = React.useRef(null);
  const [pos, setPos] = React.useState({ x: -100, y: -100 });

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
  };

  const onLeave = () => setPos({ x: -100, y: -100 });

  return (
    <motion.div
      variants={item}
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 220, damping: 20 }}
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative overflow-hidden rounded-2xl bg-white ring-1 ring-black/10 shadow-[0_10px_28px_rgba(0,0,0,0.05)] p-5 md:p-6"
      style={{
        backgroundImage: `radial-gradient(260px circle at ${pos.x}px ${pos.y}px, ${glow}, transparent 60%)`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex items-start gap-3">
        <div className="h-10 w-10 rounded-full bg-black/5 flex items-center justify-center shrink-0">
          {icon}
        </div>
        <div>
          <h3 className="text-base md:text-lg font-semibold text-black">{title}</h3>
          <p className="mt-1 text-sm md:text-base text-black/70 leading-relaxed">{desc}</p>
        </div>
      </div>
    </motion.div>
  );
};

const OurValues = () => {
  return (
    <section className="bg-white py-16 md:py-20">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-7xl w-[92%] md:w-[86%]"
      >
        {/* Header */}
        <motion.div variants={item} className="mb-8 md:mb-12 text-center">
          <p className="text-sm md:text-base uppercase tracking-[0.18em] text-black/60">Our values</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-black">What guides our decisions</h2>
          <p className="mt-3 text-sm md:text-base text-black/70 max-w-2xl mx-auto">
            Principles that keep advice transparent, disciplined, and client‑first.
          </p>
        </motion.div>

        {/* Values grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          <ValueCard
            title="Integrity first"
            desc="Unbiased, transparent guidance with clear communication on fees, risks, and suitability."
            glow="rgba(16,185,129,0.14)" // emerald
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-700" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2 2 7l10 5 10-5-10-5Zm0 7L2 4v13l10 5 10-5V4l-10 5Z"/></svg>}
          />
          <ValueCard
            title="Client-first"
            desc="Plans tailored to life goals, reviewed regularly to keep you on track through cycles."
            glow="rgba(59,130,246,0.14)" // blue
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-4 0-8 2-8 5v3h16v-3c0-3-4-5-8-5Z"/></svg>}
          />
          <ValueCard
            title="Simplicity"
            desc="Clear steps, plain language, and structured processes that reduce noise and confusion."
            glow="rgba(234,179,8,0.18)" // amber
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600" viewBox="0 0 24 24" fill="currentColor"><path d="M3 12h18v2H3v-2Zm0-6h18v2H3V6Zm0 12h18v2H3v-2Z"/></svg>}
          />
          <ValueCard
            title="Discipline"
            desc="Asset allocation and rebalancing rules that prioritize risk management over prediction."
            glow="rgba(99,102,241,0.16)" // indigo
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h16v4H4V4Zm0 6h10v4H4v-4Zm0 6h6v4H4v-4Z"/></svg>}
          />
          <ValueCard
            title="Cost awareness"
            desc="Prefer low‑cost instruments; every basis point saved compounds to real outcomes."
            glow="rgba(20,184,166,0.16)" // teal
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-600" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1 4 5v6c0 5.25 3.4 10.74 8 12 4.6-1.26 8-6.75 8-12V5l-8-4Zm0 6a3 3 0 1 1-3 3 3 3 0 0 1 3-3Z"/></svg>}
          />
          <ValueCard
            title="Security & privacy"
            desc="Industry‑standard data protection and minimal data collection—only what’s essential."
            glow="rgba(244,63,94,0.14)" // rose
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-rose-600" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2 4 6v6c0 5.5 3.7 10.6 8 12 4.3-1.4 8-6.5 8-12V6l-8-4Zm-2 9V9a2 2 0 1 1 4 0v2h2v6H8v-6h2Z"/></svg>}
          />
        </div>

        {/* Optional CTA */}
        <motion.div variants={item} className="mt-10 text-center">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-black text-white px-5 py-2.5 text-sm font-medium ring-1 ring-black/10 hover:bg-black/90"
          >
            Talk to our team
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default OurValues;
