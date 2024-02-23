import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ILoanSolution } from '../../loan-solution-service-api';

const Financing = ({
  financeService,
  variant,
}: {
  financeService: ILoanSolution;
  variant?: 'REVERSE' | 'DEFAULT';
}) => {
  return (
    <div
      className={cn(
        `m-3 flex flex-col items-center py-5 md:py-2 lg:m-0 lg:w-full lg:py-10 xl:py-20`,
        { 'bg-light_blue': !variant, 'bg-white': variant === 'REVERSE' }
      )}
    >
      {/* todo: make this a different component */}
      <p className='mr-3 text-lg font-bold md:text-3xl'>
        {financeService.title}
      </p>
      <p className='py-3 text-center text-base font-normal text-gray_450 lg:mb-10 xl:mb-20'>
        {financeService.description}
      </p>
      {/* ends */}
      <div
        className={cn(
          ` container grid grid-cols-1 lg:m-4 lg:grid-cols-2 lg:gap-5 2xl:m-0 2xl:gap-20`,
          {
            'order-2': variant === 'REVERSE',
          }
        )}
      >
        <div
          className={cn(
            `m-3 flex justify-center rounded-3xl  align-middle lg:m-0`,
            {
              'order-2 bg-light_blue': variant === 'REVERSE',
              'bg-white': !variant,
            }
          )}
        >
          <Image
            width={419}
            height={302}
            alt='purchase bill finance'
            src={financeService.image}
          />
        </div>

        <div>
          <ul className='mx-3 mt-9 lg:mx-0'>
            {financeService.loans.map(({ id, title, description, image }) => {
              return (
                <li key={id} className='mb-12 flex gap-4'>
                  <div className='flex aspect-square h-8 justify-center rounded-xl bg-primary md:h-12'>
                    <Image
                      height={'25'}
                      width={'25'}
                      alt='finance services logo'
                      src={image}
                    />
                  </div>
                  <div>
                    {/* todo: which heading to give where */}
                    <h5 className='bold20 mb-1'>{title}</h5>
                    <p className='normal14 text-gray-500'>{description}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Financing;
