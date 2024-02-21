import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
type Hero = 'title' | 'image';

const HeroSection = ({ title, image }: Record<Hero, string>) => {
  return (
    <div className='relative w-full '>
      <div className='relative h-28 w-full md:h-[232px]'>
        <Image
          src={image}
          alt='background for about in hero section'
          fill
          className='object-cover brightness-[30%] '
        />
      </div>
      <div className='absolute top-0 flex h-full w-full items-center justify-center'>
        <div className=' flex flex-col items-center justify-center'>
          <p className='pb-[6px] text-[32px] font-bold text-white'>{title}</p>
          <div className='flex'>
            <Link href={'/'}>
              <p className='text-sm font-semibold text-white'>
                Home &nbsp; &gt; &nbsp;
              </p>
            </Link>
            <p className='text-sm font-semibold text-white'>{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
