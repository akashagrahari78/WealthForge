// src/pages/Blog.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { POSTS } from "../components/BlogData/blogPosts.js";
import Footer from "../components/Footer/Footer.jsx";
import Navbar from "../components/Hero/Navbar.jsx";

const useLang = () => {
  const [lang, setLang] = React.useState(() => localStorage.getItem("lang") || "en");
  React.useEffect(() => localStorage.setItem("lang", lang), [lang]);
  return { lang, setLang };
};

const t = {
  en: {
    headerTitle: "Insights & Articles",
    headerSub: "Simple, actionable insights to help you make smarter financial decisions.",
    featured: "Featured",
    readMore: "Read more",
    byAkash: "By Akash, Founder & Advisor",
    ctaTitle: "Want personal financial guidance?",
    ctaSub: "Book a free consultation call with Akash today.",
    bookCall: "Book a Call",
  },
  hi: {
    headerTitle: "अंतर्दृष्टि और लेख",
    headerSub: "बेहतर वित्तीय निर्णयों के लिए सरल और उपयोगी जानकारियाँ।",
    featured: "विशेष लेख",
    readMore: "आगे पढ़ें",
    byAkash: "लेखक: आकाश, संस्थापक व सलाहकार",
    ctaTitle: "व्यक्तिगत वित्तीय मार्गदर्शन चाहते हैं?",
    ctaSub: "आज ही आकाश से मुफ्त परामर्श कॉल बुक करें।",
    bookCall: "कॉल बुक करें",
  },
};

const container = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut", when: "beforeChildren", staggerChildren: 0.07 },
  },
};
const item = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.35 } } };

const PlaceholderThumb = () => (
  <div className="aspect-[16/9] w-full rounded-lg bg-[linear-gradient(135deg,#f6f6f6,#ececec)] ring-1 ring-black/10 flex items-center justify-center">
    <svg width="80" height="40" viewBox="0 0 80 40" aria-hidden className="text-black/20">
      <path d="M2 38 L22 20 L36 30 L56 10 L78 38" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="22" cy="20" r="3" fill="currentColor" />
      <circle cx="56" cy="10" r="3" fill="currentColor" />
    </svg>
  </div>
);

const Toggle = ({ lang, setLang }) => (
  <div className="inline-flex rounded-full ring-1 ring-black/10 bg-white p-1">
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
      HI
    </button>
  </div>
);

const Blog = () => {
  const { lang, setLang } = useLang();
  const featured = POSTS[0];
  const rest = POSTS.slice(1);

  return (
    <>
     <Navbar/>
    <main className="relative bg-white">
      {/* subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0
        bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)]
        bg-[size:28px_28px] [mask-image:radial-gradient(80%_80%_at_50%_35%,#000_65%,transparent_100%)]"
      />

      {/* Header */}
      <section className="relative mx-auto max-w-7xl w-[92%] md:w-[86%] pt-14 md:pt-20">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-black/60">Blog</p>
            <h1 className="mt-2 text-3xl md:text-4xl font-semibold text-black">{t[lang].headerTitle}</h1>
            <p className="mt-3 text-sm md:text-base text-black/70 max-w-2xl">{t[lang].headerSub}</p>
          </div>
          <Toggle lang={lang} setLang={setLang} />
        </div>
      </section>

      {/* Featured */}
      <section className="relative py-10 md:py-12">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-7xl w-[92%] md:w-[86%]"
        >
          <motion.div variants={item} className="mb-4 text-sm text-black/60">{t[lang].featured}</motion.div>
          <motion.article
            variants={item}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 rounded-2xl bg-white p-4 md:p-6 ring-1 ring-black/10 shadow-[0_8px_24px_rgba(0,0,0,0.05)]"
          >
            <div><PlaceholderThumb /></div>
            <div className="flex flex-col">
              <div className="text-xs uppercase tracking-wide text-black/60">
                {featured.category[lang]} • {new Date(featured.date).toLocaleDateString()}
              </div>
              <h2 className="mt-2 text-xl md:text-2xl font-semibold text-black">{featured.title[lang]}</h2>
              <p className="mt-2 text-black/70">{featured.summary[lang]}</p>
              <div className="mt-4">
                <Link
                  to={`/blog/${featured.slug}`}
                  className="inline-flex items-center gap-1 text-sm text-black hover:underline underline-offset-4"
                >
                  {t[lang].readMore} →
                </Link>
              </div>
              <div className="mt-auto pt-4 text-sm text-black/60">{t[lang].byAkash}</div>
            </div>
          </motion.article>
        </motion.div>
      </section>

      {/* Grid */}
      <section className="relative pb-16 md:pb-20">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-7xl w-[92%] md:w-[86%]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {rest.map((p) => (
              <motion.article
                key={p.slug}
                variants={item}
                className="rounded-2xl bg-white ring-1 ring-black/10 shadow-[0_8px_24px_rgba(0,0,0,0.05)] overflow-hidden"
              >
                <PlaceholderThumb />
                <div className="p-4 md:p-5">
                  <div className="text-[11px] uppercase tracking-wide text-black/60">
                    {p.category[lang]} • {new Date(p.date).toLocaleDateString()}
                  </div>
                  <h3 className="mt-1.5 text-base md:text-lg font-semibold text-black">{p.title[lang]}</h3>
                  <p className="mt-1.5 text-sm md:text-base text-black/70">{p.summary[lang]}</p>
                  <div className="mt-3">
                    <Link to={`/blog/${p.slug}`} className="text-sm text-black hover:underline underline-offset-4">
                      {t[lang].readMore} →
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Footer CTA */}
      <section className="relative mx-auto max-w-4xl w-[92%] md:w-[70%] pb-20">
        <div className="rounded-2xl bg-white/90 backdrop-blur-sm ring-1 ring-black/10 p-6 md:p-8 text-center">
          <h3 className="text-xl font-semibold text-black">{t[lang].ctaTitle}</h3>
          <p className="mt-2 text-black/70">{t[lang].ctaSub}</p>
          <div className="mt-5">
            <a
              href="https://cal.com/your-handle"
              className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium bg-black text-white hover:bg-black/90 ring-1 ring-black/10"
            >
              {t[lang].bookCall}
            </a>
          </div>
        </div>
      </section>
      <Footer/>
    </main>

    </>
  );
};

export default Blog;
