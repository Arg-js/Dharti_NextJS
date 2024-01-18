import { DhartiResponse } from '@/services/service-api';
import { api } from './service-api';

export interface IServices {
  id: number;
  title: string;
  image: string;
  description: string;
}

const getServices = async () => {
  try {
    const response = await fetch(api.services);
    const json: DhartiResponse<IServices[]> = await response.json();
    return json.data;
  } catch (e) {
    console.error(e);
  }
};

export { getServices };
