import React from 'react';
import ContactForm from './components/ContactForm';
import Image from 'next/image';
import { heroSectionTractorBg, contactImage } from '@/assets/svg';
import HeroSection from '@/components/hero/HeroSection';
const page = () => {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center '>
      <HeroSection title='Contact Us' image={heroSectionTractorBg} />
      <div className='container mb-5 grid grid-rows-1 gap-x-[120px] md:mb-0 md:grid-cols-2 md:py-20 '>
        <div className='grid-item'>
          <ContactForm />
        </div>
        <div className='grid-item'>
          <div className='relative h-52 w-full md:h-[767px]'>
            <Image
              src={contactImage}
              alt='contact-image'
              fill
              objectFit='cover'
              className='rounded-l-lg'
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
