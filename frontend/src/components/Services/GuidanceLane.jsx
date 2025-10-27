import React from "react";
import { motion } from "framer-motion";
import { item } from "./motion.variants";
import { Link } from "react-router-dom";

const GuidanceLane = () => (
  <motion.div
    variants={item}
    className="mt-6 md:mt-8 rounded-2xl bg-gradient-to-r from-[#f7f7fb] to-white border border-black/10 p-5 md:p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
  >
    <div>
      <h3 className="text-base md:text-lg font-semibold text-black">Not sure where to start?</h3>
      <p className="text-sm md:text-base text-black/70">
        Get a free 10‑minute assessment to find the right plan for you.
      </p>
    </div>
    
<Link
  to="/book"
  className="inline-flex items-center justify-center rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white ring-1 ring-black/10 hover:bg-black/90"
>
  Book a Free Consultation
</Link>
  </motion.div>
);

export default GuidanceLane;
