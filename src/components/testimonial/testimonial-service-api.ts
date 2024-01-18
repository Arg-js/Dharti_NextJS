import { api } from '@/components/testimonial/service-api';
import { DhartiResponse } from '@/services/service-api';

export interface ITestimonial {
  id: number;
  name: string;
  image: string;
  description: string;
  slug: string;
  rating: string;
  category: Category;
}

export interface Category {
  id: number;
  title: string;
}

const getTestimonial = async () => {
  try {
    const response = await fetch(api.testimonial);
    const json: DhartiResponse<ITestimonial[]> = await response.json();
    return json.data;
  } catch (e) {
    console.error(e);
  }
};

export { getTestimonial };
