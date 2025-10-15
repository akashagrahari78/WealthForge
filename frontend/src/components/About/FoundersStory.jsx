import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import founderImg from "../../assets/headshot.jpg"; // replace with your image

const FoundersStory = () => {
  const reduce = useReducedMotion();

  const container = {
    hidden: { opacity: 0, y: reduce ? 0 : 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", when: "beforeChildren", staggerChildren: 0.08 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  };

  return (
    <section className="bg-white py-16 md:py-20">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mx-auto max-w-7xl w-[92%] md:w-[86%]"
      >
        {/* Heading */}
        <motion.div variants={item} className="mb-8 md:mb-12 text-center">
          <p className="text-sm md:text-base uppercase tracking-[0.18em] text-black/60">Founder’s story</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-black">Why this work matters</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left: Portrait */}
          <div className="lg:col-span-4">
            <motion.div
              variants={item}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className="flex items-center justify-center"
            >
              {/* Circle portrait; change to rounded-2xl for rectangle */}
              <div className="relative h-64 w-64 md:h-72 md:w-72 rounded-full overflow-hidden ring-1 ring-black/10 shadow-[0_16px_48px_rgba(0,0,0,0.06)] bg-white">
                <img src={founderImg} alt="Founder portrait" className="h-full w-full object-cover" />
                <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-white/50" />
              </div>
            </motion.div>
          </div>

          {/* Right: Narrative */}
          <div className="lg:col-span-8">
            <div className="space-y-4 md:space-y-5">
              <motion.p variants={item} className="text-black/80 text-base md:text-lg leading-relaxed">
                “After spending over a decade in the banking and finance sector, I realized most investors weren’t getting unbiased guidance. That’s when I decided to start my own advisory practice.” 
              </motion.p>

              <motion.p variants={item} className="text-black/80 text-base md:text-lg leading-relaxed">
                “I wanted to simplify investing for regular people — teachers, engineers, and small business owners — and make wealth‑building transparent and easy to understand.” 
              </motion.p>

              <motion.p variants={item} className="text-black/80 text-base md:text-lg leading-relaxed">
                “Starting with just a few clients, we have now grown to manage over ₹50 Cr in assets for 1200+ families across India.” 
              </motion.p>

              <motion.p variants={item} className="text-black/80 text-base md:text-lg leading-relaxed">
                “Our belief is simple — when clients grow, we grow. We focus on long‑term relationships, not transactions.” 
              </motion.p>
            </div>

            {/* Pull-quote box */}
            <motion.blockquote
              variants={item}
              className="mt-6 md:mt-8 rounded-2xl bg-white ring-1 ring-black/10 p-5 md:p-6 shadow-[0_10px_28px_rgba(0,0,0,0.04)]"
            >
              <p className="text-black text-base md:text-lg leading-relaxed">
                “Our success comes only when our clients succeed.”
              </p>
            </motion.blockquote>

            {/* Optional highlight strip */}
            <motion.ul variants={item} className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <li className="rounded-full bg-black/5 px-3 py-1.5 text-sm text-black/80">12+ years in finance</li>
              <li className="rounded-full bg-black/5 px-3 py-1.5 text-sm text-black/80">₹50 Cr+ AUM</li>
              <li className="rounded-full bg-black/5 px-3 py-1.5 text-sm text-black/80">1200+ families</li>
              <li className="rounded-full bg-black/5 px-3 py-1.5 text-sm text-black/80">Transparent & client‑first</li>
            </motion.ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FoundersStory;
