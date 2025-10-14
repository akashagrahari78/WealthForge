import React from "react";

const ArrowButton = ({ side = "left", onClick, className = "" }) => (
  <button
    aria-label={side === "left" ? "Previous" : "Next"}
    onClick={onClick}
    className={[
      "absolute top-1/2 -translate-y-1/2 hidden sm:flex h-11 w-11 items-center justify-center",
      "rounded-full bg-white/70 backdrop-blur-md text-black ring-1 ring-black/10 hover:bg-white/90 transition",
      side === "left" ? "left-2 md:left-3" : "right-2 md:right-3",
      className,
    ].join(" ")}
  >
    {side === "left" ? (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M15.5 19 8.5 12l7-7 1.5 1.5L11.5 12l5.5 5.5Z" />
      </svg>
    ) : (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="m8.5 19 7-7-7-7-1.5 1.5L12.5 12l-5.5 5.5Z" />
      </svg>
    )}
  </button>
);

export default ArrowButton;
