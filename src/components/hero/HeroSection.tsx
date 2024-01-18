import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
type Hero = 'title' | 'image';

const HeroSection = ({ title, image }: Record<Hero, string>) => {
  return (
    <div className='relative w-full '>
      <Image
        src={image}
        alt='background for about in hero section'
        // todo: don't use static value brightness-[30%]'
        className='w-inherit h-28 object-cover brightness-[30%] md:h-[232px]'
      />
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
