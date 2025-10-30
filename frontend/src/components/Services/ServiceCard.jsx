import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Badge from "./Badge";
import { item } from "./motion.variants";
import { Link } from "react-router-dom";

const colorMap = {
  yellow: "rgba(251, 191, 36, 0.15)",
  green: "rgba(16, 185, 129, 0.15)",
  blue: "rgba(59, 130, 246, 0.15)",
  purple: "rgba(139, 92, 246, 0.15)",
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

  const background = useTransform(
    [springX, springY],
    ([x, y]) =>
      `radial-gradient(circle at ${x}px ${y}px, ${colorMap[badgeTone]} 0%, rgba(255, 255, 255, 0) 60%)`
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
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      style={{ background: isHovered ? background : "white" }}
      className="relative overflow-hidden group rounded-2xl border border-black/10 bg-white p-5 md:p-6 shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.10)] transition-shadow"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-quicksand font-semibold text-black">{title}</h3>
        {badge && <Badge tone={badgeTone}>{badge}</Badge>}
      </div>

      <p className="mt-2 text-sm text-black/70">{outcome}</p>

      <ul className="mt-4 space-y-2 text-sm text-black/80">
        {highlights?.map((h, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-black/60" />
            <span>{h}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5">
        <Link
          to={`/services/${slug}`}
          className="inline-flex items-center justify-center rounded-xl bg-black px-4 py-2 text-sm font-medium text-white ring-1 ring-black/10 transition-colors hover:bg-black/90"
        >
          {ctaText}
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
