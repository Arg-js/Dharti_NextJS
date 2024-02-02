import Image from 'next/image';
import React from 'react';
import { getAbout } from './about-service-api';

const About = async () => {
  const about = await getAbout();
  return (
    <div className='container grid grid-rows-1 gap-x-[120px] lg:mt-20 lg:grid-cols-2 '>
      <div className='grid-item pt-10 lg:pt-[89px] '>
        <p className='extraBold32 mb-3 '>{about?.about_title}</p>
        <p className='text-foundation_gray_B200'>{about?.about_description} </p>
      </div>
      <div className='mx-1 my-10 flex flex-1 sm:m-10 lg:relative lg:m-0 lg:block'>
        <Image
          width={'411'}
          height={'319'}
          alt={`about-us-image-1`}
          // todo: but i always get the images
          src={about?.about_us_image ?? ''}
          className='relative top-[20%] z-10 w-72 rounded-[20px] sm:top-[34%] sm:w-[411px] lg:absolute'
        />
        <Image
          width={'411'}
          height={'319'}
          alt='about-us-image-2'
          src={about?.about_us_image_two ?? ''}
          className='absolute right-4 w-72 rounded-lg sm:right-20 sm:w-[411px] lg:absolute'
        />
      </div>
    </div>
  );
};

export default About;
