import React from "react";

export const PlaceholderHeader = () => (
  <div className="aspect-[21/9] w-full rounded-2xl bg-[linear-gradient(135deg,#f6f6f6,#ececec)] ring-1 ring-black/10 flex items-center justify-center">
    <svg width="110" height="52" viewBox="0 0 110 52" aria-hidden className="text-black/20">
      <rect x="2" y="2" width="106" height="48" rx="8" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d="M10 40 L35 22 L55 32 L80 12 L100 40" fill="none" stroke="currentColor" strokeWidth="3" />
    </svg>
  </div>
);

export const PlaceholderThumb = () => (
  <div className="aspect-[16/9] w-full rounded-lg bg-[linear-gradient(135deg,#f6f6f6,#ececec)] ring-1 ring-black/10 flex items-center justify-center">
    <svg width="80" height="40" viewBox="0 0 80 40" aria-hidden className="text-black/20">
      <path d="M2 38 L22 20 L36 30 L56 10 L78 38" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="22" cy="20" r="3" fill="currentColor" />
      <circle cx="56" cy="10" r="3" fill="currentColor" />
    </svg>
  </div>
);