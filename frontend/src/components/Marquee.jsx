import React from "react";
import { motion } from "framer-motion";

export const Marquee = ({
  children,
  pauseOnHover = false,
  reverse = false,
  className = "",
}) => {
  return (
    <div className={`group flex overflow-hidden ${className}`}>
      <motion.div
        className="flex min-w-full shrink-0 items-center justify-around gap-4"
        animate={{ x: reverse ? ["0%", "100%"] : ["0%", "-100%"] }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        {...(pauseOnHover && {
          whileHover: { animationPlayState: "paused" },
        })}
      >
        {children}
      </motion.div>
      <motion.div
        className="flex min-w-full shrink-0 items-center justify-around gap-4"
        animate={{ x: reverse ? ["0%", "100%"] : ["0%", "-100%"] }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        {...(pauseOnHover && {
          whileHover: { animationPlayState: "paused" },
        })}
        aria-hidden
      >
        {children}
      </motion.div>
    </div>
  );
};
