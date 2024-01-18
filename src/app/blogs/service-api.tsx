import { baseURL } from '@/services/service-api';

export const api = {
  blogs: `${baseURL}/blog/`,
  tags: `${baseURL}/tags/`,
  category: `${baseURL}/category/`,
} as const;
