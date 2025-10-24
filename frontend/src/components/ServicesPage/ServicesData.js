// src/components/Services/ServicesData.js

import services1 from "../../assets/services1.svg";
import services2 from '../../assets/services2.svg'
import services3 from '../../assets/services3.svg'
import services4 from '../../assets/services4.svg'
import services5 from '../../assets/services5.png'
import services6 from '../../assets/services6.png'
import services7 from '../../assets/services7.svg'
import services9 from '../../assets/services9.svg'

// import insurance from '../../assets/insurance.png'
// Translation data

export const t = {
  en: {
    heroTag: "Personalized Financial Planning",
    heroTitle: "Empowering You to Grow and Protect Your Wealth.",
    heroSub:
      "From investments to insurance — get expert guidance to make smarter money decisions.",
    book: "Book a Free Consultation",
    explore: "Explore Services",
  },
  hi: {
    heroTag: "व्यक्तिगत वित्तीय योजना",
    heroTitle: "आपकी संपत्ति को बढ़ाने और सुरक्षित करने के लिए सशक्त बनाना।",
    heroSub:
      "निवेश से बीमा तक — समझदारी से पैसे के फैसले लेने के लिए विशेषज्ञ मार्गदर्शन प्राप्त करें।",
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
      {
        title: "Investment Planning",
        desc: "Build a balanced, goal-aligned approach to long-term investing that adapts as your life evolves. Assess your financial goals, risk tolerance, and market opportunities to create a personalized strategy that grows steadily over time.",
        img: services1,
      },
      {
        title: "Mutual Fund Advisory",
        desc: "Choose and track funds tailored to your risk profile, investment horizon, and financial objectives. Receive insights on performance, diversification, and rebalancing to optimize your returns while minimizing risks.",
        img: services2,
      },
      {
        title: "SIP Management",
        desc: "Automate disciplined investing with optimized SIP schedules to stay consistent and grow steadily. Monitor contributions, adjust amounts based on goals, and track performance to ensure your wealth-building plan remains on track.",
        img: services3,
      },
      {
        title: "Bonds & Fixed Income",
        desc: "Stabilize your portfolio with predictable income instruments, balancing growth and safety. Explore bonds, debentures, and other fixed-income options that provide steady returns while minimizing volatility.",
        img: services4,
      },
    ],
  },
  {
    bg: "#f9fafb",
    heading: "Protect What Matters Most",
    services: [
      {
        title: "Life & Term Insurance",
        desc: "Safeguard your loved ones with reliable and affordable coverage designed for peace of mind. Plan for unforeseen events, secure financial stability, and ensure that your family's future is protected under all circumstances.",
        img : services5
      },
      {
        title: "Health & Medical Insurance",
        desc: "Prepare for medical uncertainties with smart protection tailored to your family's needs. Cover hospitalization, critical illnesses, and routine healthcare expenses so that unexpected medical costs do not derail your financial goals.",
        img: services6
      },
      {
        title: "Business / Group Insurance",
        desc: "Protect teams and operations with tailored policies that secure your business continuity. Ensure your employees and assets are covered against risks, from health emergencies to operational disruptions, maintaining smooth functioning of your enterprise.",
      },
    ],
  },
  {
    bg: "white",
    heading: "Smart Advisory for Every Need",
    services: [
      {
        title: "Tax & Wealth Management",
        desc: "Integrate taxes with investments efficiently to retain more gains and optimize returns. Plan for tax-saving opportunities, understand implications of investment decisions, and manage wealth holistically to maximize financial growth over time.",
        img : services7
      },
      {
        title: "NRI / Business Financial Planning",
        desc: "Navigate cross-border, regulatory, and growth decisions with clarity and confidence. Manage international investments, compliance requirements, and business expansion strategies while ensuring financial stability and long-term success.",
        img: services9
      },
    ],
    cta: { label: "Consult Now", href: "#consult" },
  },
];
