import React from "react";
import { useParams, Link } from "react-router-dom";
import { POSTS, findPost } from "../components/BlogData/blogPosts";

// Hooks & Components
import { useLang } from "../hooks/useLang";
import LanguageToggle from "../components/Blog/LanguageToggle";
import { PlaceholderHeader } from "../components/Blog/Placeholder";
import ShareButtons from "../components/Blog/ShareButtons";
import RelatedPosts from "../components/Blog/RelatedPosts";
import CtaSection from "../components/Blog/CtaSection";

// Translation object
const t = {
  en: { byAkash: "By Akash, Founder & Advisor", share: "Share", related: "Related Posts", back: "Back to Blog", ctaTitle: "Want personal financial guidance?", ctaSub: "Book a free consultation call...", bookCall: "Book a Call" },
  hi: { byAkash: "लेखक: आकाश, संस्थापक व सलाहकार", share: "साझा करें", related: "संबंधित लेख", back: "ब्लॉग पर वापस", ctaTitle: "व्यक्तिगत वित्तीय मार्गदर्शन चाहते हैं?", ctaSub: "आज ही आकाश से मुफ्त परामर्श...", bookCall: "कॉल बुक करें" },
};

const BlogPost = () => {
  const { slug } = useParams();
  const { lang, setLang } = useLang();
  const post = findPost(slug);

  if (!post) {
    return <main className="text-center py-20">Post not found.</main>;
  }

  const shareUrl = window.location.href;
  const related = POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <main className="relative bg-white">
      <section className="relative mx-auto max-w-3xl w-[92%] md:w-[70%] pt-14 md:pt-20">
        <div className="flex items-center justify-between">
          <Link to="/blog" className="text-sm text-black/70 hover:text-black">
            ← {t[lang].back}
          </Link>
          <LanguageToggle lang={lang} setLang={setLang} />
        </div>

        <h1 className="mt-4 text-3xl md:text-4xl font-semibold text-black">{post.title[lang]}</h1>
        <p className="mt-2 text-sm text-black/60">
          {new Date(post.date).toLocaleDateString()} • {t[lang].byAkash}
        </p>

        <div className="mt-6"><PlaceholderHeader /></div>

        <article className="prose prose-neutral max-w-none mt-8 prose-p:leading-relaxed">
          <p className="text-black/80">{post.summary[lang]}</p>
        </article>

        <ShareButtons shareUrl={shareUrl} title={post.title[lang]} t={t[lang]} lang={lang} />
        <RelatedPosts posts={related} t={t[lang]} lang={lang} />
        
        <CtaSection title={t[lang].ctaTitle} subtitle={t[lang].ctaSub} buttonText={t[lang].bookCall} lang={lang} />
      </section>
    </main>
  );
};

export default BlogPost;