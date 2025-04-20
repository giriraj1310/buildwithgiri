// src/sections/Blog.jsx

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/data/blog/index.json")
      .then((res) => {
        if (!res.ok) throw new Error("Unable to load blog posts");
        return res.json();
      })
      .then((data) => setPosts(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="p-6 text-center">Loading blog posts...</div>;
  if (error) return <div className="p-6 text-center text-red-500">{error}</div>;

  return (
    <section id="blog" className="py-16 px-6 bg-gray-50 text-center">
      <h3 className="text-3xl font-display font-semibold mb-4">Blog</h3>
      <p className="max-w-3xl mx-auto text-lg mb-6">
        Read personal insights, tech lessons, and student-focused advice from my experiences in Canada and the tech world.
      </p>
      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link
            to={`/blog/${post.id}`}
            key={post.id}
            className="block p-4 bg-white rounded-xl shadow hover:shadow-lg transition text-left hover:scale-[1.02]"
          >
            <h4 className="font-bold text-lg mb-2">{post.title}</h4>
            <p className="text-sm text-gray-600 mb-2">{post.description}</p>
            <div className="text-xs text-gray-400">{new Date(post.date).toLocaleDateString()}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
