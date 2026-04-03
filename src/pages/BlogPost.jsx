import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { allPosts } from "../utils/posts";

export default function BlogPost() {
  const { id: slug } = useParams();
  const post = allPosts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/" replace />;

  const { Component, title, date, tags, coverImage, readTime } = post;

  return (
    <div className="max-w-3xl mx-auto py-20 px-6">
      {/* Back link */}
      <Link
        to="/#blog"
        className="inline-block text-sm text-blue-600 hover:text-blue-800 mb-8 transition"
      >
        ← Back to Blog
      </Link>

      {/* Cover image */}
      {coverImage && (
        <img
          src={coverImage}
          alt={title}
          className="w-full h-64 object-cover rounded-xl mb-8"
        />
      )}

      {/* Title */}
      <h1 className="text-4xl font-display font-bold mb-4 leading-tight">
        {title}
      </h1>

      {/* Meta */}
      <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-4">
        <span>By Giri</span>
        <span>•</span>
        <span>
          {new Date(date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </span>
        {readTime && (
          <>
            <span>•</span>
            <span>{readTime}</span>
          </>
        )}
      </div>

      {/* Tags */}
      {tags?.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-10">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* MDX Content */}
      <div className="prose prose-lg max-w-none text-gray-700">
        <Component />
      </div>

      {/* Bottom back link */}
      <div className="mt-12 pt-6 border-t">
        <Link
          to="/#blog"
          className="inline-block px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm"
        >
          ← Back to Blog
        </Link>
      </div>
    </div>
  );
}
