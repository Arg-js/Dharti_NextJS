import { baseURL } from '@/services/service-api';

export const api = {
  blogs: `${baseURL}/blog`,
  blogByCategory: `${baseURL}/blog-category/{id}`,
  blogByTag: `${baseURL}/blog-tag/{id}`,
  blogSearch: `${baseURL}/blog-search`,
  blogBySlug: `${baseURL}/blog-detail/`,
  blogCategory: `${baseURL}/blog-category/`,
  tags: `${baseURL}/tag/`,
  category: `${baseURL}/category/`,
} as const;
