// src/pages/Blog.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import client from "../client";

// Hooks & Components
import { useLang } from "../hooks/useLang.js";
import Navbar from "../components/Hero/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import LanguageToggle from "../components/Blog/LanguageToggle.jsx";
import FeaturedPost from "../components/Blog/FeaturedPost.jsx";
import PostGrid from "../components/Blog/PostGrid.jsx";
import CtaSection from "../components/Blog/CtaSection.jsx";
import BlogSkeletonLoader from "../components/Blog/BlogSkeletonLoader.jsx";

const t = {
  en: {
    headerTitle: "Insights & Articles",
    headerSub: "Simple, actionable insights...",
    readMore: "Read more",
    byAkash: "By Akash, Founder & Advisor",
    ctaTitle: "Want personal financial guidance?",
    ctaSub: "Book a free consultation call...",
    bookCall: "Book a Call",
    featured: "Featured",
  },
  hi: {
    headerTitle: "अंतर्दृष्टि और लेख",
    headerSub: "बेहतर वित्तीय निर्णयों के लिए...",
    readMore: "आगे पढ़ें",
    byAkash: "लेखक: आकाश, संस्थापक व सलाहकार",
    ctaTitle: "व्यक्तिगत वित्तीय मार्गदर्शन चाहते हैं?",
    ctaSub: "आज ही आकाश से मुफ्त परामर्श...",
    bookCall: "कॉल बुक करें",
    featured: "विशेष लेख",
  },
};

const container = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, staggerChildren: 0.07 },
  },
};

const Blog = () => {
  const { lang, setLang } = useLang();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"] | order(coalesce(date, _createdAt) desc) [0..8]{
  title,
  summary,
  category,
  "slug": slug.current,
  "date": coalesce(date, _createdAt),
  mainImage{
    asset->{
      url,
      metadata{ lqip }
    }
  },
  "excerpt": pt::text(body)[0..180]
}
`
      )
      .then((data) => setPosts(data || []))
      .catch(console.error);
  }, []);

  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <>
      <Navbar />
      <main className="relative bg-white">
        {/* Header */}
        <section className="relative mx-auto max-w-7xl w-[92%] md:w-[86%] pt-20 md:pt-28 pb-10 border-b border-black/10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-black/50 font-bricolage font-medium">
                Blog
              </p>

              <h1 className="mt-3 text-4xl md:text-5xl font-semibold text-black font-bricolage tracking-tight">
                {t[lang].headerTitle}
              </h1>

              <p className="mt-4 text-base md:text-lg text-black/70 max-w-2xl font-quicksand leading-relaxed">
                {t[lang].headerSub}
              </p>
            </motion.div>

            <div className="self-end md:self-auto">
              <LanguageToggle lang={lang} setLang={setLang} />
            </div>
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

          {/* Skeleton loader while fetching */}
          {posts.length === 0 ? (
            <BlogSkeletonLoader />
          ) : (
            <>
              {/* Single featured post */}
              {featured && (
                <FeaturedPost post={featured} t={t[lang]} lang={lang} />
              )}

              {/* All posts grid */}
              <div className="mt-12">
                <PostGrid posts={rest} t={t[lang]} lang={lang} />
              </div>
            </>
          )}
        </motion.div>

        {/* CTA */}
        <CtaSection
          title={t[lang].ctaTitle}
          subtitle={t[lang].ctaSub}
          buttonText={t[lang].bookCall}
          lang={lang}
        />
      </main>
      <Footer />
    </>
  );
};

export default Blog;
