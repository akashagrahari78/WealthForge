import React from "react";
import { motion } from "framer-motion";
import { item } from "./motion.variants";

const TrustStrip = () => (
  <motion.div variants={item} className="mt-10 md:mt-12 rounded-xl border border-black/10 bg-white p-4 md:p-5">
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
      <p className="text-sm text-black/80">
        ARN: XXXXXX • AMFI/SEBI compliant. Advisory aligned to your risk profile and goals.
      </p>
      <p className="text-xs text-black/60">
        Mutual fund investments are subject to market risks. Read all scheme related documents carefully.
      </p>
    </div>
  </motion.div>
);

export default TrustStrip;
