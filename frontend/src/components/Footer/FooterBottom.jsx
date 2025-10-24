// components/Footer/FooterBottom.jsx
import React from "react";
import { Link } from "react-router-dom";  // <-- add

const FooterBottom = () => (
  <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between">
    <p className="text-sm text-gray-400 text-center sm:text-left">
      © {new Date().getFullYear()} Pragya Financial Services. All Rights Reserved.
    </p>
    <div className="flex items-center space-x-5 mt-4 sm:mt-0 text-sm">
      <Link to="/terms" className="text-gray-400 hover:text-white transition">Terms</Link>
      <Link to="/privacy" className="text-gray-400 hover:text-white transition">Privacy</Link>
      {/* <Link to="/cookies" className="text-gray-400 hover:text-white transition">Cookies</Link> */}
    </div>
  </div>
);

export default FooterBottom;
