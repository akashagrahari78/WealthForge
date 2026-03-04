import React from "react";
import { motion } from "framer-motion";

const ContactHeader = ({ variants }) => (
  <motion.div variants={variants} className="lg:col-span-5">
    <h1 className="text-2xl md:text-3xl font-semibold tracking-tight  font-bricolage">
      Get in Touch
    </h1>
    <p className="mt-2 text-sm md:text-base text-black/70 font-quicksand">
      We’d love to hear from you — reach out for any questions about investments, insurance, or mutual funds.
    </p>
  </motion.div>
);

export default ContactHeader;
