import About from '@/components/about/About';
import { Testimonial } from '@/components/testimonial/Testimonial';
import React from 'react';
import OurMission from './_components/missions/mission';
import Partners from './_components/partners/Partners';
import HeroSection from '@/components/hero/HeroSection';
import { heroSectionAboutBg } from '@/assets/svg';

const page = () => {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center '>
      <HeroSection title='About Us' image={heroSectionAboutBg} />
      <About />
      <OurMission />
      <Partners />
      <Testimonial />
    </main>
  );
};

export default page;
