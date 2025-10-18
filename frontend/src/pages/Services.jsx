import React from "react";
import { motion } from "framer-motion";

// Translation data (unchanged for hero)
const t = {
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

const useLang = () => {
  const [lang, setLang] = React.useState(() => localStorage.getItem("lang") || "en");
  React.useEffect(() => localStorage.setItem("lang", lang), [lang]);
  return { lang, setLang };
};

const Toggle = ({ lang, setLang }) => (
  <div className="fixed top-5 right-5 z-50">
    <div className="inline-flex rounded-full ring-1 ring-black/10 bg-white p-1 shadow">
      <button
        onClick={() => setLang("en")}
        className={`px-3 py-1.5 text-sm rounded-full ${lang === "en" ? "bg-black text-white" : "text-black/70 hover:text-black"}`}
      >
        EN
      </button>
      <button
        onClick={() => setLang("hi")}
        className={`px-3 py-1.5 text-sm rounded-full ${lang === "hi" ? "bg-black text-white" : "text-black/70 hover:text-black"}`}
      >
        हि
      </button>
    </div>
  </div>
);

const container = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.08, when: "beforeChildren" } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

// New groups data
const groups = [
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
  {
    bg: "white",
    heading: "Plan Today, Enjoy Tomorrow",
    services: [
      { title: "Financial Health Check-up", desc: "Assess cashflows, risks, and readiness for future goals." },
      { title: "Goal-based Planning", desc: "Map education, marriage, and retirement into actionable plans." },
      { title: "Portfolio Review & Rebalancing", desc: "Stay aligned with periodic, rules-based rebalancing." },
    ],
  },
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

// Service block with only an <img> placeholder (alt only) + text
const ServiceBlock = ({ s, index }) => (
  <motion.div
    variants={item}
    className={`flex flex-col md:flex-row ${index % 2 === 1 ? "md:flex-row-reverse" : ""} items-center gap-8 md:gap-12`}
  >
    <div className="flex-1 flex items-center justify-center">
      {/* Insert your vector image: add src later; alt provided only as requested */}
      <img
        alt={`${s.title} vector illustration`}
        className="w-[90%] max-w-xs md:max-w-sm"
      />
    </div>
    <div className="flex-1">
      <h4 className="text-lg md:text-xl font-semibold text-black">{s.title}</h4>
      <p className="mt-2 text-sm md:text-base text-black/70">{s.desc}</p>
    </div>
  </motion.div>
);

const GroupSection = ({ g }) => (
  <section className="relative z-10" style={{ backgroundColor: g.bg }}>
    <div className="mx-auto max-w-5xl w-[92%] py-14 md:py-20">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={container}>
        <motion.h3 variants={item} className="text-center text-2xl md:text-3xl font-semibold text-black">
          {g.heading}
        </motion.h3>

        <div className="mt-10 md:mt-14 space-y-10 md:space-y-14">
          {g.services.map((s, i) => (
            <ServiceBlock key={`${g.heading}-${s.title}`} s={s} index={i} />
          ))}
        </div>

        <motion.div variants={item} className="mt-12 md:mt-16 flex items-center justify-center">
          <span className="block h-px w-24 bg-gradient-to-r from-transparent via-black/20 to-transparent" />
        </motion.div>

        {g.cta && (
          <motion.div variants={item} className="mt-6 flex items-center justify-center">
            <a
              href={g.cta.href}
              className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium bg-black text-white hover:bg-black/90 ring-1 ring-black/10"
            >
              {g.cta.label}
            </a>
          </motion.div>
        )}
      </motion.div>
    </div>
  </section>
);

const Services = () => {
  const { lang, setLang } = useLang();

  return (
    <main className="relative bg-white min-h-screen">
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 
        bg-[linear-gradient(to_right,rgba(0,0,0,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.025)_1px,transparent_1px)]
        bg-[size:28px_28px] [mask-image:radial-gradient(80%_80%_at_50%_30%,#000_75%,transparent_100%)]"
      />
      <Toggle lang={lang} setLang={setLang} />

      {/* Hero Section (kept as-is) */}
      <section className="relative z-10 mx-auto max-w-7xl w-[92%] py-16 md:py-24 flex flex-col md:flex-row items-center gap-10">
        {/* Left: Text */}
        <motion.div initial="hidden" animate="show" variants={container} className="flex-1">
          <motion.div variants={item} className="mb-3">
            <span className="text-xs md:text-sm uppercase tracking-widest text-black/40 font-medium">
              {t[lang].heroTag}
            </span>
          </motion.div>
          <motion.h1 variants={item} className="text-2xl md:text-4xl font-semibold text-black leading-tight">
            {t[lang].heroTitle}
          </motion.h1>
          <motion.p variants={item} className="mt-4 text-base md:text-lg text-black/70 max-w-lg">
            {t[lang].heroSub}
          </motion.p>
          <motion.div variants={item} className="mt-8 flex gap-3 flex-wrap">
            <a
              href="#consult"
              className="rounded-full bg-black text-white px-5 py-2.5 text-sm font-medium ring-1 ring-black/10 hover:bg-black/90 transition"
            >
              {t[lang].book}
            </a>
            <a
              href="#services"
              className="rounded-full bg-white text-black px-5 py-2.5 text-sm font-medium ring-1 ring-black/10 hover:bg-black/5 transition"
            >
              {t[lang].explore}
            </a>
          </motion.div>
        </motion.div>
        {/* Right: Illustration */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex-1 flex items-center justify-center"
        >
          <img
            src="https://undraw.co/api/illustrations/undraw_investment_data_re_sh9x.svg"
            alt="Financial advisor illustration"
            className="w-[90%] max-w-xs md:max-w-md drop-shadow-xl animate-float"
            style={{ animation: "float 3s ease-in-out infinite" }}
          />
        </motion.div>
      </section>

      {/* New Services Groups */}
      <div id="services">
        {groups.map((g) => (
          <GroupSection key={g.heading} g={g} />
        ))}
      </div>

      {/* Optional anchor target for CTA */}
      <section id="consult" className="sr-only" aria-hidden="true" />
      {/* Floating animation keyframes */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0);}
          50% { transform: translateY(-12px);}
          100% { transform: translateY(0);}
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
      `}</style>
    </main>
  );
};

export default Services;
