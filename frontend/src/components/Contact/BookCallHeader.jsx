import React from "react";
import { motion } from "framer-motion";

const BookCallHeader = ({ variants }) => (
  <motion.div variants={variants} className="lg:col-span-5">
    <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
      Book a Free Consultation Call
    </h2>
    <p className="mt-2 text-sm md:text-base text-black/70">
      Schedule a 15-minute call to discuss your investment goals.
    </p>
  </motion.div>
);

export default BookCallHeader;
