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
  try {
    const response = await fetch(api.blogs);
    if (!response.ok) {
      return [];
    }
    const json: DhartiResponse<{ data: IBlogDetails[] }> =
      await response.json();
    return json.data.data;
  } catch (e) {
    console.error(e);
  }
};

const getBlog = async (slug: string) => {
  try {
    const response = await fetch(api.blogBySlug + slug);
    const json: DhartiResponse<IBlog> = await response.json();
    return json.data;
  } catch (e) {
    console.error('error-->', e);
  }
};

const getBlogsCategory = async (blogId: number | string) => {
  try {
    if (typeof blogId === 'string') return [];
    const response = await fetch(api.blogCategory + blogId);
    const json: DhartiResponse<IBlogDetails[]> = await response.json();
    return json.data;
  } catch (e) {
    console.error('error-->', e);
  }
};

const getTags = async () => {
  try {
    const response = await fetch(api.tags);
    if (response.ok) {
      const json: DhartiResponse<ITags[]> = await response.json();
      return json.data;
    }
    return undefined;
  } catch (e) {
    console.error('error-->', e);
  }
};

const getCategories = async () => {
  try {
    const response = await fetch(api.category);
    const json: DhartiResponse<ICategory[]> = await response.json();
    return json.data;
  } catch (e) {
    console.error('error-->', e);
  }
};
export { getBlogs, getBlog, getBlogsCategory, getTags, getCategories };
