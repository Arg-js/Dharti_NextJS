import { endorsementIcons } from '@/components/endorsed/Endorsed';
import Image from 'next/image';
import React from 'react';

const Partners = () => {
  return (
    <div className='w-full bg-blue_background px-4 md:mb-10  md:py-8 lg:px-8'>
      <div className='container flex flex-col items-center py-3 md:space-y-[69px] md:pt-5'>
        <h2 className='text-lg font-bold md:text-3xl'>
          Introducing Our Supporting Partner
        </h2>
        {/* <div className='flex w-full flex-col items-center md:flex-row md:space-x-20'> */}
        <div className='flex justify-center gap-20'>
          {endorsementIcons.map(({ image, id }) => {
            return (
              // <div key={id} className='relative h-[60px] w-auto text-center'>
              <Image
                key={id}
                alt='company logo'
                src={image}
                // fill
                // className='h-[10px]'
              />
              // </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Partners;
