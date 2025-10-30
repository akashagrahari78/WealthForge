// src/components/Blog/RelatedPosts.jsx
import React from "react";
import { Link } from "react-router-dom";
import imageUrlBuilder from "@sanity/image-url";
import client from "../../client";

const builder = imageUrlBuilder(client);
const urlFor = (s) => builder.image(s);

const RelatedPosts = ({ posts, t, lang }) => (
  <div className="mt-12">
    <h3 className="text-lg font-semibold text-black">{t.related}</h3>
    <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
      {posts.map((p) => (
        <Link
          key={p.slug}
          to={`/blog/${p.slug}`}
          className="rounded-2xl bg-white ring-1 ring-black/10 shadow-[0_8px_24px_rgba(0,0,0,0.05)] overflow-hidden"
        >
          {p?.mainImage ? (
            <img
              src={urlFor(p.mainImage)
                .width(600)
                .height(338)
                .auto("format")
                .url()}
              alt={p.title?.[lang] || p.title?.en || ""}
              className="aspect-[16/9] w-full object-cover"
            />
          ) : (
            <div className="aspect-[16/9] bg-[linear-gradient(135deg,#f6f6f6,#ececec)]" />
          )}
          <div className="p-4">
            <div className="text-[11px] uppercase tracking-wide text-black/60">
              {p.category?.[lang] || p.category?.en || ""} •{" "}
              {new Date(p.publishedAt).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </div>

            <div className="mt-1.5 text-sm font-semibold text-black line-clamp-2">
              {p?.title?.[lang] ?? p?.title?.en ?? ""}
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

export default RelatedPosts;
