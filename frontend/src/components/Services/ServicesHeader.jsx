import React from "react";
import { motion } from "framer-motion";
import { item } from "./motion.variants";

const ServicesHeader = () => (
  <motion.header variants={item} className="mb-8 md:mb-10" >
    {/* Eyebrow label */}
    <div className="flex items-center gap-2">
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-yellow-100 text-yellow-700 ring-1 ring-yellow-200">
        {/* simple briefcase/analytics icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3.5 w-3.5"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M10 4h4a2 2 0 0 1 2 2v1h3a2 2 0 0 1 2 2v3h-3v2h3v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3h3v-2H3V9a2 2 0 0 1 2-2h3V6a2 2 0 0 1 2-2Zm0 3h4V6h-4v1Z" />
        </svg>
      </span>
     <p className="text-base md:text-lg lg:text-xl uppercase tracking-[0.22em]  text-black/70">
  Our services
</p>

    </div>

    {/* Headline */}
    <h2 className="mt-3 font-bricolage text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-black">
      Services tailored to your goals
    </h2>

    {/* Subtext */}
    <p className="mt-3 text-base md:text-lg font-quicksand text-black/70 max-w-2xl">
      Simple, transparent plans for wealth creation, protection, and tax efficiency.
    </p>

    {/* Accent bar */}
    <div className="mt-5 h-1.5 w-24 md:w-28 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-300 to-transparent" />
  </motion.header>
);

export default ServicesHeader;
