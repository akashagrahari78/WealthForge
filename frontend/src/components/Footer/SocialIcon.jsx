import React from "react";

const SocialIcon = ({ href = "#", children, label }) => (
  <a
    href={href}
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer"
    className="h-9 w-9 rounded-full bg-white/10 hover:bg-white/15 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
  >
    {children}
  </a>
);

export default SocialIcon;
