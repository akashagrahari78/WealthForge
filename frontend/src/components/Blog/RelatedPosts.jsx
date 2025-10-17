import React from "react";
import { Link } from "react-router-dom";

const RelatedPosts = ({ posts, t, lang }) => (
  <div className="mt-12">
    <h3 className="text-lg font-semibold text-black">{t.related}</h3>
    <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
      {posts.map((p) => (
        <Link key={p.slug} to={`/blog/${p.slug}`} className="rounded-2xl bg-white ring-1 ring-black/10 shadow-[0_8px_24px_rgba(0,0,0,0.05)] overflow-hidden">
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
);

export default RelatedPosts;