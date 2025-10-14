import React from "react";

const clampIndex = (i, len) => ((i % len) + len) % len;

export const useSlider = (length) => {
  const [index, setIndex] = React.useState(0);
  const [direction, setDirection] = React.useState(1);

  const paginate = (dir) => {
    setDirection(dir);
    setIndex((i) => clampIndex(i + dir, length));
  };

  // Keyboard navigation
  React.useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") paginate(1);
      if (e.key === "ArrowLeft") paginate(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [length]);

  // Touch swipe
  const startX = React.useRef(0);
  const dx = React.useRef(0);
  const onTouchStart = (e) => (startX.current = e.touches[0].clientX);
  const onTouchMove = (e) => (dx.current = e.touches[0].clientX - startX.current);
  const onTouchEnd = () => {
    const t = 48;
    if (dx.current < -t) paginate(1);
    if (dx.current > t) paginate(-1);
    dx.current = 0;
  };

  return { index, direction, paginate, setIndex, setDirection, onTouchStart, onTouchMove, onTouchEnd };
};
