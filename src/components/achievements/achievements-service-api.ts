import { DhartiResponse } from '@/services/service-api';
import { api } from './service-api';

export interface IAchievements {
  counter_corporate: string;
  counter_vendor: string;
  counter_dealer: string;
  counter_lender: string;
}

const getAchievement = async () => {
  const response = await fetch(api.achievements);
  const json: DhartiResponse<IAchievements> = await response.json();
  return json.data;
};

export { getAchievement };
