import type { ComponentType } from 'react';

export type WinCategory = 'first-job' | 'promotion' | 'internship' | 'offer' | 'pivot';

export interface Win {
  id: number;
  initials: string;
  name: string;
  flag: string;
  achievement: string;
  company: string;
  quote: string;
  category: WinCategory;
}

export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  tags?: string[];
  coverImage?: string;
  readTime?: string;
  Component: ComponentType;
}
