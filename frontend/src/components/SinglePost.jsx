// src/components/SinglePost.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import client from '../client';
import { PortableText } from '@portabletext/react';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

function SinglePost() {
  const [postData, setPostData] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post" && slug.current == $slug][0]{
          title,
          mainImage{
            asset->{
              _id,
              url
            }
          },
          body
        }`,
        { slug } // Pass the 'slug' variable from the URL
      )
      .then((data) => setPostData(data))
      .catch(console.error);
  }, [slug]);

  if (!postData) return <div>Loading...</div>;

  return (
  <main className="bg-white text-black min-h-screen p-8">
    <article className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{postData.title}</h1>

      {postData.mainImage && (
        <img
          src={urlFor(postData.mainImage).width(800).url()}
          alt={postData.title}
          className="w-full rounded-lg mb-6"
        />
      )}

      <div className="prose prose-lg max-w-none">
        <PortableText value={postData.body} />
      </div>
    </article>
  </main>
);

}

export default SinglePost;