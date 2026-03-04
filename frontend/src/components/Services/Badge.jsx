import React from "react";

const Badge = ({ children, tone = "yellow" }) => {
  const colors =
    tone === "green"
      ? "bg-emerald-50 text-emerald-700 ring-emerald-200"
      : tone === "blue"
      ? "bg-blue-50 text-blue-700 ring-blue-200"
      : tone === "purple"
      ? "bg-purple-50 text-purple-700 ring-purple-200"
      : "bg-yellow-50 text-yellow-700 ring-yellow-200";
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ring-1 ${colors}`}>
      {children}
    </span>
  );
};

export default Badge;
