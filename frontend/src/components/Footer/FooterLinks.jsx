// components/Footer/FooterLinks.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";   // <-- add
import { item } from "./motion.variants";

const FooterLinks = () => (
  <motion.div variants={item} className="md:col-span-2">
    <h3 className="text-sm font-semibold tracking-wider text-gray-300 uppercase mb-4">Useful Links</h3>
    <ul className="space-y-3">
      <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
      <li><Link to="/booking" className="text-gray-400 hover:text-white transition-colors">Book A Seat</Link></li>
      <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
      <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
    </ul>
  </motion.div>
);

export default FooterLinks;
