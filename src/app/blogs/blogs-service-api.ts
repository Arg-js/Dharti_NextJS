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
export { getBlogs, getTags, getCategories };
