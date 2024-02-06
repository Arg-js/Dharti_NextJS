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
        <div className='my-5 flex gap-5'>
          <div className='flex items-center justify-around justify-items-center gap-5 '>
            {/* todo: auto width fit for autoscroll*/}
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
        <div className='flex gap-2 md:gap-8'>
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
