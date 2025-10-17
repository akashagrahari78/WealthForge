import React from "react";
import { Link } from "react-router-dom";
import { PlaceholderThumb } from "./Placeholder";

const FeaturedPost = ({ post, t, lang }) => (
  <article className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 rounded-2xl bg-white p-4 md:p-6 ring-1 ring-black/10 shadow-[0_8px_24px_rgba(0,0,0,0.05)]">
    <div><PlaceholderThumb /></div>
    <div className="flex flex-col">
      <div className="text-xs uppercase tracking-wide text-black/60">
        {post.category[lang]} • {new Date(post.date).toLocaleDateString()}
      </div>
      <h2 className="mt-2 text-xl md:text-2xl font-semibold text-black">{post.title[lang]}</h2>
      <p className="mt-2 text-black/70">{post.summary[lang]}</p>
      <div className="mt-4">
        <Link to={`/blog/${post.slug}`} className="inline-flex items-center gap-1 text-sm text-black hover:underline underline-offset-4">
          {t.readMore} →
        </Link>
      </div>
      <div className="mt-auto pt-4 text-sm text-black/60">{t.byAkash}</div>
    </div>
  </article>
);

export default FeaturedPost;