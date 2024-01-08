import React from 'react';
import BlueBackGround from '../backgrounds/BlueBackGround';

const Achievements = () => {
  return (
    <BlueBackGround
      title={
        'Charting a Path of Excellence: Showcasing Our Remarkable Achievements'
      }
      desc={
        'Dharti Products are not just solutions; they are a dynamic force committed to transforming your business landscape. Crafted by a team of seasoned professionals '
      }
    >
      <div className='grid grid-cols-2 md:pl-16'>
        <div className='flex flex-col items-center border-b-2 border-r-2 p-4'>
          <p className='pb-2 text-4xl font-extrabold'>110+</p>
          <p className='text-base font-semibold'>Farmer</p>
        </div>
        <div className='flex flex-col items-center border-b-2 p-4'>
          <p className='pb-2 text-4xl font-extrabold'>160</p>
          <p className='text-base font-semibold'>Retailers</p>
        </div>
        <div className=' flex flex-col items-center border-r-2 p-4'>
          <p className='pb-2 text-4xl font-extrabold'>1k+</p>
          <p className='text-base font-semibold'>Disbursement</p>
        </div>
        <div className='flex flex-col items-center p-4'>
          <p className='pb-2 text-4xl font-extrabold'>9k+</p>
          <p className='text-base font-semibold'>Traders</p>
        </div>
      </div>
    </BlueBackGround>
  );
};

export default Achievements;
