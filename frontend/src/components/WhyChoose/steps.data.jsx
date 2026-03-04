// steps.jsx
import React from "react";

export const steps = [
  {
    key: "understand",
    title: "Understand",
    desc: "We start with your goals, risk profile, and timelines.",
    iconBg: "bg-yellow-100 text-yellow-700 ring-yellow-200",
  },
  {
    key: "plan",
    title: "Plan",
    desc: "We design a simple, tax-aware plan aligned to your needs.",
    iconBg: "bg-emerald-100 text-emerald-700 ring-emerald-200",
  },
  {
    key: "invest",
    title: "Invest",
    desc: "We implement with direct plans, low cost, and rebalancing.",
    iconBg: "bg-blue-100 text-blue-700 ring-blue-200",
  },
  {
    key: "review",
    title: "Review",
    desc: "Quarterly reviews and course-corrections as life changes.",
    iconBg: "bg-purple-100 text-purple-700 ring-purple-200",
  },
];

export const stepIcon = (k) => {
  switch (k) {
    case "understand":
      return <path d="M12 2a7 7 0 0 0-7 7c0 2.5 1.6 4.6 3.8 5.5L8 18l2.5-1.3c.5.1 1 .1 1.5.1a7 7 0 0 0 0-14Z" />;
    case "plan":
      return <path d="M4 6h16v2H4V6Zm0 5h10v2H4v-2Zm0 5h7v2H4v-2Z" />;
    case "invest":
      return <path d="M11 3l1 .01a8 8 0 1 1-1 0Zm1 4v5l4 2" />;
    default:
      return <path d="M3 12a9 9 0 1 1 3 6.7L3 21l2.3-3A8.9 8.9 0 0 1 3 12Z" />;
  }
};
