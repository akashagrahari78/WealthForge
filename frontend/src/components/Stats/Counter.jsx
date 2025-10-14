import React from "react";
import { animate, useInView } from "framer-motion";

const Counter = ({
  from = 0,
  to = 100,
  duration = 1.2,
  prefix = "",
  suffix = "",
  className = "",
}) => {
  const inViewRef = React.useRef(null);
  const isInView = useInView(inViewRef, { once: true, margin: "-80px" });
  const [value, setValue] = React.useState(from);

  React.useEffect(() => {
    if (!isInView) return;
    const controls = animate(from, to, {
      duration,
      ease: "easeOut",
      onUpdate: (latest) => setValue(latest),
    });
    return () => controls.stop();
  }, [isInView, from, to, duration]);

  const formatted = new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 0,
  }).format(Math.round(value));

  return (
    <span ref={inViewRef} className={className}>
      {prefix}
      <span>{formatted}</span>
      {suffix}
    </span>
  );
};

export default Counter;
