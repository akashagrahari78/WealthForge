// src/components/GridBackground.jsx
import React from "react";

const GridBackground = ({ children }) => (
  <div className="relative w-full min-h-screen bg-white">
    {/* Grid background always behind */}
    <div
      className="pointer-events-none absolute inset-0 z-0
      bg-[linear-gradient(to_right,rgba(0,0,0,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)]
      bg-[size:28px_28px] [mask-image:radial-gradient(80%_80%_at_50%_30%,#000_75%,transparent_100%)]"
    />
    {/* Page content always above */}
    <div className="relative z-10">{children}</div>
  </div>
);

export default GridBackground;
