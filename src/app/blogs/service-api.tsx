import { baseURL } from '@/services/service-api';

export const api = {
  blogs: `${baseURL}/blog/`,
  blogBySlug: `${baseURL}/blog-detail/`,
  blogCategory: `${baseURL}/blog-category/`,
  tags: `${baseURL}/tags/`,
  category: `${baseURL}/category/`,
} as const;
