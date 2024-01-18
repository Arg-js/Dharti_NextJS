import { DhartiResponse } from '@/services/service-api';
import { api } from './service-api';

export interface IAchievements {
  counter_farmer: string;
  counter_retailers: string;
  counter_disbursement: string;
  counter_traders: string;
}

const getAchievement = async () => {
  const response = await fetch(api.achievements);
  const json: DhartiResponse<IAchievements> = await response.json();
  return json.data;
};

export { getAchievement };
