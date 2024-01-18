export const baseURL = process.env.VITE_APP_BACKEND_API;

export interface DhartiResponse<T> {
  data: T;
  status: 0 | 1;
  message: string;
}

export const api = {
  supporting_partners: `${baseURL}/supporting-partner/ `,
};
