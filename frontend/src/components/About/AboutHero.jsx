import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImg from "../../assets/headshot.jpg";

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

const AboutHero = () => {
  return (
    <section className="bg-white">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-7xl w-[92%] md:w-[86%] py-12 md:py-16 lg:py-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: Text */}
          <div className="lg:col-span-6">
            <motion.p variants={item} className="text-sm md:text-base uppercase tracking-[0.18em] text-black/70">
              About Pragya Financial Services
            </motion.p>

            <motion.h1
              variants={item}
              className="mt-2 text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-black"
            >
              Building Financial Confidence, One Client at a Time
            </motion.h1>

            <motion.p variants={item} className="mt-4 text-base md:text-lg text-black/75">
              Founded by Mr. Akash, Pragya Financial Services helps individuals and families achieve their
              financial goals through mutual funds, insurance, and wealth management. Managing over ₹50 Cr in
              AUM, our focus is long‑term trust, clear guidance, and consistent growth.
            </motion.p>

            {/* Stats chips */}
            <motion.ul variants={item} className="mt-5 flex flex-wrap gap-3">
              <li className="rounded-full bg-black/5 px-3 py-1.5 text-sm text-black/80">💼 12+ Years Experience</li>
              <li className="rounded-full bg-black/5 px-3 py-1.5 text-sm text-black/80">📈 ₹50 Cr+ AUM</li>
              <li className="rounded-full bg-black/5 px-3 py-1.5 text-sm text-black/80">🧑‍💼 ARN Registered</li>
              <li className="rounded-full bg-black/5 px-3 py-1.5 text-sm text-black/80">👥 Dedicated Team</li>
            </motion.ul>

            {/* CTAs */}
            <motion.div variants={item} className="mt-6 flex flex-wrap gap-3">
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
          </div>

          {/* Right: Image with motion frame */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-xl">
              {/* Soft gradient backdrop */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-tr from-[#f7f7fb] via-white to-[#f7f7fb]"
              />

              {/* Floating accent card */}
              <motion.div
                initial={{ y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                className="absolute -left-6 -top-6 hidden md:flex items-center gap-2 rounded-xl bg-white/90 backdrop-blur-md px-3 py-2 ring-1 ring-black/10 shadow-sm"
              >
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span className="text-xs text-black/80">Trusted by 900+ clients</span>
              </motion.div>

              {/* Main image placeholder (replace src with your image) */}
          <motion.div
  whileHover={{ scale: 1.02 }}
  transition={{ type: "spring", stiffness: 220, damping: 18 }}
  className="flex items-center justify-center"
>
  <div className="relative h-56 w-56 md:h-72 md:w-72 lg:h-80 lg:w-80 rounded-full ring-1 ring-black/10 shadow-[0_16px_48px_rgba(0,0,0,0.06)] overflow-hidden bg-gradient-to-tr from-[#f7f7fb] to-white">
    <img
      src={heroImg}
      alt="Pragya Financial Services team at work"
      className="h-full w-full object-cover"
    />
    {/* subtle inner border */}
    <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-white/50" />
  </div>
</motion.div>


              {/* Bottom badge strip */}
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                className="mt-4 grid grid-cols-2 gap-3"
              >
                <div className="rounded-xl bg-white ring-1 ring-black/10 px-3 py-2 text-sm text-black/80">
                  SEBI/AMFI aligned
                </div>
                <div className="rounded-xl bg-white ring-1 ring-black/10 px-3 py-2 text-sm text-black/80">
                  Goal‑based planning
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutHero;
