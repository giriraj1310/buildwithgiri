// Reads MDX frontmatter from src/posts/ and writes public/posts-meta.json.
// Runs as part of the build step so the edge middleware always has fresh data.
const fs = require('fs');
const path = require('path');

const postsDir = path.join(__dirname, '../src/posts');
const outputFile = path.join(__dirname, '../public/posts-meta.json');

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const fm = {};
  for (const line of match[1].split('\n')) {
    const colonIdx = line.indexOf(':');
    if (colonIdx === -1) continue;
    const key = line.slice(0, colonIdx).trim();
    const value = line.slice(colonIdx + 1).trim().replace(/^["']|["']$/g, '');
    if (key) fm[key] = value;
  }
  return fm;
}

const files = fs.readdirSync(postsDir).filter((f) => f.endsWith('.mdx'));
const posts = [];

for (const file of files) {
  const content = fs.readFileSync(path.join(postsDir, file), 'utf-8');
  const fm = parseFrontmatter(content);
  if (fm.title) {
    posts.push({
      slug: fm.slug || file.replace('.mdx', ''),
      title: fm.title,
      excerpt: fm.excerpt || '',
      coverImage: fm.coverImage || null,
    });
  }
}

fs.writeFileSync(outputFile, JSON.stringify(posts, null, 2));
console.log(`Generated posts-meta.json with ${posts.length} posts`);
