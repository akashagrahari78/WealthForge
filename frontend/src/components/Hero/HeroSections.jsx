import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import heroVector from "../../assets/heroVector.png";

/* ─── word-by-word stagger animation config ─── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/* spring config for silky-smooth parallax */
const smoothSpring = { stiffness: 80, damping: 30, mass: 0.5 };

const HeroSection = () => {
  const sectionRef = useRef(null);

  /* parallax: track scroll progress of this section */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  /* raw transforms → smoothed with spring physics */
  const rawY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const rawScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.97]);
  const rawOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.7]);

  const imageY = useSpring(rawY, smoothSpring);
  const imageScale = useSpring(rawScale, smoothSpring);
  const imageOpacity = useSpring(rawOpacity, smoothSpring);

  /* headline words */
  const headlineWords = ["Empowering", "Your", "Financial", "Growth"];

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[75vh] overflow-hidden"
    >
      {/* ── ambient floating orbs ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="hero-orb hero-orb--gold" />
        <div className="hero-orb hero-orb--amber" />
        <div className="hero-orb hero-orb--soft" />
      </div>

      {/* ── radial spotlight behind content ── */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(251,191,36,0.06)_0%,transparent_70%)]" />

      <motion.div
        className="relative z-10 flex flex-col items-center justify-start min-h-[75vh] text-center text-black px-6 pt-20 md:pt-24 lg:pt-32"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* ── animated trust badge ── */}
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          <span className="hero-badge__dot" />
          <span>Trusted by 950+ Clients</span>
        </motion.div>

        {/* ── staggered headline ── */}
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold font-bricolage mb-6 flex flex-wrap justify-center gap-x-[0.3em]"
          variants={containerVariants}
        >
          {headlineWords.map((word, i) => (
            <motion.span
              key={i}
              variants={wordVariants}
              className={
                word === "Financial" || word === "Growth"
                  ? "hero-gradient-text"
                  : ""
              }
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* ── subtitle with fade ── */}
        <motion.p
          className="text-lg md:text-xl font-quicksand max-w-2xl mb-10 text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
        >
          We provide expert financial guidance to help you plan, invest, and
          grow with confidence.
        </motion.p>

        {/* ── hero image with parallax + edge fade ── */}
        <motion.div
          className="w-full flex justify-center hero-image-fade"
          style={{ y: imageY, scale: imageScale, opacity: imageOpacity }}
        >
          <motion.img
            alt="financial growth illustration"
            src={heroVector}
            className="pointer-events-none select-none object-contain w-full max-w-[900px] md:max-w-[1000px] lg:max-w-[1120px] max-h-[36vh] md:max-h-[38vh] lg:max-h-[40vh]"
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.9, ease: "easeOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
