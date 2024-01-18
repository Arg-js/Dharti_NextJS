import { initialFormDetails } from './components/ContactForm';
import { api } from './service-api';

export const sendContactUsMessage = async (data: typeof initialFormDetails) => {
  try {
    const res = await fetch(api.contactUs, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const { data: resData } = (await res.json()) as { data: string };
    return resData;
  } catch (error) {
    console.error(error);
  }
};
