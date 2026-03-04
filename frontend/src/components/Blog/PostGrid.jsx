// src/components/Blog/PostGrid.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import imageUrlBuilder from "@sanity/image-url";
import client from "../../client";
import { PlaceholderThumb } from "./Placeholder";

const builder = imageUrlBuilder(client);
const urlFor = (s) => builder.image(s);

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

const PostGrid = ({ posts, t, lang }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {posts.map((p) => (
      <motion.article
        key={p.slug}
        variants={item}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="group relative rounded-2xl bg-white ring-1 ring-black/10 shadow-[0_8px_24px_rgba(0,0,0,0.05)] overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)]"
      >
        {/* Thumbnail */}
        {p?.mainImage ? (
          <img
            src={urlFor(p.mainImage).width(800).height(450).auto("format").url()}
            alt={p.title?.[lang] || p.title?.en || ""}
            className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
          />
        ) : (
          <PlaceholderThumb />
        )}

        {/* Content */}
        <div className="p-5 md:p-6">
          {/* Meta Info */}
          <div className="text-[11px] uppercase tracking-wider text-black/60 font-medium">
            {(p.category?.[lang] || p.category?.en || "")} •{" "}
            {new Date(p.date).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </div>

          {/* Title */}
          <h3 className="mt-2 text-lg md:text-xl font-semibold text-black leading-snug group-hover:text-black/80 transition-colors">
            {p.title  || ""}
          </h3>

          {/* Excerpt / Summary */}
          <p className="mt-2 text-sm md:text-[15px] text-black/70 leading-relaxed line-clamp-3">
            {p.summary?.[lang] || p.summary?.en || p.excerpt || ""}
          </p>

          {/* Read More Button */}
          <div className="mt-5">
            <Link
              to={`/blog/${p.slug}`}
              className="inline-flex items-center justify-center gap-2 bg-black text-white text-sm font-medium px-4 py-2 rounded-xl transition-all duration-300 hover:bg-black/80 hover:scale-[1.03] active:scale-[0.98]"
            >
              {t.readMore} →
            </Link>
          </div>
        </div>
      </motion.article>
    ))}
  </div>
);

export default PostGrid;
