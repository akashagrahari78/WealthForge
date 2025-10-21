  // src/components/Blog.js
  import React, { useState, useEffect } from "react";
  import { Link } from "react-router-dom";
  import client from "../client";

  function Blog() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      client
        .fetch(
          `*[_type == "post"]{
    title,
    slug,
    body,
    mainImage{
      asset->{
        _id,
        url
      }
    }
  }
  `
        )
        .then((data) => setPosts(data))
        .catch(console.error);
    }, []);

    return (
  <div className="bg-white text-black min-h-screen p-6">
    <h2 className="text-3xl font-bold mb-8 text-center">Blog Posts</h2>

    <div className="grid md:grid-cols-3 gap-8">
      {posts &&
        posts.map((post) => (
          <article
            key={post.slug.current}
            className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
          >
            <Link to={`/blog/${post.slug.current}`}>
              {post.mainImage?.asset?.url && (
                <img
                  src={post.mainImage.asset.url}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-700 text-sm line-clamp-3">
                  {post.excerpt || "Read more..."}
                </p>
              </div>
            </Link>
          </article>
        ))}
    </div>
  </div>
);

  }

  export default Blog;
