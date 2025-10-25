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
          <br /> By Pass Road, Lalganj
          <br /> Raebareli, Uttar Pradesh

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
          href="mailto:pragyafinancialservices@gmail.com"
          className="mt-1 inline-block text-sm text-black hover:underline"
        >
          pragyafinancialservices@gmail.com
        </a>
      </div>

      <div className="pt-2">
        <div className="overflow-hidden rounded-xl border border-black/10">
          <iframe
            title="Office Map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7162.136613217847!2d80.9665538!3d26.1619048!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399b82c727a05c59%3A0x1e16e29ed70ae018!2sPragya%20Financial%20Services!5e0!3m2!1sen!2sin!4v1761381238530!5m2!1sen!2sin"
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
