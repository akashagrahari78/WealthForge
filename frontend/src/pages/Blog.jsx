import React from "react";
import { motion } from "framer-motion";
import { POSTS } from "../components/BlogData/blogPosts.js";

// Hooks & Components
import { useLang } from "../hooks/useLang.js";
import Navbar from "../components/Hero/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import LanguageToggle from "../components/Blog/LanguageToggle.jsx";
import FeaturedPost from "../components/Blog/FeaturedPost.jsx";
import PostGrid from "../components/Blog/PostGrid.jsx";
import CtaSection from "../components/Blog/CtaSection.jsx";

// Translation object
const t = {
  en: { headerTitle: "Insights & Articles", headerSub: "Simple, actionable insights...", readMore: "Read more", byAkash: "By Akash, Founder & Advisor", ctaTitle: "Want personal financial guidance?", ctaSub: "Book a free consultation call...", bookCall: "Book a Call", featured: "Featured" },
  hi: { headerTitle: "अंतर्दृष्टि और लेख", headerSub: "बेहतर वित्तीय निर्णयों के लिए...", readMore: "आगे पढ़ें", byAkash: "लेखक: आकाश, संस्थापक व सलाहकार", ctaTitle: "व्यक्तिगत वित्तीय मार्गदर्शन चाहते हैं?", ctaSub: "आज ही आकाश से मुफ्त परामर्श...", bookCall: "कॉल बुक करें", featured: "विशेष लेख" },
};

const container = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, staggerChildren: 0.07 } },
};

const Blog = () => {
  const { lang, setLang } = useLang();
  const featured = POSTS[0];
  const rest = POSTS.slice(1);

  return (
    <>
      <Navbar />
      <main className="relative bg-white">
        {/* Header */}
        <section className="relative mx-auto max-w-7xl w-[92%] md:w-[86%] pt-14 md:pt-20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-black/60">Blog</p>
              <h1 className="mt-2 text-3xl md:text-4xl font-semibold text-black">{t[lang].headerTitle}</h1>
              <p className="mt-3 text-sm md:text-base text-black/70 max-w-2xl">{t[lang].headerSub}</p>
            </div>
            <LanguageToggle lang={lang} setLang={setLang} />
          </div>
        </section>

        {/* Featured & Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-7xl w-[92%] md:w-[86%] py-10 md:py-12"
        >
          <div className="mb-4 text-sm text-black/60">{t[lang].featured}</div>
          {/* for the single featured post */}
          <FeaturedPost post={featured} t={t[lang]} lang={lang} />

          {/* --------- for all the posts in the grid  format--------- */}
          <div className="mt-12">
            <PostGrid posts={rest} t={t[lang]} lang={lang} />
          </div>
        </motion.div>
        
        {/* ------------- cta section--------------------- */}
        <CtaSection title={t[lang].ctaTitle} subtitle={t[lang].ctaSub} buttonText={t[lang].bookCall} lang={lang} />
      </main>
      <Footer />
    </>
  );
};

export default Blog;