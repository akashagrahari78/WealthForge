import React from "react";
import { motion } from "framer-motion";
import { item } from "./motion.variants";
import ContactInfo from "./ContactInfo";

const PHONE = "+91-6377662757";
const EMAIL = "enrichsalon@gmail.com";
const ADDRESS = "By Pass Road Lalganj, Raebareli";
const HOURS = "Mon–Sat 10:00 AM – 6:00 PM";

const FooterContact = () => (
  <motion.div variants={item} className="md:col-span-4">
    <h3 className="text-sm font-semibold tracking-wider text-gray-300 uppercase mb-4">Contact Info</h3>
    <div className="space-y-4">
      <ContactInfo
        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>}
        text={HOURS}
      />
      <ContactInfo
        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>}
        text={PHONE}
        href={`tel:${PHONE.replace(/[^+\d]/g, "")}`}
      />
      <ContactInfo
        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>}
        text={ADDRESS}
      />
      <ContactInfo
        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>}
        text={EMAIL}
        href={`mailto:${EMAIL}`}
      />
    </div>
  </motion.div>
);

export default FooterContact;
