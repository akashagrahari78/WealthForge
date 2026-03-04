import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Badge from "./Badge";
import { item } from "./motion.variants";
import { Link } from "react-router-dom";

const colorMap = {
  yellow: { bg: "rgba(251, 191, 36, 0.15)", border: "rgba(251, 191, 36, 0.3)", icon: "#d97706" },
  green: { bg: "rgba(16, 185, 129, 0.15)", border: "rgba(16, 185, 129, 0.3)", icon: "#059669" },
  blue: { bg: "rgba(59, 130, 246, 0.15)", border: "rgba(59, 130, 246, 0.3)", icon: "#2563eb" },
  purple: { bg: "rgba(139, 92, 246, 0.15)", border: "rgba(139, 92, 246, 0.3)", icon: "#7c3aed" },
};

const iconPaths = {
  "mutual-funds": "M3 3v18h18M7 16l4-4 3 3 5-5",
  "insurance": "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  "bonds-fixed-income": "M19 5h-7L8 9l4 1-3 6 5-3 1 4 4-8-4-1 4-3z",
  "pms": "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
  "aif": "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
  "unlisted-shares": "M12 2v6m0 4v6m-4-9h8M5 12a7 7 0 1114 0 7 7 0 01-14 0z",
};

const ServiceCard = ({
  title,
  outcome,
  highlights,
  badge,
  badgeTone = "yellow",
  ctaText = "Book a call",
  slug,
}) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 300, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 20 });

  const toneColors = colorMap[badgeTone] || colorMap.yellow;

  const background = useTransform(
    [springX, springY],
    ([x, y]) =>
      `radial-gradient(circle at ${x}px ${y}px, ${toneColors.bg} 0%, rgba(255, 255, 255, 0) 60%)`
  );

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const { left, top } = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      variants={item}
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      style={{ background: isHovered ? background : "white" }}
      className="service-card relative overflow-hidden group rounded-2xl border border-black/10 bg-white p-5 md:p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-300"
    >
      {/* Icon + Title Row */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          {/* Service icon */}
          <div
            className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl transition-transform duration-300 group-hover:scale-110"
            style={{ background: toneColors.bg, border: `1px solid ${toneColors.border}` }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke={toneColors.icon}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d={iconPaths[slug] || iconPaths["mutual-funds"]} />
            </svg>
          </div>
          <h3 className="text-lg font-quicksand font-semibold text-black leading-snug">{title}</h3>
        </div>
        {badge && <Badge tone={badgeTone}>{badge}</Badge>}
      </div>

      <p className="mt-3 text-sm text-black/65 leading-relaxed">{outcome}</p>

      <ul className="mt-4 space-y-2.5 text-sm text-black/75">
        {highlights?.map((h, i) => (
          <motion.li
            key={i}
            className="flex items-start gap-2.5"
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.15 + i * 0.06 }}
            viewport={{ once: true }}
          >
            <span
              className="mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0"
              style={{ background: toneColors.icon }}
            />
            <span>{h}</span>
          </motion.li>
        ))}
      </ul>

      <div className="mt-6">
        <Link
          to={`/services/${slug}`}
          className="service-cta-btn inline-flex items-center gap-2 justify-center rounded-xl bg-black px-5 py-2.5 text-sm font-medium text-white ring-1 ring-black/10 transition-all duration-300 hover:bg-black/90 hover:gap-3"
        >
          {ctaText}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
