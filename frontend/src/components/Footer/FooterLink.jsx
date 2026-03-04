import React from "react";

const FooterLink = ({ href = "#", text }) => (
  <li>
    <a href={href} className="text-gray-400 hover:text-white transition-colors duration-200 text-base">
      {text}
    </a>
  </li>
);

export default FooterLink;
