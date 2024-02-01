import React from 'react';
import BlueBackGround from '../backgrounds/BlueBackGround';
import {
  endorsementIcon1,
  endorsementIcon2,
  endorsementIcon3,
  endorsementIcon4,
  endorsementIcon5,
  endorsementIcon6,
} from '@/assets/svg';
import Image from 'next/image';
import { getSupportingPartners } from '@/services/supporting-partners-api';

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

const Endorsed = async () => {
  const supportingPartners = await getSupportingPartners();
  const supportingPartnersGrp1 = supportingPartners?.slice(0, 3);
  const supportingPartnersGrp2 = supportingPartners?.slice(3, 6);
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
      <div className='flex flex-1 flex-col '>
        <div className='container relative my-5 flex flex-nowrap gap-5 overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] md:w-[30dvw]'>
          <div className='flex animate-marquee-infinite items-center justify-around justify-items-center gap-5 '>
            {/* todo: auto width fit */}
            {supportingPartnersGrp1?.map(({ id, image }) => (
              <div
                className='relative aspect-[3/2] h-[68px] mix-blend-darken'
                key={id}
              >
                <Image
                  src={image}
                  alt='endorsementIcon'
                  objectFit='contain'
                  fill
                />
              </div>
            ))}
          </div>
          <div className='flex animate-marquee-infinite items-center justify-around justify-items-center gap-5 '>
            {/* todo: auto width fit */}
            {supportingPartnersGrp1?.map(({ id, image }) => (
              <div
                className='relative aspect-[3/2] h-[68px] mix-blend-darken'
                key={id}
              >
                <Image
                  src={image}
                  alt='endorsementIcon'
                  objectFit='contain'
                  fill
                />
              </div>
            ))}
          </div>
        </div>
        <div className='flex  gap-2 md:gap-8'>
          {supportingPartnersGrp2?.map(({ id, image }) => (
            <div
              className='relative aspect-[3/2] h-[68px] mix-blend-darken'
              key={id}
            >
              <Image
                objectFit='contain'
                src={image}
                alt='endorsementIcon'
                fill
              />
            </div>
          ))}
        </div>
      </div>
    </BlueBackGround>
  );
};

export default Endorsed;
