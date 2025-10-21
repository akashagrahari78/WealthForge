// src/components/Blog/PostGrid.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import imageUrlBuilder from "@sanity/image-url";
import client from "../../client";
import { PlaceholderThumb } from "./Placeholder";

const builder = imageUrlBuilder(client);
const urlFor = (s) => builder.image(s);

const item = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.35 } } };

const PostGrid = ({ posts, t, lang }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
    {posts.map((p) => (
      <motion.article
        key={p.slug}
        variants={item}
        initial = "hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}

        className="rounded-2xl bg-white ring-1 ring-black/10 shadow-[0_8px_24px_rgba(0,0,0,0.05)] overflow-hidden"
      >
        {p?.mainImage ? (
          <img
            src={urlFor(p.mainImage).width(800).height(450).auto("format").url()}
            alt={p.title?.[lang] || p.title?.en || ""}
            className="aspect-[16/9] w-full object-cover"
          />
        ) : (
          <PlaceholderThumb />
        )}
        <div className="p-4 md:p-5">
          <div className="text-[11px] uppercase tracking-wide text-black/60">
            {(p.category?.[lang] || p.category?.en || "")} • {new Date(p.date).toLocaleDateString()}
          </div>
          <h3 className="mt-1.5 text-base md:text-lg font-semibold text-black">{p.title?.[lang] || p.title?.en || ""}</h3>
          <p className="mt-1.5 text-sm md:text-base text-black/70">
            {p.summary?.[lang] || p.summary?.en || p.excerpt || ""}
          </p>
          <div className="mt-3">
            <Link to={`/blog/${p.slug}`} className="text-sm text-black hover:underline underline-offset-4">
              {t.readMore} →
            </Link>
          </div>
        </div>
      </motion.article>
    ))}
  </div>
);

export default PostGrid;
