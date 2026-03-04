import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const AccordionItem = ({ id, isOpen, onToggle, q, a, inverted = false }) => {
  const textPrimary = inverted ? "text-white" : "text-black";
  const textMuted = inverted ? "text-white/70" : "text-black/70";
  const ringColor = inverted ? "ring-white/15" : "ring-black/10";
  const hoverBg = inverted ? "hover:bg-white/5" : "hover:bg-black/5";

  return (
    <div className={`rounded-2xl ${ringColor} ring-1 ${inverted ? "bg-white/0" : "bg-white"}`}>
      <button
        aria-expanded={isOpen}
        aria-controls={`faq-panel-${id}`}
        id={`faq-button-${id}`}
        onClick={onToggle}
        className={[
          "w-full flex items-start justify-between gap-4 p-4 md:p-5",
          "transition-colors", hoverBg,
        ].join(" ")}
      >
        <span className={`text-base md:text-lg font-semibold ${textPrimary}`}>{q}</span>

        <span
          className={[
            "inline-flex h-8 w-8 items-center justify-center rounded-full",
            inverted ? "bg-white/10" : "bg-black/5",
            ringColor,
          ].join(" ")}
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <path d="M6 9l6 6 6-6" stroke={inverted ? "#fff" : "#000"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </motion.svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            id={`faq-panel-${id}`}
            role="region"
            aria-labelledby={`faq-button-${id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className={`px-4 md:px-5 pb-4 md:pb-5 ${textMuted}`}>
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AccordionItem;
