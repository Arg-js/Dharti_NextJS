import About from '@/components/about/About';
import { Footer } from '@/components/footer/Footer';
import { Testimonial } from '@/components/testimonial/Testimonial';
import React from 'react';
import OurMission from './_components/missions/mission';
import Partners from './_components/partners/Partners';

const page = () => {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center '>
      {/* <About /> */}
      <OurMission />
      <Partners />
      <Testimonial />
      <Footer />
    </main>
  );
};

export default page;
