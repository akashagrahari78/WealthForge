import React from "react";

const Dots = ({ count, active, onJump }) => (
  <div className="mt-8 flex items-center justify-center gap-2.5">
    {Array.from({ length: count }).map((_, i) => (
      <button
        key={i}
        onClick={() => onJump(i)}
        aria-label={`Go to slide ${i + 1}`}
        className={`h-2.5 w-2.5 rounded-full transition-all ${
          i === active ? "bg-black" : "bg-black/20 hover:bg-black/40"
        }`}
      />
    ))}
  </div>
);

export default Dots;
