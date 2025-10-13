import React from "react";
import { motion } from "framer-motion";

const BookCallTipsCard = ({ variants }) => (
  <motion.div
    variants={variants}
    className="lg:col-span-2 rounded-2xl border border-black/[0.06] bg-white p-5 md:p-6"
  >
    <ul className="space-y-3 text-sm text-black/75">
      <li>• No fees for the discovery call.</li>
      <li>• Conversations are private and secure.</li>
      <li>• Bring goals like retirement, education, or tax planning.</li>
      <li>• Get a simple next-step plan in 15 minutes.</li>
    </ul>
  </motion.div>
);

export default BookCallTipsCard;
