import { DhartiResponse } from '@/services/service-api';
import { api } from './service-api';

export interface ILoanSolution {
  id: number;
  title: string;
  description: string;
  image: string;
  slug: string;
  loans: Loan[];
}

export interface Loan {
  id: number;
  title: string;
  description: string;
  image: string;
  slug: string;
}

const getLoanSolution = async () => {
  try {
    const response = await fetch(api.loan_solution);
    const json: DhartiResponse<ILoanSolution[]> = await response.json();
    return json.data;
  } catch (e) {
    console.error('error-->', e);
  }
};

export { getLoanSolution };
