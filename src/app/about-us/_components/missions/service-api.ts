import { baseURL } from '@/services/service-api';

export const api = {
  mission: `${baseURL}/our-mission/`,
  missionList: `${baseURL}/our-mission-list/`,
} as const;
