import React from "react";
import { motion } from "framer-motion";
import { item } from "./motion.variants";
import { Link } from "react-router-dom";

const GuidanceLane = () => (
  <motion.div
    variants={item}
    className="mt-8 md:mt-10 relative overflow-hidden rounded-2xl border border-black/8 p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5"
    style={{
      background: "linear-gradient(135deg, #fafaf8 0%, #f5f3f0 50%, #fafaf8 100%)",
    }}
  >
    {/* Decorative corner accent */}
    <div className="absolute top-0 right-0 w-32 h-32 pointer-events-none opacity-30">
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="80" cy="20" r="40" fill="url(#guidanceGrad)" />
        <defs>
          <radialGradient id="guidanceGrad">
            <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>

    <div className="relative z-10">
      <div className="flex items-center gap-2 mb-2">
        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </svg>
        </span>
        <span className="text-xs font-medium text-green-700 uppercase tracking-wider">Free consultation</span>
      </div>
      <h3 className="text-lg md:text-xl font-semibold text-black">Not sure where to start?</h3>
      <p className="text-sm md:text-base text-black/60 mt-1">
        Get a free 10‑minute assessment to find the right plan for you.
      </p>
    </div>

    <Link
      to="/book"
      className="relative z-10 inline-flex items-center justify-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white ring-1 ring-black/10 hover:bg-black/90 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap"
    >
      Book a Free Consultation
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </Link>
  </motion.div>
);

export default GuidanceLane;
