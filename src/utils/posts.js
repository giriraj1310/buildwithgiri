// Eagerly import all MDX posts at build time — no runtime API calls needed.
// To add a post, drop a new .mdx file in src/posts/. That's it.
const modules = import.meta.glob('../posts/*.mdx', { eager: true });

export const allPosts = Object.entries(modules)
  .map(([filePath, mod]) => ({
    ...mod.frontmatter,
    Component: mod.default,
    // Fall back to filename if slug not set in frontmatter
    slug: mod.frontmatter?.slug || filePath.split('/').pop().replace('.mdx', ''),
  }))
  .sort((a, b) => new Date(b.date) - new Date(a.date));

export const allTags = [...new Set(allPosts.flatMap((p) => p.tags || []))];
