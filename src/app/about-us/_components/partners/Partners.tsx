import { endorsementIcons } from '@/components/endorsed/Endorsed';
import { getSupportingPartners } from '@/services/supporting-partners-api';
import Image from 'next/image';
import React from 'react';

const Partners = async () => {
  const supportingPartners = await getSupportingPartners();
  return (
    <div className='w-full bg-blue_background px-4 md:mb-10  md:py-8 lg:px-8'>
      <div className='container flex flex-col items-center py-3 md:space-y-[69px] md:pt-5'>
        <h2 className='text-lg font-bold md:text-3xl'>
          Introducing Our Supporting Partner
        </h2>
        {/* <div className='flex w-full flex-col items-center md:flex-row md:space-x-20'> */}
        <div className='grid grid-cols-6 items-center justify-center justify-items-center gap-2 xl:gap-20'>
          {supportingPartners?.map(({ image, id }) => {
            return (
              <div
                key={id}
                className='relative aspect-video h-[60px] text-center mix-blend-darken'
              >
                <Image
                  key={id}
                  alt='company logo'
                  src={image}
                  objectFit='contain'
                  fill
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Partners;
