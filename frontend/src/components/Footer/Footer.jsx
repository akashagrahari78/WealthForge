// components/Footer/Footer.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";  // <-- add
import { container, item } from "./motion.variants";
import FooterBrand from "./FooterBrand.jsx";
import FooterLinks from "./FooterLinks.jsx";
import FooterContact from "./FooterContact.jsx";
import FooterBottom from "./FooterBottom.jsx";

const Footer = () => {
  return (
    <div className="bg-white p-4 sm:p-6 md:p-8">
      <motion.footer
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="bg-black text-white rounded-3xl"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
          <motion.div variants={item} className="mb-10 md:mb-12 grid grid-cols-1 md:grid-cols-5 gap-4 items-center rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 md:p-6">
            <div className="md:col-span-3">
              <h3 className="text-xl md:text-2xl font-semibold">Ready to get started?</h3>
              <p className="mt-1 text-sm md:text-base text-white/70">Book a quick consultation or call now to discuss your goals.</p>
            </div>
            <div className="md:col-span-2 flex flex-wrap gap-3 md:justify-end">
              <Link
                to="/contact"
                className="inline-flex font-bricolage items-center justify-center rounded-full bg-white text-black px-5 py-2.5 text-sm font-medium ring-1 ring-white/20 hover:bg-white/90 transition"
              >
                Book a Call 
              </Link>
              {/* <a
                href="tel:+916377662757"
                className="inline-flex items-center justify-center rounded-full bg-yellow-400 text-black px-5 py-2.5 text-sm font-medium ring-1 ring-yellow-300/40 hover:bg-yellow-300 transition"
              >
                Call Now
              </a> */}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <FooterBrand />
            <div className="hidden md:block md:col-span-1" />
            <FooterLinks />   {/* stays same but will use Link internally */}
            <FooterContact />
          </div>

          <FooterBottom />   {/* updated to use Link */}
        </div>
      </motion.footer>
    </div>
  );
};

export default Footer;
