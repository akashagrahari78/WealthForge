import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote:
      "Pragya helped me prioritise goals and pick the right funds. Clear, simple, and confident.",
    name: "Arjun Mehta",
    role: "Salaried Professional",
    avatar: "/avatars/a1.jpg",
  },
  {
    quote:
      "Transparent advice and regular reviews. My portfolio finally feels organised and on track.",
    name: "Neha Sharma",
    role: "Entrepreneur",
    avatar: "/avatars/a2.jpg",
  },
  {
    quote:
      "The plan was tax‑aware and easy to implement. Support is responsive and proactive.",
    name: "Rahul Verma",
    role: "Software Engineer",
    avatar: "/avatars/a3.jpg",
  },
  {
    quote:
      "Clear process—understand, plan, invest, review. Exactly the discipline I needed.",
    name: "Priya Iyer",
    role: "Product Manager",
    avatar: "/avatars/a4.jpg",
  },
];

const variants = {
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

const clampIndex = (i, len) => ((i % len) + len) % len;

const TestimonialsSlider = () => {
  const [index, setIndex] = React.useState(0);
  const [direction, setDirection] = React.useState(1);
  const len = testimonials.length;

  const paginate = (dir) => {
    setDirection(dir);
    setIndex((i) => clampIndex(i + dir, len));
  };

  // Keyboard navigation
  React.useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") paginate(1);
      if (e.key === "ArrowLeft") paginate(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

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

  const t = testimonials[index];

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto w-[92%] md:w-[86%] max-w-6xl">
        {/* Heading */}
        <div className="mb-8 md:mb-8 text-center">
          <p className="md:text-xl uppercase tracking-[0.18em] text-black/70">Testimonials</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold font-bricolage text-black">What our clients say</h2>
        </div>

        {/* Clean slider surface (no border) */}
        <div
          className="relative rounded-[32px] bg-gradient-to-b from-white to-[#fafafa] p-6 md:p-12"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Soft vignette for depth */}
          <div className="pointer-events-none absolute inset-0 rounded-[32px] shadow-[0_16px_50px_rgba(0,0,0,0.06)]" />

          {/* Floating glass arrows */}
          <button
            aria-label="Previous"
            onClick={() => paginate(-1)}
            className="absolute left-2 md:left-3 top-1/2 -translate-y-1/2 hidden sm:flex h-11 w-11 items-center justify-center rounded-full bg-white/70 backdrop-blur-md text-black ring-1 ring-black/10 hover:bg-white/90 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.5 19 8.5 12l7-7 1.5 1.5L11.5 12l5.5 5.5Z" />
            </svg>
          </button>
          <button
            aria-label="Next"
            onClick={() => paginate(1)}
            className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 hidden sm:flex h-11 w-11 items-center justify-center rounded-full bg-white/70 backdrop-blur-md text-black ring-1 ring-black/10 hover:bg-white/90 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="m8.5 19 7-7-7-7-1.5 1.5L12.5 12l-5.5 5.5Z" />
            </svg>
          </button>

          {/* Slide */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="flex flex-col items-center text-center gap-6 md:gap-8"
              >
                <p className="text-xl md:text-[28px] leading-relaxed md:leading-[1.6] text-black max-w-4xl">
                  “{t.quote}”
                </p>

                <div className="flex items-center gap-3 md:gap-4">
                  {t.avatar ? (
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover"
                    />
                  ) : (
                    <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-black/10" />
                  )}
                  <div className="text-left">
                    <div className="text-sm md:text-base font-semibold text-black">{t.name}</div>
                    <div className="text-xs md:text-sm text-black/60">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="mt-8 flex items-center justify-center gap-2.5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > index ? 1 : -1);
                  setIndex(i);
                }}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2.5 w-2.5 rounded-full transition-all ${
                  i === index ? "bg-black" : "bg-black/20 hover:bg-black/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
