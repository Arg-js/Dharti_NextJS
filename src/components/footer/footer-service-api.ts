import { DhartiResponse } from '@/services/service-api';
import { api } from './service-api';

export interface IFooter {
  logo: string;
  description: string;
  getInTouch: GetInTouch;
  socialMedia: SocialMedum[];
}

export interface GetInTouch {
  email: string;
  phoneNumber: string[];
}

export interface SocialMedum {
  id: string;
  link: string;
}

const getFooterDetails = async () => {
  try {
    const response = await fetch(api.footer);
    const json: DhartiResponse<IFooter> = await response.json();
    return json.data;
  } catch (e) {
    console.log('error-->', e);
  }
};

export { getFooterDetails };
