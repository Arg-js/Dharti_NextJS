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
        className='w-inherit h-[232px] object-cover brightness-[30%]'
      />
      <div className='absolute top-0 flex h-full w-full items-center justify-center'>
        <div className=' flex flex-col items-center justify-center'>
          <p className='pb-[6px] text-[32px] font-bold text-white'>{title}</p>
          <div className='flex'>
            <Link href={'/'}>
              {/* todo: add space between > */}
              <p className='text-sm font-semibold text-white'>{`Home > `}</p>
            </Link>
            <p className='text-sm font-semibold text-white'>{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
