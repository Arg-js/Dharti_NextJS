import Link from 'next/link';
import React from 'react';
type Hero = 'title' | 'breadcrumb' | 'image';

const HeroSection = ({
  title,
  breadcrumb,
  image,
}: Partial<Record<Hero, string>>) => {
  return (
    <div className='flex h-[232px] w-full items-center justify-center bg-blue_background'>
      <div className='flex flex-col items-center'>
        <p className='text-[32px] font-bold text-white'>{title}</p>
        <div className='flex'>
          <Link href={'/'}>
            <p className='text-sm font-semibold text-white'>{`Home > `}</p>
          </Link>
          <p className='text-sm font-semibold text-white'>{breadcrumb}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;