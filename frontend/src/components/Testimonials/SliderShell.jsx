import React from "react";
import { AnimatePresence } from "framer-motion";
import ArrowButton from "./ArrowButton";
import Slide from "./Slide";
import Dots from "./Dots";
import { useSlider } from "./useSlider";

const SliderShell = ({ items }) => {
  const { index, direction, paginate, setIndex, setDirection, onTouchStart, onTouchMove, onTouchEnd } =
    useSlider(items.length);

  const t = items[index];

  return (
    <div
      className="relative rounded-[32px] bg-gradient-to-b from-white to-[#fafafa] p-6 md:p-12"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className="pointer-events-none absolute inset-0 rounded-[32px] shadow-[0_16px_50px_rgba(0,0,0,0.06)]" />

      <ArrowButton side="left" onClick={() => paginate(-1)} />
      <ArrowButton side="right" onClick={() => paginate(1)} />

      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <Slide t={t} direction={direction} />
        </AnimatePresence>
      </div>

      <Dots
        count={items.length}
        active={index}
        onJump={(i) => {
          setDirection(i > index ? 1 : -1);
          setIndex(i);
        }}
      />
    </div>
  );
};

export default SliderShell;
