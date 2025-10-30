// src/pages/BlogPost.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import client from "../client";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import { motion } from "framer-motion";

// Hooks & Components
import { useLang } from "../hooks/useLang";
import LanguageToggle from "../components/Blog/LanguageToggle";
import ShareButtons from "../components/Blog/ShareButtons";
import RelatedPosts from "../components/Blog/RelatedPosts";
import CtaSection from "../components/Blog/CtaSection";
import { PlaceholderHeader } from "../components/Blog/Placeholder";

const builder = imageUrlBuilder(client);
const urlFor = (source) => builder.image(source);

const t = {
  en: {
    byAkash: "By Akash, Founder & Advisor",
    share: "Share",
    related: "Related Posts",
    back: "Back to Blog",
    ctaTitle: "Want personal financial guidance?",
    ctaSub: "Book a free consultation call...",
    bookCall: "Book a Call",
  },
  hi: {
    byAkash: "लेखक: आकाश, संस्थापक व सलाहकार",
    share: "साझा करें",
    related: "संबंधित लेख",
    back: "ब्लॉग पर वापस",
    ctaTitle: "व्यक्तिगत वित्तीय मार्गदर्शन चाहते हैं?",
    ctaSub: "आज ही आकाश से मुफ्त परामर्श...",
    bookCall: "कॉल बुक करें",
  },
};

const BlogPost = () => {
  const { slug } = useParams();
  const { lang, setLang } = useLang();
  const [post, setPost] = useState(null);
  const [related, setRelated] = useState([]);
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  // ✅ Fetch post and related posts
  useEffect(() => {
    client
      .fetch(
        `*[_type == "post" && slug.current == $slug][0]{
          title,
          excerpt,
          author,
          category,
          "slug": slug.current,
          publishedAt,
          mainImage,
          body
        }`,
        { slug }
      )
      .then((data) => setPost(data || null))
      .catch(console.error);

    client
      .fetch(
        `*[_type == "post" && slug.current != $slug] | order(publishedAt desc) [0..2]{
          title,
          category,
          "slug": slug.current,
          publishedAt,
          mainImage
        }`,
        { slug }
      )
      .then((data) => setRelated(data || []))
      .catch(console.error);
  }, [slug]);

  // ✅ Dynamic page title in browser tab
  useEffect(() => {
    if (post?.title) {
      document.title = `${post.title} | WealthForge Blog`;
    }
  }, [post]);

  if (!post) {
    return <main className="text-center py-20">Loading...</main>;
  }

  return (
    <main className="relative bg-white">
      <section className="relative mx-auto max-w-3xl w-[92%] md:w-[70%] pt-14 md:pt-20">
        {/* Header */}
        <div className="flex items-center justify-between">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-black/80 hover:scale-[1.02] active:scale-[0.98]"
          >
            ← {t[lang].back}
          </Link>
          <LanguageToggle lang={lang} setLang={setLang} />
        </div>

        {/* Title */}
        <motion.h1
          className="mt-4 text-3xl md:text-4xl font-semibold text-black"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {post.title || ""}
        </motion.h1>

        {/* Author */}
        <motion.p
          className="mt-2 text-sm text-black/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {post.author ? `By ${post.author}` : t[lang].byAkash}
        </motion.p>

        {/* Main Image */}
        <motion.div
          className="mt-6"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          {post.mainImage ? (
            <img
              src={urlFor(post.mainImage)
                .width(1100)
                .height(470)
                .auto("format")
                .url()}
              alt={post.title  || ""}
              className="w-full rounded-2xl ring-1 ring-black/10"
            />
          ) : (
            <PlaceholderHeader />
          )}
        </motion.div>

        {/* Excerpt */}
        <motion.div
          className="mt-6 bg-gray-50 border border-gray-200 rounded-xl p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h2 className="text-lg font-medium text-gray-900 mb-2">Summary</h2>
          <p className="text-gray-700 leading-relaxed">
            {post.excerpt || "No excerpt available."}
          </p>
        </motion.div>

        {/* Body */}
        <motion.article
          className="prose prose-neutral max-w-none mt-8 prose-p:leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <PortableText value={post.body} />
        </motion.article>

        {/* Published At */}
        <motion.p
          className="mt-10 text-sm text-gray-500 text-right"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Published at:{" "}
          {post.publishedAt
            ? new Date(post.publishedAt).toLocaleDateString()
            : "Not published yet"}
        </motion.p>

        {/* Share / Related / CTA */}
        <ShareButtons
          shareUrl={shareUrl}
          title={post.title || ""}
          t={t[lang]}
          lang={lang}
        />

        <RelatedPosts posts={related} t={t[lang]} lang={lang} />
        <CtaSection
          title={t[lang].ctaTitle}
          subtitle={t[lang].ctaSub}
          buttonText={t[lang].bookCall}
          lang={lang}
        />
      </section>
    </main>
  );
};

export default BlogPost;
