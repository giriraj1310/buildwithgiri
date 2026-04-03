import React from "react";
import { Link } from "react-router-dom";

export default function BlogCard({ post }) {
  const { slug, title, excerpt, date, tags, coverImage, readTime } = post;

  return (
    <Link
      to={`/blog/${slug}`}
      className="block bg-white rounded-xl shadow hover:shadow-lg transition hover:scale-[1.02] overflow-hidden text-left group"
    >
      {coverImage && (
        <img
          src={coverImage}
          alt={title}
          className="w-full h-44 object-cover"
          loading="lazy"
        />
      )}
      <div className="p-5">
        {tags?.[0] && (
          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full mb-3 inline-block">
            #{tags[0]}
          </span>
        )}
        <h4 className="font-bold text-base mb-2 leading-snug group-hover:text-blue-600 transition-colors">
          {title}
        </h4>
        <p className="text-sm text-gray-500 mb-4 line-clamp-2">{excerpt}</p>
        <div className="flex items-center justify-between text-xs text-gray-400">
          <span>
            {new Date(date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
          {readTime && <span>{readTime}</span>}
        </div>
      </div>
    </Link>
  );
}
