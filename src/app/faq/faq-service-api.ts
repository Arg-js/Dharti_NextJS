import { DhartiResponse } from '@/services/service-api';
import { api } from './service-api';

export interface IFaq {
  id: number;
  question: string;
  answer: string;
}

const getFaq = async () => {
  try {
    const response = await fetch(api.faq);
    const json: DhartiResponse<IFaq[]> = await response.json();
    return json.data;
  } catch (e) {
    console.error('error-->', e);
  }
};

export { getFaq };
