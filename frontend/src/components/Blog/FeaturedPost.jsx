// src/components/Blog/FeaturedPost.jsx
import React from "react";
import { Link } from "react-router-dom";
import imageUrlBuilder from "@sanity/image-url";
import client from "../../client";
import { PlaceholderThumb } from "./Placeholder";

const builder = imageUrlBuilder(client);
const urlFor = (s) => builder.image(s);

const FeaturedPost = ({ post, t, lang }) => (
  <article className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 rounded-2xl bg-white p-4 md:p-6 ring-1 ring-black/10 shadow-[0_8px_24px_rgba(0,0,0,0.05)]">
    <div>
      {post?.mainImage ? (
        <img
          src={urlFor(post.mainImage)
            .width(900)
            .height(506)
            .auto("format")
            .url()}
          alt={post || ""}
          className="aspect-[16/9] w-full rounded-lg ring-1 ring-black/10 object-cover"
        />
      ) : (
        <PlaceholderThumb />
      )}
    </div>
    <div className="flex flex-col">
      <div className="text-xs uppercase tracking-wide text-black/60">
        {post.category?.[lang] || post.category?.en || ""} •{" "}
        {new Date(post.date).toLocaleDateString("en-GB", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })}
      </div>

      <h2 className="mt-2 text-xl md:text-2xl font-semibold text-black">
        {post.title || ""}
      </h2>
      {/* <p className="mt-2 text-black/70">
        {post.excerpt || "No excerpt available."}
      </p> */}
      <div className="mt-4">
        <Link
          to={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-black/80 hover:scale-[1.02] active:scale-[0.98]"
        >
          {t.readMore} →
        </Link>
      </div>

      <div className="mt-auto pt-4 text-sm text-black/60">{t.byAkash}</div>
    </div>
  </article>
);

export default FeaturedPost;
