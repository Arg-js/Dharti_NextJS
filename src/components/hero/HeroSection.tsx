import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
type Hero = 'title' | 'image';

const HeroSection = ({ title, image }: Record<Hero, string>) => {
  return (
    <div className='relative h-[232px] w-full '>
      <Image
        src={image}
        alt='background for about in hero section '
        // todo: inherit height h-[232px]
        className='w-inherit absolute h-[232px] object-cover brightness-[30%]'
      />
      <div className='absolute z-30 flex h-[232px] w-full items-center justify-center'>
        <div className=' flex flex-col items-center justify-center'>
          <p className='text-[32px] font-bold text-white'>{title}</p>
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
