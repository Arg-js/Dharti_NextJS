import About from '@/components/about/About';
import { Testimonial } from '@/components/testimonial/Testimonial';
import React from 'react';
import OurMission from './_components/missions/mission';
import Partners from './_components/partners/Partners';
import HeroSection from '@/components/hero/HeroSection';

const page = () => {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center '>
      <HeroSection title='About Us' breadcrumb='About Us' />
      <About />
      <OurMission />
      <Partners />
      <Testimonial />
    </main>
  );
};

export default page;
