// src/pages/BlogPost.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { POSTS, findPost } from "../components/BlogData/blogPosts";
import { motion } from "framer-motion";

const useLang = () => {
  const [lang, setLang] = React.useState(() => localStorage.getItem("lang") || "en");
  React.useEffect(() => localStorage.setItem("lang", lang), [lang]);
  return { lang, setLang };
};

const t = {
  en: {
    byAkash: "By Akash, Founder & Advisor",
    share: "Share",
    related: "Related Posts",
    back: "Back to Blog",
  },
  hi: {
    byAkash: "लेखक: आकाश, संस्थापक व सलाहकार",
    share: "साझा करें",
    related: "संबंधित लेख",
    back: "ब्लॉग पर वापस",
  },
};

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

const PlaceholderHeader = () => (
  <div className="aspect-[21/9] w-full rounded-2xl bg-[linear-gradient(135deg,#f6f6f6,#ececec)] ring-1 ring-black/10 flex items-center justify-center">
    <svg width="110" height="52" viewBox="0 0 110 52" aria-hidden className="text-black/20">
      <rect x="2" y="2" width="106" height="48" rx="8" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d="M10 40 L35 22 L55 32 L80 12 L100 40" fill="none" stroke="currentColor" strokeWidth="3" />
    </svg>
  </div>
);

const BlogPost = () => {
  const { slug } = useParams();
  const { lang, setLang } = useLang();
  const post = findPost(slug);

  if (!post) {
    return (
      <main className="mx-auto max-w-3xl w-[92%] md:w-[70%] py-16">
        <p className="text-black">Post not found.</p>
        <Link to="/blog" className="text-black underline underline-offset-4 mt-2 inline-block">
          Back
        </Link>
      </main>
    );
  }

  const shareUrl = typeof window !== "undefined" ? window.location.href : `https://example.com/blog/${slug}`;
  const related = POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <main className="relative bg-white">
      {/* subtle grid */}
      <div
        className="pointer-events-none absolute inset-0
        bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)]
        bg-[size:28px_28px] [mask-image:radial-gradient(80%_80%_at_50%_35%,#000_65%,transparent_100%)]"
      />

      <section className="relative mx-auto max-w-3xl w-[92%] md:w-[70%] pt-14 md:pt-20">
        <div className="flex items-center justify-between">
          <Link to="/blog" className="text-sm text-black/70 hover:text-black">
            ← {t[lang].back}
          </Link>
          <Toggle lang={lang} setLang={setLang} />
        </div>

        <h1 className="mt-4 text-3xl md:text-4xl font-semibold text-black">{post.title[lang]}</h1>
        <p className="mt-2 text-sm text-black/60">
          {new Date(post.date).toLocaleDateString()} • {t[lang].byAkash}
        </p>

        <div className="mt-6">
          <PlaceholderHeader />
        </div>

        {/* Reading column */}
        <article className="prose prose-neutral max-w-none mt-8 prose-p:leading-relaxed">
          <p className="text-black/80">
            {/* Placeholder body copy; replace with CMS content */}
            {post.summary[lang]} Continue reading with deeper insights, practical examples, and checklists that keep your plan disciplined and aligned with long‑term outcomes.
          </p>
          <p className="text-black/80">
            Key takeaways include setting clear goals, using simple rebalancing thresholds, and avoiding reaction to short‑term volatility.
          </p>
        </article>

        {/* Share */}
        <div className="mt-8 flex items-center gap-3">
          <span className="text-sm text-black/60">{t[lang].share}:</span>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center h-9 w-9 rounded-full ring-1 ring-black/10 hover:bg-black/5"
            aria-label="Share on LinkedIn"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-black/70">
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-1 1.7-2.2 3.6-2.2 3.9 0 4.7 2.6 4.7 6v9H16.3v-8c0-1.9 0-4.3-2.6-4.3-2.6 0-3 2-3 4.1V24H8V8z" />
            </svg>
          </a>
          <a
            href={`https://api.whatsapp.com/send?text=${encodeURIComponent(post.title[lang] + " " + shareUrl)}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center h-9 w-9 rounded-full ring-1 ring-black/10 hover:bg-black/5"
            aria-label="Share on WhatsApp"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-black/70">
              <path d="M20.5 3.5A11.5 11.5 0 1 0 3.2 20.8L2 24l3.3-1.2A11.5 11.5 0 1 0 20.5 3.5zM6.3 18.4l-.2-.1-2 .7.7-2-.1-.2a9 9 0 1 1 1.6 1.6zm10-5.7c-.1-.2-.4-.3-.8-.5s-.5-.2-.8.1-.9.9-1 .9-.2.1-.5 0a7.5 7.5 0 0 1-2.2-1.4 7.7 7.7 0 0 1-1.4-2.2c-.1-.3 0-.4 0-.5s.8-.6.9-1 .1-.6 0-.8c0-.2-.6-1.4-.8-1.6s-.4-.2-.6-.2-.4 0-.6 0a1.2 1.2 0 0 0-.8.4c-.3.3-1.1 1.1-1.1 2.6s1.2 3 1.4 3.2 2.4 2.4 3.2 2.7 1.9.7 2.6.5 1.6-1 1.8-1.5-.1-.9-.2-1.1z" />
            </svg>
          </a>
        </div>

        {/* Related */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold text-black">{t[lang].related}</h3>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link
                key={p.slug}
                to={`/blog/${p.slug}`}
                className="rounded-2xl bg-white ring-1 ring-black/10 shadow-[0_8px_24px_rgba(0,0,0,0.05)] overflow-hidden"
              >
                <div className="aspect-[16/9] bg-[linear-gradient(135deg,#f6f6f6,#ececec)]" />
                <div className="p-4">
                  <div className="text-[11px] uppercase tracking-wide text-black/60">
                    {p.category[lang]} • {new Date(p.date).toLocaleDateString()}
                  </div>
                  <div className="mt-1.5 text-sm font-semibold text-black line-clamp-2">{p.title[lang]}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <section className="mt-14 mb-20">
          <div className="rounded-2xl bg-white/90 backdrop-blur-sm ring-1 ring-black/10 p-6 md:p-8 text-center">
            <h3 className="text-xl font-semibold text-black">Want personal financial guidance?</h3>
            <p className="mt-2 text-black/70">Book a free consultation call with Akash today.</p>
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
      </section>
    </main>
  );
};

export default BlogPost;
