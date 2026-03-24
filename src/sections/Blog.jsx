import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HASHNODE_QUERY = `
  query GetPosts {
    publication(host: "buildwithgiri.hashnode.dev") {
      posts(first: 9) {
        edges {
          node {
            id
            title
            brief
            slug
            publishedAt
            coverImage {
              url
            }
            tags {
              name
            }
          }
        }
      }
    }
  }
`;

async function fetchPosts() {
  const res = await fetch("https://gql.hashnode.com", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: HASHNODE_QUERY }),
  });
  const data = await res.json();
  return data.data.publication.posts.edges.map((e) => e.node);
}

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPosts()
      .then(setPosts)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return <div className="p-6 text-center text-gray-500">Loading posts...</div>;
  if (error)
    return <div className="p-6 text-center text-red-500">{error}</div>;
  if (posts.length === 0)
    return <div className="p-6 text-center text-gray-400">No posts yet — check back soon!</div>;

  return (
    <section id="blog" className="py-16 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-display font-semibold mb-4 text-center">Blog</h3>
        <p className="text-lg text-gray-600 mb-10 text-center max-w-2xl mx-auto">
          Real stories, career lessons, and advice for international students navigating tech in Canada.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              to={`/blog/${post.slug}`}
              key={post.id}
              className="block bg-white rounded-xl shadow hover:shadow-lg transition hover:scale-[1.02] overflow-hidden text-left"
            >
              {post.coverImage?.url && (
                <img
                  src={post.coverImage.url}
                  alt={post.title}
                  className="w-full h-40 object-cover"
                />
              )}
              <div className="p-4">
                <h4 className="font-bold text-base mb-2 leading-snug">{post.title}</h4>
                <p className="text-sm text-gray-500 mb-3 line-clamp-2">{post.brief}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      month: "short", day: "numeric", year: "numeric"
                    })}
                  </span>
                  {post.tags?.[0] && (
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                      #{post.tags[0].name}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
