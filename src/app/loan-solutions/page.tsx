import {
  financeImage,
  financeService1Image,
  financeService2Image,
  financeService3Image,
  heroSectionTractorBg,
} from '@/assets/svg';

import HeroSection from '@/components/hero/HeroSection';
import ProductLine from '@/components/productLine/productLine';
import React from 'react';
import Financing from './_components/financing/financing';

// todoBE: move this ts somewhere else during api consumption
export interface IPurchaseBillFinance {
  image: string;
  title: string;
  subTitle: string;
  services: Array<IService>;
}

interface IService {
  id: number;
  title: string;
  desc: string;
  logo: string;
}

const purchaseBillFinance: IPurchaseBillFinance = {
  image: financeImage,
  title: 'Purchase Bill Financing',
  subTitle:
    'Empowering Corporates and Retailers with Tailored Purchase Bill Financing Solutions for Sustainable Growth',
  services: [
    {
      id: 0,
      title: 'Automatic Invoice Payment',
      desc: 'Automatic payments help you to arrange payments on a certain date without doing it manually again.',
      logo: financeService1Image,
    },
    {
      id: 1,
      title: 'Clear payment history',
      desc: 'Clear payment history helps you to track your business expenses on specific dates.',
      logo: financeService2Image,
    },
    {
      id: 2,
      title: 'Use of multi-card payments',
      desc: `Have more than one debit or credit card? Don&apos;t worry, we support payments using more than one card.`,
      logo: financeService3Image,
    },
    {
      id: 3,
      title: 'Use of multi-card payments',
      desc: `Have more than one debit or credit card? Don&apos;t worry, we support payments using more than one card.`,
      logo: financeService3Image,
    },
    {
      id: 4,
      title: 'Use of multi-card payments',
      desc: `Have more than one debit or credit card? Don&apos;t worry, we support payments using more than one card.`,
      logo: financeService3Image,
    },
  ],
};

const page = () => {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center '>
      <HeroSection title='Loan Solutions' image={heroSectionTractorBg} />
      <ProductLine />
      {new Array(3).fill(null).map((_, index) => {
        return (
          <Financing
            key={index}
            financeService={purchaseBillFinance}
            variant={(index + 1) % 2 === 0 ? 'DEFAULT' : 'REVERSE'}
          />
        );
      })}
    </main>
  );
};

export default page;
