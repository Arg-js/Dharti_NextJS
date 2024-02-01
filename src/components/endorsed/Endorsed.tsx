import React from 'react';
import BlueBackGround from '../backgrounds/BlueBackGround';
import Image from 'next/image';
import { getSupportingPartners } from '@/services/supporting-partners-api';

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
