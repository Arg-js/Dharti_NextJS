import React from 'react';
import BlueBackGround from '../backgrounds/BlueBackGround';
import { getAchievement } from './achievements-service-api';
import { cn } from '@/lib/utils';

const div = 'flex flex-col items-center p-4';
const paragraph_head = 'pb-2 text-4xl font-extrabold';
const para_sub_head = 'text-base font-semibold';

const achievements = {
  title:
    'Charting a Path of Excellence: Showcasing Our Remarkable Achievements',
  desc: 'Dharti Products are not just solutions; they are a dynamic force committed to transforming your business landscape. Crafted by a team of seasoned professionals ',

  // todoBE: use key in the title and value in the count
  professionals: [
    { id: 0, designation: 'Corporate', count: '110+' },
    { id: 1, designation: 'Vendor', count: '160' },
    { id: 2, designation: 'Dealer', count: '1k+' },
    { id: 3, designation: 'Lenders', count: '9K' },
  ],
};

const Achievements = async () => {
  const achievementDetails = await getAchievement();
  return (
    <BlueBackGround title={achievements.title} desc={achievements.desc}>
      <div className='grid grid-cols-2 md:pl-16'>
        <div className={cn(' border-b-2 border-r-2', div)}>
          <p className={paragraph_head}>
            {achievementDetails.counter_corporate}
          </p>
          <p className={para_sub_head}>
            {achievements.professionals[0].designation}
          </p>
        </div>
        <div className={cn('border-b-2', div)}>
          <p className={paragraph_head}>{achievementDetails.counter_vendor}</p>
          <p className={para_sub_head}>
            {achievements.professionals[1].designation}
          </p>
        </div>
        <div className={cn('border-r-2', div)}>
          <p className={paragraph_head}>{achievementDetails.counter_dealer}</p>
          <p className={para_sub_head}>
            {achievements.professionals[2].designation}
          </p>
        </div>
        <div className={div}>
          <p className={paragraph_head}>{achievementDetails.counter_lender}</p>
          <p className={para_sub_head}>
            {achievements.professionals[3].designation}
          </p>
        </div>
      </div>
    </BlueBackGround>
  );
};

export default Achievements;
