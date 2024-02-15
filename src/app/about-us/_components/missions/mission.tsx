import Image from 'next/image';
import React from 'react';
import { getMissionDetails, getMissionList } from './mission-service-api';
import './mission.css';

// const missionDetails = {
//   title: 'Our mission and Goal',
//   subTitle:
//     'Lorem ipsum dolor sit amet consectetur. A venenatis eu pretium quam cursus. Consequat urna',
//   image: missionImage,
//   description: [
//     { id: 0, content: 'Lorem ipsum dolor sit amet consectetur.' },
//     { id: 1, content: 'Lorem ipsum dolor sit amet consectetur.' },
//     { id: 2, content: 'Lorem ipsum dolor sit amet consectetur.' },
//     { id: 3, content: 'Lorem ipsum dolor sit amet consectetur.' },
//     { id: 4, content: 'Lorem ipsum dolor sit amet consectetur.' },
//   ],
// };

const OurMission = async () => {
  // todoBE: make both of these come from same api like above ⬆️
  const missionDetails = await getMissionDetails();
  const missionList = await getMissionList();
  return (
    <div className='container my-10 grid grid-rows-1 items-center gap-5 sm:my-32 md:mb-20 md:grid-cols-2 lg:my-20 lg:pt-14 xl:gap-x-[120px] xl:pt-28'>
      <div className='relative h-96 w-full overflow-hidden rounded-[20px] md:order-first'>
        <Image
          src={missionDetails?.our_mission_image || ''}
          alt='OurMission_image'
          fill
          objectFit='cover'
        />
      </div>
      <div className='grid-item order-first'>
        <h1 className='extraBold32 mb-3'>
          {missionDetails?.our_mission_title}
        </h1>
        <p className='text-foundation_gray_B200'>
          {missionDetails?.our_mission_description}
        </p>
        <ul className='mt-7'>
          {missionList?.map(({ list, id }) => {
            return (
              <li key={id} className='my-4 flex items-center space-x-3 '>
                <p className='list text-sm font-medium text-gray_600'>{list}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default OurMission;
