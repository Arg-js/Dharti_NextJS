import { DhartiResponse } from '@/services/service-api';
import { api } from './service-api';

export interface IBlogDetails {
  id: number;
  title: string;
  image: string;
  description: string;
  date: string;
  slug: string;
  category: Category;
}

// TODO: Might need to change later since category might get added to IBlogDetails
export type IBlog = Omit<IBlogDetails, 'category'> & {
  blog: {
    tag: ITags[];
  };
};

export interface Category {
  id: number;
  title: string;
}

export interface ITags {
  id: number;
  tag: string;
}
export interface ICategory {
  id: number;
  title: string;
}

const getBlogs = async () => {
  const response = await fetch(api.blogs);
  const json: DhartiResponse<IBlogDetails[]> = await response.json();
  return json.data;
};

const getBlog = async (slug: string) => {
  const response = await fetch(api.blogBySlug + slug);
  const json: DhartiResponse<IBlog> = await response.json();
  return json.data;
};

const getBlogsCategory = async (blogId: number) => {
  const response = await fetch(api.blogCategory + blogId);
  const json: DhartiResponse<IBlogDetails[]> = await response.json();
  return json.data;
};

const getTags = async () => {
  const response = await fetch(api.tags);
  if (response.ok) {
    const json: DhartiResponse<ITags[]> = await response.json();
    return json.data;
  }
  return undefined;
};

const getCategories = async () => {
  const response = await fetch(api.category);
  const json: DhartiResponse<ICategory[]> = await response.json();
  return json.data;
};
export { getBlogs, getBlog, getBlogsCategory, getTags, getCategories };
