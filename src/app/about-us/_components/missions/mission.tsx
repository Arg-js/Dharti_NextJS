import { missionImage } from '@/assets/svg';
import Image from 'next/image';
import React from 'react';

const missionDetails = {
  title: 'Our mission and Goal',
  subTitle:
    'Lorem ipsum dolor sit amet consectetur. A venenatis eu pretium quam cursus. Consequat urna',
  image: missionImage,
  description: [
    { id: 0, content: 'Lorem ipsum dolor sit amet consectetur.' },
    { id: 1, content: 'Lorem ipsum dolor sit amet consectetur.' },
    { id: 2, content: 'Lorem ipsum dolor sit amet consectetur.' },
    { id: 3, content: 'Lorem ipsum dolor sit amet consectetur.' },
    { id: 4, content: 'Lorem ipsum dolor sit amet consectetur.' },
  ],
};

const OurMission = () => {
  return (
    <div className='container my-10 grid grid-rows-1 items-center gap-5 sm:my-32 md:mb-20 md:grid-cols-2 lg:my-20 lg:gap-x-[120px] lg:pt-14 xl:pt-28'>
      <div className='relative h-96 w-full overflow-hidden rounded-[20px]'>
        <Image
          src={missionDetails.image}
          alt='OurMission_image'
          fill
          objectFit='cover'
        />
      </div>
      <div className='grid-item'>
        <h1 className='extraBold32 mb-3'>{missionDetails.title}</h1>
        <p className='normal16 text-foundation_gray_B200'>
          {missionDetails.subTitle}
        </p>
        <ul className='mt-7'>
          {missionDetails.description.map(({ content, id }) => {
            return (
              <li key={id}>
                <div className='my-5 flex h-8 items-center space-x-3'>
                  <div className='h-8 w-8 rounded-full bg-primary_background'></div>
                  <p className='text-sm font-medium text-black'>{content}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default OurMission;
