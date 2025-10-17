import React from "react";
import { motion } from "framer-motion";

// Translation data
const t = {
  en: {
    heroTag: "Personalized Financial Planning",
    heroTitle: "Empowering You to Grow and Protect Your Wealth.",
    heroSub: "From investments to insurance — get expert guidance to make smarter money decisions.",
    book: "Book a Free Consultation",
    explore: "Explore Services",
    overviewTitle: "Tailored Solutions for Every Financial Goal",
    overviewSub: "Explore how we help you plan, protect, and grow your wealth.",
    services: [
      {
        title: "Investment Planning",
        desc: "Grow your wealth with personalized investment strategies.",
        detail: "We analyze your goals and risk appetite to design a long-term plan built for success.",
        btn: "Know More",
      },
      {
        title: "Tax & Insurance Advisory",
        desc: "Secure your future with smarter tax and insurance choices.",
        detail: "We optimize your coverage and minimize liabilities with expert advice.",
        btn: "Learn More",
      },
      {
        title: "Portfolio Analysis",
        desc: "Understand and rebalance your portfolio easily.",
        detail: "Track performance and get insights to stay aligned with your goals.",
        btn: "Start Now",
      },
      {
        title: "Retirement & Goal Planning",
        desc: "Plan for financial independence and life goals.",
        detail: "Build a clear, actionable plan for retirement income and expenses.",
        btn: "Get Started",
      },
    ],
  },
  hi: {
    heroTag: "व्यक्तिगत वित्तीय योजना",
    heroTitle: "आपकी संपत्ति को बढ़ाने और सुरक्षित करने के लिए सशक्त बनाना।",
    heroSub: "निवेश से बीमा तक — समझदारी से पैसे के फैसले लेने के लिए विशेषज्ञ मार्गदर्शन प्राप्त करें।",
    book: "मुफ्त सलाह बुक करें",
    explore: "सेवाएँ देखें",
    overviewTitle: "हर वित्तीय लक्ष्य के लिए समाधान",
    overviewSub: "जानें कैसे हम आपकी संपत्ति की योजना, सुरक्षा और वृद्धि में मदद करते हैं।",
    services: [
      {
        title: "निवेश योजना",
        desc: "व्यक्तिगत निवेश रणनीतियों से संपत्ति बढ़ाएँ।",
        detail: "हम आपके लक्ष्यों और जोखिम क्षमता का विश्लेषण कर दीर्घकालिक योजना बनाते हैं।",
        btn: "और जानें",
      },
      {
        title: "कर और बीमा सलाह",
        desc: "स्मार्ट टैक्स और बीमा विकल्पों से भविष्य सुरक्षित करें।",
        detail: "हम विशेषज्ञ सलाह से आपकी सुरक्षा और देनदारियाँ अनुकूलित करते हैं।",
        btn: "और जानें",
      },
      {
        title: "पोर्टफोलियो विश्लेषण",
        desc: "पोर्टफोलियो को आसानी से समझें और संतुलित करें।",
        detail: "प्रदर्शन ट्रैक करें और लक्ष्यों के अनुसार इनसाइट्स प्राप्त करें।",
        btn: "शुरू करें",
      },
      {
        title: "रिटायरमेंट और लक्ष्य योजना",
        desc: "वित्तीय स्वतंत्रता और जीवन लक्ष्यों के लिए योजना बनाएं।",
        detail: "रिटायरमेंट आय और खर्च के लिए स्पष्ट, क्रियाशील योजना बनाएं।",
        btn: "शुरू करें",
      },
    ],
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
      >EN</button>
      <button
        onClick={() => setLang("hi")}
        className={`px-3 py-1.5 text-sm rounded-full ${lang === "hi" ? "bg-black text-white" : "text-black/70 hover:text-black"}`}
      >हि</button>
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

const Services = () => {
  const { lang, setLang } = useLang();
  const S = t[lang].services;

  return (
    <main className="relative bg-white min-h-screen">
      {/* Subtle grid background */}
      <div className="pointer-events-none absolute inset-0 
        bg-[linear-gradient(to_right,rgba(0,0,0,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.025)_1px,transparent_1px)]
        bg-[size:28px_28px] [mask-image:radial-gradient(80%_80%_at_50%_30%,#000_75%,transparent_100%)]" />
      <Toggle lang={lang} setLang={setLang} />

      {/* Hero Section */}
      <section className="relative z-10 mx-auto max-w-7xl w-[92%] py-16 md:py-24 flex flex-col md:flex-row items-center gap-10">
        {/* Left: Text */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={container}
          className="flex-1"
        >
          <motion.div variants={item} className="mb-3">
            <span className="text-xs md:text-sm uppercase tracking-widest text-black/40 font-medium">{t[lang].heroTag}</span>
          </motion.div>
          <motion.h1 variants={item} className="text-2xl md:text-4xl font-semibold text-black leading-tight">
            {t[lang].heroTitle}
          </motion.h1>
          <motion.p variants={item} className="mt-4 text-base md:text-lg text-black/70 max-w-lg">
            {t[lang].heroSub}
          </motion.p>
          <motion.div variants={item} className="mt-8 flex gap-3 flex-wrap">
            <a href="#consult" className="rounded-full bg-black text-white px-5 py-2.5 text-sm font-medium ring-1 ring-black/10 hover:bg-black/90 transition">
              {t[lang].book}
            </a>
            <a href="#overview" className="rounded-full bg-white text-black px-5 py-2.5 text-sm font-medium ring-1 ring-black/10 hover:bg-black/5 transition">
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
          {/* Replace with your SVG/Vector */}
          <img
            src="https://undraw.co/api/illustrations/undraw_investment_data_re_sh9x.svg"
            alt="Financial advisor illustration"
            className="w-[90%] max-w-xs md:max-w-md drop-shadow-xl animate-float"
            style={{ animation: "float 3s ease-in-out infinite" }}
          />
        </motion.div>
      </section>

      {/* Services Overview */}
      <section id="overview" className="relative z-10 mx-auto max-w-5xl w-[92%] py-10 md:py-16">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={container}>
          <motion.h2 variants={item} className="text-center text-2xl md:text-3xl font-semibold text-black">
            {t[lang].overviewTitle}
          </motion.h2>
          <motion.p variants={item} className="mt-3 text-center text-base md:text-lg text-black/70 max-w-xl mx-auto">
            {t[lang].overviewSub}
          </motion.p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7"
        >
          {S.map((s, i) => (
            <motion.div
              key={s.title}
              variants={item}
              className="rounded-2xl bg-white ring-1 ring-black/10 p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center group"
            >
              {/* Replace with your own icons */}
              <div className="mb-4 flex items-center justify-center h-12 w-12 rounded-full bg-gray-50 ring-1 ring-inset ring-black/5 group-hover:bg-black/5 transition">
                <span className="text-xl text-black/60">{["📈","🛡️","📊","🎯"][i]}</span>
              </div>
              <h3 className="text-lg font-semibold text-black">{s.title}</h3>
              <p className="mt-2 text-black/70 text-sm">{s.desc}</p>
              <a href={`#service${i+1}`} className="mt-4 text-sm text-black/70 hover:text-black underline underline-offset-4 transition">
                Learn More →
              </a>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Detailed Services Sections */}
      <section className="relative z-10 mx-auto max-w-5xl w-[92%] py-10 md:py-16">
        {S.map((s, i) => (
          <motion.div
            key={s.title}
            id={`service${i+1}`}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={container}
            className={`flex flex-col md:flex-row items-center gap-10 mb-16 ${i === 3 ? "bg-beige/40 rounded-2xl p-6 md:p-10" : ""}`}
          >
            {/* Alternating layout */}
            {(i % 2 === 0) ? (
              <>
                {/* Text Left */}
                <motion.div variants={item} className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold text-black">{s.title}</h3>
                  <p className="mt-3 text-black/70 text-base">{s.detail}</p>
                  <a href="#consult" className="mt-6 inline-block rounded-full bg-black text-white px-5 py-2.5 text-sm font-medium ring-1 ring-black/10 hover:bg-black/90 transition">
                    {s.btn}
                  </a>
                </motion.div>
                {/* Visual Right */}
                <motion.div variants={item} className="flex-1 flex items-center justify-center">
                  <img
                    src={`https://undraw.co/api/illustrations/${["undraw_growth_curve_re_t5s7","undraw_secure_data_re_4b9x","undraw_data_trends_re_2cdy","undraw_savings_re_eq4w"][i]}.svg`}
                    alt={s.title}
                    className="w-[90%] max-w-xs md:max-w-md drop-shadow-xl"
                  />
                </motion.div>
              </>
            ) : (
              <>
                {/* Visual Left */}
                <motion.div variants={item} className="flex-1 flex items-center justify-center">
                  <img
                    src={`https://undraw.co/api/illustrations/${["undraw_growth_curve_re_t5s7","undraw_secure_data_re_4b9x","undraw_data_trends_re_2cdy","undraw_savings_re_eq4w"][i]}.svg`}
                    alt={s.title}
                    className="w-[90%] max-w-xs md:max-w-md drop-shadow-xl"
                  />
                </motion.div>
                {/* Text Right */}
                <motion.div variants={item} className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold text-black">{s.title}</h3>
                  <p className="mt-3 text-black/70 text-base">{s.detail}</p>
                  <a href="#consult" className="mt-6 inline-block rounded-full bg-black text-white px-5 py-2.5 text-sm font-medium ring-1 ring-black/10 hover:bg-black/90 transition">
                    {s.btn}
                  </a>
                </motion.div>
              </>
            )}
          </motion.div>
        ))}
      </section>

      {/* Consultation CTA */}
      <section id="consult" className="relative z-10 mx-auto max-w-2xl w-[92%] py-10 md:py-16 text-center">
        <div className="rounded-2xl bg-white/90 backdrop-blur-sm ring-1 ring-black/10 p-6 md:p-8">
          <h3 className="text-xl font-semibold text-black">Ready to take the next step?</h3>
          <p className="mt-2 text-black/70">Book a free call and get personalized advice for your financial goals.</p>
          <div className="mt-5">
            <a
              href="https://cal.com/your-handle"
              className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium bg-black text-white hover:bg-black/90 ring-1 ring-black/10"
            >
              Book a Call
            </a>
          </div>
        </div>
      </section>
      {/* Floating animation keyframes */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0);}
          50% { transform: translateY(-12px);}
          100% { transform: translateY(0);}
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .bg-beige\\/40 { background-color: #f7f3ed66; }
      `}</style>
    </main>
  );
};

export default Services;
