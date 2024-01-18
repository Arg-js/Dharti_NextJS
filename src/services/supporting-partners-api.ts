import { DhartiResponse, api } from './service-api';

export interface ISupportingPartners {
  id: number;
  image: string;
}

const getSupportingPartners = async () => {
  try {
    const response = await fetch(api.supporting_partners);
    const json: DhartiResponse<ISupportingPartners[]> = await response.json();
    return json.data;
  } catch (e) {
    console.error(e);
  }
};

export { getSupportingPartners };
