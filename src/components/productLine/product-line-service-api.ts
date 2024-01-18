import { DhartiResponse } from '@/services/service-api';
import { api } from './service-api';

export interface IProductLines {
  id: number;
  title: string;
  image: string;
  description: string;
}

const getProductLines = async () => {
  const response = await fetch(api.product_line);
  const json: DhartiResponse<IProductLines[]> = await response.json();
  return json.data;
};

export { getProductLines };
