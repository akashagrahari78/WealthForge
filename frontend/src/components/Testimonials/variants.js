export const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 64 : -64,
    opacity: 0,
    scale: 0.98,
  }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (direction) => ({
    x: direction > 0 ? -64 : 64,
    opacity: 0,
    scale: 0.98,
  }),
};
