import React, { useState, useMemo } from "react";
import Fuse from "fuse.js";
import { allPosts, allTags } from "../utils/posts";
import BlogCard from "../components/BlogCard";

const fuse = new Fuse(allPosts, {
  keys: ["title", "excerpt", "tags"],
  threshold: 0.35,
});

export default function Blog() {
  const [query, setQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  const filtered = useMemo(() => {
    let posts = query ? fuse.search(query).map((r) => r.item) : allPosts;
    if (selectedTag) posts = posts.filter((p) => p.tags?.includes(selectedTag));
    return posts;
  }, [query, selectedTag]);

  return (
    <section id="blog" className="py-16 px-6 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-3xl font-display font-semibold mb-4 text-center text-gray-900 dark:text-white">
          Blog
        </h3>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 text-center max-w-2xl mx-auto">
          Real stories, career lessons, and advice for professionals navigating
          growth in tech.
        </p>

        {/* Search */}
        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Search posts..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full max-w-sm px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm transition-colors duration-200"
          />
        </div>

        {/* Tag filter */}
        {allTags.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button
              onClick={() => setSelectedTag("")}
              className={`text-xs px-3 py-1 rounded-full border transition ${
                !selectedTag
                  ? "bg-blue-600 text-white border-blue-600"
                  : "border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:border-blue-400 dark:hover:border-blue-500"
              }`}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag === selectedTag ? "" : tag)}
                className={`text-xs px-3 py-1 rounded-full border transition ${
                  selectedTag === tag
                    ? "bg-blue-600 text-white border-blue-600"
                    : "border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:border-blue-400 dark:hover:border-blue-500"
                }`}
              >
                #{tag}
              </button>
            ))}
          </div>
        )}

        {/* Post count */}
        <p className="text-sm text-gray-400 dark:text-gray-500 text-center mb-6">
          {filtered.length} {filtered.length === 1 ? "post" : "posts"}
        </p>

        {filtered.length === 0 ? (
          <p className="text-center text-gray-400 dark:text-gray-500 py-12">No posts found.</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {filtered.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
