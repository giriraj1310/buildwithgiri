export const config = {
  matcher: ['/blog/:path+'],
};

interface PostMeta {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string | null;
}

// Social and messaging bots that read OG meta tags
const BOT_UA =
  /linkedinbot|twitterbot|facebookexternalhit|slackbot|discordbot|whatsapp|telegrambot|googlebot|bingbot/i;

function escape(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export default async function middleware(request: Request): Promise<Response | undefined> {
  const ua = request.headers.get('user-agent') ?? '';
  if (!BOT_UA.test(ua)) return undefined;

  const url = new URL(request.url);
  const slug = url.pathname.replace(/^\/blog\//, '');
  if (!slug) return undefined;

  let post: PostMeta | undefined;
  try {
    const res = await fetch(new URL('/posts-meta.json', request.url).toString());
    const posts: PostMeta[] = await res.json();
    post = posts.find((p) => p.slug === slug);
  } catch {
    return undefined;
  }

  if (!post) return undefined;

  const siteBase = `${url.protocol}//${url.host}`;
  const postUrl = `${siteBase}/blog/${post.slug}`;
  const ogImage = post.coverImage ? `${siteBase}${post.coverImage}` : `${siteBase}/preview.png`;

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>${escape(post.title)} | Build with Giri</title>
  <meta name="description" content="${escape(post.excerpt)}" />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="${postUrl}" />
  <meta property="og:title" content="${escape(post.title)}" />
  <meta property="og:description" content="${escape(post.excerpt)}" />
  <meta property="og:image" content="${ogImage}" />
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="${postUrl}" />
  <meta property="twitter:title" content="${escape(post.title)}" />
  <meta property="twitter:description" content="${escape(post.excerpt)}" />
  <meta property="twitter:image" content="${ogImage}" />
</head>
<body>
  <script>window.location.replace("${postUrl}");</script>
</body>
</html>`;

  return new Response(html, {
    headers: { 'content-type': 'text/html; charset=utf-8' },
  });
}
