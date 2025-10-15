import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImg from "../../assets/headshot.jpg"; // replace with your actual portrait/team image

const container = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", when: "beforeChildren", staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const AboutHeroV2 = () => {
  return (
    <section className="relative bg-white">
      {/* Subtle grid background */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:22px_22px]" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="relative mx-auto max-w-7xl w-[92%] md:w-[86%] py-14 md:py-18 lg:py-22"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text column */}
          <div className="lg:col-span-7">
            <motionspan variants={item} className="inline-flex items-center gap-2 rounded-full bg-black/5 px-3 py-1 text-xs md:text-sm text-black/70">
              <span className="h-2 w-2 rounded-full bg-emerald-500" /> About Pragya Financial Services
            </motionspan>

            <motion.h1
              variants={item}
              className="mt-3 text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-black"
            >
              Building Financial Confidence, One Client at a Time
            </motion.h1>

            <motion.p variants={item} className="mt-10 text-base md:text-lg text-black/75 max-w-2xl">
              Founded by Mr. Akash, Pragya Financial Services helps individuals and families achieve their financial goals through mutual funds, insurance, and wealth management. Managing over ₹50 Cr in AUM, the focus is long‑term trust, clear guidance, and consistent growth.
            </motion.p>

            {/* Highlights */}
            <motion.ul variants={item} className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <li className="rounded-xl bg-white ring-1 ring-black/10 px-3 py-2 text-sm text-black/80">💼 12+ Years</li>
              <li className="rounded-xl bg-white ring-1 ring-black/10 px-3 py-2 text-sm text-black/80">📈 ₹50 Cr+ AUM</li>
              <li className="rounded-xl bg-white ring-1 ring-black/10 px-3 py-2 text-sm text-black/80">🧑‍💼 ARN Registered</li>
              <li className="rounded-xl bg-white ring-1 ring-black/10 px-3 py-2 text-sm text-black/80">👥 Dedicated Team</li>
            </motion.ul>

            {/* CTAs */}
            <motion.div variants={item} className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-black text-white px-5 py-2.5 text-sm font-medium ring-1 ring-black/10 hover:bg-black/90"
              >
                Book a Call
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white text-black px-5 py-2.5 text-sm font-medium ring-1 ring-black/10 hover:bg-black/5"
              >
                Contact Us
              </Link>
            </motion.div>

            {/* Credibility strip */}
            <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-4 text-xs md:text-sm text-black/60">
              <span className="rounded-full bg-black/5 px-3 py-1">SEBI/AMFI aligned</span>
              <span className="rounded-full bg-black/5 px-3 py-1">Direct plans & rebalancing</span>
              <span className="rounded-full bg-black/5 px-3 py-1">Goal‑based planning</span>
            </motion.div>
          </div>

          {/* Visual column */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto w-full max-w-md">
              {/* Halo gradient */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute inset-0 -z-10 rounded-[36px] bg-gradient-to-tr from-[#f7f7fb] via-white to-[#f7f7fb]"
              />

              {/* Circle portrait */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className="relative flex items-center justify-center"
              >
                <div className="relative h-64 w-64 md:h-72 md:w-72 lg:h-80 lg:w-80 rounded-full overflow-hidden ring-1 ring-black/10 shadow-[0_16px_48px_rgba(0,0,0,0.06)] bg-white">
                  <img src={heroImg} alt="Pragya Financial Services team" className="h-full w-full object-cover" />
                  <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-white/50" />
                </div>

                {/* Floating trust card (top-left) */}
                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
                  className="absolute -left-6 -top-6 hidden md:flex items-center gap-2 rounded-xl bg-white/90 backdrop-blur-md px-3 py-2 ring-1 ring-black/10 shadow-sm"
                >
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span className="text-xs text-black/80">900+ satisfied clients</span>
                </motion.div>

                {/* Floating AUM card (bottom-right) */}
                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                  className="absolute -right-6 -bottom-6 hidden md:block rounded-xl bg-white/90 backdrop-blur-md px-3 py-2 ring-1 ring-black/10 shadow-sm"
                >
                  <p className="text-xs text-black/80">AUM: ₹50 Cr+</p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutHeroV2;
