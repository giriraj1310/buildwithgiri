import React from "react";
import { Link } from "react-router-dom";

export default function BlogCard({ post }) {
  const { slug, title, excerpt, date, tags, coverImage, readTime } = post;

  return (
    <Link
      to={`/blog/${slug}`}
      className="block bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg dark:shadow-none dark:border dark:border-gray-700 transition hover:scale-[1.02] overflow-hidden text-left group"
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
          <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-2 py-0.5 rounded-full mb-3 inline-block">
            #{tags[0]}
          </span>
        )}
        <h4 className="font-bold text-base mb-2 leading-snug text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {title}
        </h4>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">{excerpt}</p>
        <div className="flex items-center justify-between text-xs text-gray-400 dark:text-gray-500">
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
