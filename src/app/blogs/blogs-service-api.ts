import { DhartiResponse } from '@/services/service-api';
import { api } from './service-api';

export interface IBlogDetails {
  id: number;
  title: string;
  image: string;
  description: string;
  date: string;
  slug: string;
  category: Item;
}

// TODO: Might need to change later since category might get added to IBlogDetails
export type IBlog = Omit<IBlogDetails, 'category'> & {
  blog: {
    tag: ITags[];
  };
};

export interface Item {
  id: number;
  title: string;
}

export interface ITags {
  id: number;
  tag: string;
  slug: string;
}

export interface ICategory extends Item {
  slug: string;
}

export interface ILink {
  url?: string;
  label: string;
  active: boolean;
}

export interface IPaginatedResponse {
  current_page: number;
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: ILink[];
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: string;
  to: number;
  total: number;
}

const getBlogs = async ({
  page,
  search,
  category,
  tag,
}: {
  page: number;
  search: string;
  category: string;
  tag: string;
}) => {
  try {
    const response = await fetch(
      `${api.blogs}/?page=${page ?? '1'}&search=${search ?? ''}&tag_slug=${
        tag ?? ''
      }&category_slug=${category ?? ''}`
    );
    // todo: handle error condition
    // if (!response.ok) {
    //   return {};
    // }
    const json: DhartiResponse<
      {
        data: IBlogDetails[];
      } & IPaginatedResponse
    > = await response.json();

    return json.data;
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
    const json: DhartiResponse<ITags[]> = await response.json();
    return json.data;
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
