// // src/pages/BlogPost.jsx

// import React from "react";
// import { useParams } from "react-router-dom";
// import blogData from "../data/blogData";

// export default function BlogPost() {
//   const { id } = useParams();
//   const post = blogData.find((p) => p.id.toString() === id);

//   if (!post) {
//     return <div className="p-6 text-center">Blog post not found.</div>;
//   }

//   return (
//     <div className="max-w-3xl mx-auto py-20 px-6 text-left">
//       <h1 className="text-4xl font-display font-bold mb-4">{post.title}</h1>
//       <p className="text-gray-700 text-lg leading-relaxed">
//         {post.description}
//       </p>
//       {/* You can expand this to include full content later */}
//     </div>
//   );
// }

// src/pages/BlogPost.jsx

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`/data/blog/${id}.json`)
      .then((res) => {
        if (!res.ok) throw new Error("Post not found");
        return res.json();
      })
      .then((data) => setPost(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="p-6 text-center">Loading...</div>;
  if (error || !post) return <div className="p-6 text-center">{error || "Blog post not found."}</div>;

  return (
    <div className="max-w-3xl mx-auto py-20 px-6 text-left">
      <h1 className="text-4xl font-display font-bold mb-4">{post.title}</h1>
      <div className="text-sm text-gray-500 mb-4">
        <span>By {post.author}</span> • <span>{new Date(post.date).toLocaleDateString()}</span>
      </div>
      <div className="flex gap-2 mb-6">
        {post.tags.map((tag) => (
          <span key={tag} className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">
            #{tag}
          </span>
        ))}
      </div>
      <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
        {post.content}
      </p>
      <div className="mt-10">
        <a href="/" className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          ← Back to Blog
        </a>
      </div>
    </div>
  );
}
