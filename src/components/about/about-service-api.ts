import { DhartiResponse } from '@/services/service-api';
import { api } from './service-api';

export interface IAboutDescription {
  about_title: string;
  about_description: string;
  about_us_image: string;
  about_us_image_two: string;
}

const getAbout = async () => {
  try {
    const response = await fetch(api.about);
    const json: DhartiResponse<IAboutDescription> = await response.json();
    return json.data;
  } catch (e) {
    console.error(e);
  }
};

export { getAbout };
