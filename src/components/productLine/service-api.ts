import { baseURL } from '@/services/service-api';

export const api = {
  product_line: `${baseURL}/product-line/`,
} as const;
