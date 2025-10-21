// src/pages/BlogPost.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import client from "../client";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";

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

  useEffect(() => {
    // Fetch current post
    client
      .fetch(
        `*[_type == "post" && slug.current == $slug][0]{
          title,
          summary,
          category,
          "slug": slug.current,
          date,
          mainImage,
          body
        }`,
        { slug }
      )
      .then((data) => setPost(data || null))
      .catch(console.error);

    // Fetch related posts (3 latest excluding current)
    client
      .fetch(
        `*[_type == "post" && slug.current != $slug] | order(date desc) [0..2]{
          title,
          category,
          "slug": slug.current,
          date,
          mainImage
        }`,
        { slug }
      )
      .then((data) => setRelated(data || []))
      .catch(console.error);
  }, [slug]);

  if (!post) {
    return <main className="text-center py-20">Loading...</main>;
  }

  return (
    <main className="relative bg-white">
      <section className="relative mx-auto max-w-3xl w-[92%] md:w-[70%] pt-14 md:pt-20">
        <div className="flex items-center justify-between">
          <Link to="/blog" className="text-sm text-black/70 hover:text-black">
            ← {t[lang].back}
          </Link>
          <LanguageToggle lang={lang} setLang={setLang} />
        </div>

        <h1 className="mt-4 text-3xl md:text-4xl font-semibold text-black">
          {post.title?.[lang] || post.title?.en || ""}
        </h1>

        <p className="mt-2 text-sm text-black/60">
          {new Date(post.date).toLocaleDateString()} • {t[lang].byAkash}
        </p>

        <div className="mt-6">
          {post.mainImage ? (
            <img
              src={urlFor(post.mainImage).width(1100).height(470).auto("format").url()}
              alt={post.title?.[lang] || post.title?.en || ""}
              className="w-full rounded-2xl ring-1 ring-black/10"
            />
          ) : (
            <PlaceholderHeader />
          )}
        </div>

        <article className="prose prose-neutral max-w-none mt-8 prose-p:leading-relaxed">
          {/* If you use Tailwind Typography, it styles this nicely */}
          <PortableText value={post.body} />
        </article>

        <ShareButtons shareUrl={shareUrl} title={post.title?.[lang] || post.title?.en || ""} t={t[lang]} lang={lang} />
        <RelatedPosts posts={related} t={t[lang]} lang={lang} />

        <CtaSection title={t[lang].ctaTitle} subtitle={t[lang].ctaSub} buttonText={t[lang].bookCall} lang={lang} />
      </section>
    </main>
  );
};

export default BlogPost;
