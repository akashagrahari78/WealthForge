import React from "react";
import { motion } from "framer-motion";
// import bgImage from "../../assets/heroBg.png"; // if you switch to inline bg

const HeroSection = () => {
  return (
    <section
      className="relative w-full min-h-[70vh] bg-cover bg-center bg-no-repeat"
      // style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Light overlay for readability */}
      <div className="absolute inset-0 bg-white/80" />

      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-[70vh] text-center text-black px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-bricolage mb-6">
          Empowering Your Financial Growth
        </h1>

        <p className="text-lg md:text-xl font-quicksand max-w-2xl mb-8">
          We provide expert financial guidance to help you plan, invest, and grow with confidence.
        </p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
