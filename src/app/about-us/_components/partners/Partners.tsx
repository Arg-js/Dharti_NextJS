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
        <div className='lg:md-0 container relative my-5 flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] md:w-[75dvw] xl:w-[60dvw]'>
          {new Array(2).fill(null).map((_, index) => {
            return (
              <div
                key={index}
                className='flex animate-marquee-infinite items-center justify-around justify-items-center gap-2 xl:gap-16  '
              >
                {supportingPartners?.map(({ image, id }) => {
                  return (
                    <div
                      key={id}
                      className='relative aspect-video h-[60px] text-center mix-blend-color-burn'
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
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Partners;
