// src/components/Services/ServicesData.js

// Translation data
export const t = {
  en: {
    heroTag: "Personalized Financial Planning",
    heroTitle: "Empowering You to Grow and Protect Your Wealth.",
    heroSub: "From investments to insurance — get expert guidance to make smarter money decisions.",
    book: "Book a Free Consultation",
    explore: "Explore Services",
  },
  hi: {
    heroTag: "व्यक्तिगत वित्तीय योजना",
    heroTitle: "आपकी संपत्ति को बढ़ाने और सुरक्षित करने के लिए सशक्त बनाना।",
    heroSub: "निवेश से बीमा तक — समझदारी से पैसे के फैसले लेने के लिए विशेषज्ञ मार्गदर्शन प्राप्त करें।",
    book: "मुफ्त सलाह बुक करें",
    explore: "सेवाएँ देखें",
  },
};

// Services groups data
export const groups = [
  {
    bg: "white",
    heading: "Grow Your Wealth Strategically",
    services: [
      { title: "Investment Planning", desc: "Build a balanced, goal-aligned approach to long-term investing." },
      { title: "Mutual Fund Advisory", desc: "Choose and track funds tailored to risk, horizon, and objectives." },
      { title: "SIP Management", desc: "Automate disciplined investing with optimized SIP schedules." },
      { title: "Bonds & Fixed Income", desc: "Stabilize portfolios with predictable income instruments." },
    ],
  },
  {
    bg: "#f9fafb",
    heading: "Protect What Matters Most",
    services: [
      { title: "Life & Term Insurance", desc: "Safeguard dependents with reliable, affordable coverage." },
      { title: "Health & Medical Insurance", desc: "Prepare for medical uncertainties with smart protection." },
      { title: "Business / Group Insurance", desc: "Protect teams and operations with tailored policies." },
    ],
  },
  // ...other groups...
  {
    bg: "white",
    heading: "Smart Advisory for Every Need",
    services: [
      { title: "Tax & Wealth Management", desc: "Integrate taxes with investments to retain more gains." },
      { title: "NRI / Business Financial Planning", desc: "Navigate cross-border, regulatory, and growth decisions." },
    ],
    cta: { label: "Consult Now", href: "#consult" },
  },
];