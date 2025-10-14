import React from "react";

const Dot = ({ className = "" }) => (
  <div className={`h-4 w-4 rounded-full bg-black ${className}`} />
);

export default Dot;
