import React from "react";
import { motion } from "framer-motion";
import { container } from "./motion.variants";
import ServicesHeader from "./ServicesHeader";
import ServicesGrid from "./ServicesGrid";
import TrustStrip from "./TrustStrip";
import GuidanceLane from "./GuidanceLane";
import { services } from "./services.data";

const ServicesSection = () => {
  return (
    <section id="services" className="bg-white py-16 md:py-20">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto w-[92%] md:w-[86%] max-w-6xl"
      >
        <ServicesHeader />
        <ServicesGrid data={services} />
        <TrustStrip />
        <GuidanceLane />
      </motion.div>
    </section>
  );
};

export default ServicesSection;
