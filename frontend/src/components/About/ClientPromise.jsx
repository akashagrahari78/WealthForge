// components/about/ClientPromise.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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

const PromiseCard = ({ icon, title, text, glow = "rgba(0,0,0,0.10)" }) => {
  const ref = React.useRef(null);
  const [pos, setPos] = React.useState({ x: -100, y: -100 });

  const onMove = (e) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
  };

  return (
    <motion.div
      variants={item}
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 220, damping: 20 }}
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => setPos({ x: -100, y: -100 })}
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
          <p className="mt-1 text-sm md:text-base text-black/70 leading-relaxed">{text}</p>
        </div>
      </div>
    </motion.div>
  );
};

const ClientPromise = () => {
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
        <motion.div variants={item} className="text-center mb-8 md:mb-12">
          <p className="text-sm md:text-base uppercase tracking-[0.18em] text-black/60">Our client promise</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-black">Clarity, discipline, and care—always</h2>
          <p className="mt-3 text-sm md:text-base text-black/70 max-w-2xl mx-auto">
            Every recommendation is made in your best interest and explained in plain language, with ongoing guidance you can count on through all market cycles [memory:3].
          </p>
        </motion.div>

        {/* Pledge quote */}
        <motion.blockquote
          variants={item}
          className="relative rounded-2xl bg-white ring-1 ring-black/10 p-6 md:p-7 shadow-[0_10px_28px_rgba(0,0,0,0.04)] text-center"
        >
          <p className="text-xl md:text-2xl leading-snug text-black">
            “Your goals come first—our role is to provide transparent advice and disciplined execution, so you can invest with confidence.” 
          </p>
        </motion.blockquote>

        {/* Three promises */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          <PromiseCard
            glow="rgba(16,185,129,0.14)" // emerald
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-700" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2 4 6v6c0 5.25 3.4 10.74 8 12 4.6-1.26 8-6.75 8-12V6l-8-4Zm0 7a3 3 0 1 1-3 3 3 3 0 0 1 3-3Z"/></svg>}
            title="Unbiased & transparent"
            text="Clear rationale, costs disclosed upfront, and conflict‑free guidance that prioritizes your interest—not products."
          />
          <PromiseCard
            glow="rgba(59,130,246,0.14)" // blue
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700" viewBox="0 0 24 24" fill="currentColor"><path d="M3 12h18v2H3v-2Zm0-6h18v2H3V6Zm0 12h18v2H3v-2Z"/></svg>}
            title="Simple & goal‑based"
            text="Plans mapped to real goals, explained in plain language, with step‑by‑step execution and check‑ins."
          />
          <PromiseCard
            glow="rgba(99,102,241,0.16)" // indigo
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h16v4H4V4Zm0 6h10v4H4v-4Zm0 6h6v4H4v-4Z"/></svg>}
            title="Disciplined & consistent"
            text="Allocation rules and rebalancing keep risk in check, so decisions remain consistent across market cycles."
          />
        </div>

        {/* CTA */}
        <motion.div variants={item} className="mt-10 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-black text-white px-5 py-2.5 text-sm font-medium ring-1 ring-black/10 hover:bg-black/90"
          >
            Start with a 15‑min call
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ClientPromise;
