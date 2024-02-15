import React from 'react';
import Services from '../services/Services';
import { mapOfIndia } from '../../../public';
import { Button } from '../ui/button';
import Link from 'next/link';
import Image from 'next/image';

export const Header = () => {
  return (
    <div className='relative bg-primary_background'>
      {/* note: padding bottom to adjust the services card overflow + the required gap */}
      {/* note: 142(half of height of service card)+80 ie.(pb-20) = 222 */}
      <div className='container top-20 flex flex-col items-center gap-7 pb-8 pt-10 md:pt-20 lg:flex-row xl:pb-[222px]'>
        <div className='flex-1'>
          <div className='text-3xl font-extrabold text-gray_900 sm:text-3xl'>
            <p>Transforming Finance:</p>
            <p>Pioneering the Future of Seamless Supply Chains</p>
          </div>
          <div className='mt-3 text-base font-medium text-gray_600'>
            Unlocking Opportunities, Optimizing Cash Flow, and Empowering
            Businesses Through Innovative Supply Chain Financing Solutions
          </div>
          <Link
            href={`/loan-solutions`}
            className='flex justify-center md:justify-start'
          >
            <Button className='button-hover mt-10 h-auto rounded-xl px-8 py-5 shadow-primary_background_200 hover:bg-primary'>
              Explore our Solution
            </Button>
          </Link>
        </div>
        <div className='hidden lg:block'>
          <Image
            alt={'map of India'}
            height={562}
            width={523}
            src={mapOfIndia}
          />
        </div>
      </div>
      <div className='w-full xl:absolute xl:bottom-0 xl:translate-y-1/2'>
        <Services />
      </div>
    </div>
  );
};
