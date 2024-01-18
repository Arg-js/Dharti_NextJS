export interface DhartiResponse<T> {
  data: T;
  status: 0 | 1;
  message: string;
}

export const api = {
  supporting_partners: 'http://202.166.198.129:5028/api/supporting-partner/',
};
