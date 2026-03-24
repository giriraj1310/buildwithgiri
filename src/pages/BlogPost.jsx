import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const GET_POST_QUERY = `
  query GetPost($slug: String!) {
    publication(host: "buildwithgiri.hashnode.dev") {
      post(slug: $slug) {
        title
        publishedAt
        content {
          markdown
        }
        tags {
          name
        }
        coverImage {
          url
        }
        author {
          name
        }
      }
    }
  }
`;

export default function BlogPost() {
  const { id: slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://gql.hashnode.com", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: GET_POST_QUERY,
        variables: { slug },
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        const p = data.data?.publication?.post;
        if (!p) throw new Error("Post not found");
        setPost(p);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading)
    return <div className="p-6 text-center text-gray-500">Loading...</div>;
  if (error || !post)
    return <div className="p-6 text-center text-red-500">{error || "Post not found."}</div>;

  return (
    <div className="max-w-3xl mx-auto py-20 px-6">

      {/* Cover image */}
      {post.coverImage?.url && (
        <img
          src={post.coverImage.url}
          alt={post.title}
          className="w-full h-64 object-cover rounded-xl mb-8"
        />
      )}

      {/* Title */}
      <h1 className="text-4xl font-display font-bold mb-4 leading-tight">
        {post.title}
      </h1>

      {/* Meta */}
      <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
        <span>By {post.author?.name || "Giri"}</span>
        <span>•</span>
        <span>
          {new Date(post.publishedAt).toLocaleDateString("en-US", {
            month: "long", day: "numeric", year: "numeric"
          })}
        </span>
      </div>

      {/* Tags */}
      {post.tags?.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map((tag) => (
            <span
              key={tag.name}
              className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full"
            >
              #{tag.name}
            </span>
          ))}
        </div>
      )}

      {/* Content */}
      <div className="prose prose-lg max-w-none text-gray-700">
        <ReactMarkdown>{post.content.markdown}</ReactMarkdown>
      </div>

      {/* Back link */}
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
