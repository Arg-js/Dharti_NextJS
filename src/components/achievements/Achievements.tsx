import React from 'react';
import BlueBackGround from '../backgrounds/BlueBackGround';
import { getAchievement } from './achievements-service-api';

const achievements = {
  title:
    'Charting a Path of Excellence: Showcasing Our Remarkable Achievements',
  desc: 'Dharti Products are not just solutions; they are a dynamic force committed to transforming your business landscape. Crafted by a team of seasoned professionals ',

  professionals: [
    { id: 0, designation: 'Farmer', count: '110+' },
    { id: 1, designation: 'Retailers', count: '160' },
    { id: 2, designation: 'Disbursement', count: '1k+' },
    { id: 3, designation: 'Traders', count: '9K' },
  ],
};

const Achievements = async () => {
  const achievementDetails = await getAchievement();
  return (
    <BlueBackGround title={achievements.title} desc={achievements.desc}>
      <div className='grid grid-cols-2 md:pl-16'>
        {/* todo: the flex box is being repeated */}
        <div className='flex flex-col items-center border-b-2 border-r-2 p-4'>
          <p className='pb-2 text-4xl font-extrabold'>
            {achievementDetails.counter_farmer}
          </p>
          <p className='text-base font-semibold'>
            {achievements.professionals[0].designation}
          </p>
        </div>
        <div className='flex flex-col items-center border-b-2 p-4'>
          <p className='pb-2 text-4xl font-extrabold'>
            {achievementDetails.counter_retailers}
          </p>
          <p className='text-base font-semibold'>
            {achievements.professionals[1].designation}
          </p>
        </div>
        <div className=' flex flex-col items-center border-r-2 p-4'>
          <p className='pb-2 text-4xl font-extrabold'>
            {achievementDetails.counter_disbursement}
          </p>
          <p className='text-base font-semibold'>
            {achievements.professionals[2].designation}
          </p>
        </div>
        <div className='flex flex-col items-center p-4'>
          <p className='pb-2 text-4xl font-extrabold'>
            {achievementDetails.counter_traders}
          </p>
          <p className='text-base font-semibold'>
            {achievements.professionals[3].designation}
          </p>
        </div>
      </div>
    </BlueBackGround>
  );
};

export default Achievements;
