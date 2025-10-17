import React from "react";

export const useLang = () => {
  const [lang, setLang] = React.useState(
    () => localStorage.getItem("lang") || "en"
  );
  React.useEffect(() => localStorage.setItem("lang", lang), [lang]);
  return { lang, setLang };
};