import React from "react";

const LanguageToggle = ({ lang, setLang }) => (
  <div className="inline-flex rounded-full ring-1 ring-black/10 bg-white p-1">
    <button
      onClick={() => setLang("en")}
      className={`px-3 py-1.5 text-sm rounded-full ${
        lang === "en" ? "bg-black text-white" : "text-black/70 hover:text-black"
      }`}
    >
      EN
    </button>
    <button
      onClick={() => setLang("hi")}
      className={`px-3 py-1.5 text-sm rounded-full ${
        lang === "hi" ? "bg-black text-white" : "text-black/70 hover:text-black"
      }`}
    >
      HI
    </button>
  </div>
);

export default LanguageToggle;