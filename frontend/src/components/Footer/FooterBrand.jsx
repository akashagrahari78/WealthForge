import React from "react";
import { motion } from "framer-motion";
import { item } from "./motion.variants";
import SocialIcon from "./SocialIcon";

const FooterBrand = () => (
  <motion.div variants={item} className="md:col-span-4">
    <h2 className="text-3xl font-serif italic">Pragya Financial Services</h2>
    <p className="mt-4 text-sm text-white/70 max-w-sm">
      Professional care, trusted advice, and a seamless experience across our services.
    </p>

    <div className="mt-5 flex items-center gap-3">
      <SocialIcon label="Facebook">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13 10h3l-1 4h-2v8h-4v-8H7v-4h2V8a4 4 0 0 1 4-4h3v4h-2a1 1 0 0 0-1 1v1Z" />
        </svg>
      </SocialIcon>
      <SocialIcon label="Instagram">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 6a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm6.5-.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" />
        </svg>
      </SocialIcon>
      <SocialIcon label="Twitter/X">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 4h5l4 6 4-6h5l-7 9 7 9h-5l-4-6-4 6H3l7-9L3 4Z" />
        </svg>
      </SocialIcon>
      <SocialIcon label="GitHub">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2a10 10 0 0 0-3 19.5c.5.1.7-.2.7-.5v-2c-2.9.7-3.5-1.2-3.5-1.2-.4-1-1-1.3-1-1.3-.9-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 .9 1.6 2.5 1.2 3.1.9.1-.7.3-1.2.6-1.5-2.3-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.8-.1-.3-.4-1.3.1-2.6 0 0 .8-.3 2.8 1 .8-.2 1.6-.3 2.4-.3s1.6.1 2.4.3c2-1.3 2.8-1 2.8-1 .5 1.3.2 2.3.1 2.6.7.8 1 1.7 1 2.8 0 3.9-2.3 4.7-4.6 5 .3.2.6.8.6 1.6v2.3c0 .3.2.6.7.5A10 10 0 0 0 12 2Z" />
        </svg>
      </SocialIcon>
    </div>
  </motion.div>
);

export default FooterBrand;
