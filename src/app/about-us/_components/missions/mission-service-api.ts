import { DhartiResponse } from '@/services/service-api';
import { api } from './service-api';

export interface IMissionList {
  id: number;
  list: string;
}
// todo: api needs changes
// const getMission = async () => {
//   try {
//     const response = await fetch(api.missionList);
//     const json: DhartiResponse<IMissionList[]> = await response.json();
//     console.log('first-->', json.data);
//     return json.data;
//   } catch (e) {
//     console.error(e);
//   }
// };

const getMissionList = async () => {
  try {
    const response = await fetch(api.missionList);
    const json: DhartiResponse<IMissionList[]> = await response.json();
    return json.data;
  } catch (e) {
    console.error(e);
  }
};

export { getMissionList };
