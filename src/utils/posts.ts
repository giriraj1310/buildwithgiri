import type { ComponentType } from 'react';
import type { Post } from '../types';

interface MDXModule {
  default: ComponentType;
  frontmatter: Omit<Post, 'slug' | 'Component'> & { slug?: string };
}

// Eagerly import all MDX posts at build time — no runtime API calls needed.
// To add a post, drop a new .mdx file in src/posts/. That's it.
const modules = import.meta.glob<MDXModule>('../posts/*.mdx', { eager: true });

export const allPosts: Post[] = Object.entries(modules)
  .map(([filePath, mod]) => ({
    ...mod.frontmatter,
    Component: mod.default,
    slug: mod.frontmatter?.slug ?? filePath.split('/').pop()!.replace('.mdx', ''),
  }))
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export const allTags: string[] = [...new Set(allPosts.flatMap((p) => p.tags ?? []))];
