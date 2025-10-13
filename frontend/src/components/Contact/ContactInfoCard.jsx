import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiTwitter, FiInstagram } from "react-icons/fi";

const ContactInfoCard = ({ variants }) => (
  <motion.aside
    variants={variants}
    className="lg:col-span-2 rounded-2xl border border-black/[0.06] bg-white p-5 md:p-6"
  >
    <div className="space-y-5">
      <div>
        <h3 className="text-sm font-semibold">Office</h3>
        <p className="mt-1 text-sm text-black/70">
          Pragya Financial Services
          <br /> 2nd Floor, Business Park
          <br /> Mumbai, Maharashtra 400001
        </p>
      </div>

      <div>
        <h3 className="text-sm font-semibold">WhatsApp</h3>
        <a
          href="https://wa.me/919999999999"
          target="_blank"
          rel="noreferrer"
          className="mt-1 inline-block text-sm text-black hover:underline"
        >
          +91 99999 99999
        </a>
      </div>

      <div>
        <h3 className="text-sm font-semibold">Email</h3>
        <a
          href="mailto:hello@pragya-fin.com"
          className="mt-1 inline-block text-sm text-black hover:underline"
        >
          hello@pragya-fin.com
        </a>
      </div>

      <div className="pt-2">
        <div className="overflow-hidden rounded-xl border border-black/10">
          <iframe
            title="Office Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160993329!2d72.7411!3d19.0822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c630b2a2!2sMumbai!5e0!3m2!1sen!2sin!4v0000000000000"
            width="100%"
            height="180"
            loading="lazy"
            style={{ border: 0 }}
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <div className="flex items-center gap-4 pt-2 text-black/70">
        <FiMail className="h-5 w-5" />
        <FiTwitter className="h-5 w-5" />
        <FiInstagram className="h-5 w-5" />
      </div>
    </div>
  </motion.aside>
);

export default ContactInfoCard;
