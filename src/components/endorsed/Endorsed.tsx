import React from 'react';
import BlueBackGround from '../backgrounds/BlueBackGround';
import {
  endorsementIcon1,
  endorsementIcon2,
  endorsementIcon3,
  endorsementIcon4,
  endorsementIcon5,
  endorsementIcon6,
  partnerIcon1,
  partnerIcon2,
} from '@/assets/svg';
import Image from 'next/image';

const endorsementIconGrp1 = [
  { id: 0, image: endorsementIcon1 },
  { id: 1, image: endorsementIcon2 },
  { id: 2, image: endorsementIcon3 },
];
const endorsementIconGrp2 = [
  { id: 3, image: endorsementIcon4 },
  { id: 4, image: endorsementIcon5 },
  { id: 5, image: endorsementIcon6 },
];
// todo: move this to constant file
export const endorsementIcons = [
  ...endorsementIconGrp1,
  // todo: this image is creating error
  // partnerIcon1,
  ...endorsementIconGrp2,
  // partnerIcon2,
];

const Endorsed = () => {
  return (
    <BlueBackGround
      title={'Endorsed by Lenders: A Trusted Track Record'}
      desc={
        ' Dharti Products are not just solutions; they are a dynamic force committed to transforming your business landscape. Crafted by a team of seasoned professionals'
      }
    >
      {/* todo: if pointed out make two parent : flex flex-col items-center gap-8 child: flex gap-x-[60] */}
      {/* <div className='grid flex-1 grid-cols-3 justify-items-center gap-y-8'>
        {endorsementIcons.map(({ id, image }) => (
          <Image
            key={id}
            src={image}
            alt='endorsementIcon'
            className='grid-item'
          />
        ))}
      </div> */}
      <div className='flex flex-1 flex-col items-center gap-8'>
        <div className='flex gap-8'>
          {endorsementIconGrp1.map(({ id, image }) => (
            <Image
              key={id}
              src={image}
              alt='endorsementIcon'
              className='grid-item'
            />
          ))}
        </div>
        <div className='flex gap-8'>
          {endorsementIconGrp2.map(({ id, image }) => (
            <Image
              key={id}
              src={image}
              alt='endorsementIcon'
              className='grid-item'
            />
          ))}
        </div>
      </div>
    </BlueBackGround>
  );
};

export default Endorsed;
