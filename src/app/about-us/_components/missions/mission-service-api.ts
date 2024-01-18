import { DhartiResponse } from '@/services/service-api';
import { api } from './service-api';

export interface IMissionDetails {
  our_mission_title: string;
  our_mission_description: string;
  our_mission_image: string;
}

export interface IMissionList {
  id: number;
  list: string;
}
const getMissionDetails = async () => {
  try {
    const response = await fetch(api.mission);
    const json: DhartiResponse<IMissionDetails> = await response.json();
    return json.data;
  } catch (e) {
    console.error(e);
  }
};

const getMissionList = async () => {
  try {
    const response = await fetch(api.missionList);
    const json: DhartiResponse<IMissionList[]> = await response.json();
    return json.data;
  } catch (e) {
    console.error(e);
  }
};

export { getMissionDetails, getMissionList };
