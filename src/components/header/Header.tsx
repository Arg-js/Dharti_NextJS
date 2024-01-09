import React from 'react';
import Services from '../services/Services';
import { mapOfIndia } from '../../../public';

export const Header = () => {
  return (
    <div className='bg-primary_background relative '>
      {/* todo: padding bottom to adjust the services card overflow + the required gap */}
      {/* todo: 142(half of height of service card)+80 ie.(pb-20) = 222 */}
      <div className='container top-20 flex items-center gap-7 pb-[222px] pt-20'>
        <div className='flex-1'>
          <div className='text-gray_900 text-5xl font-extrabold'>
            <p>Transforming Finance:</p>
            <p>Pioneering the Future of Seamless Supply Chains</p>
          </div>
          <div className='mt-3 text-base font-medium text-black'>
            Unlocking Opportunities, Optimizing Cash Flow, and Empowering
            Businesses Through Innovative Supply Chain Financing Solutions
          </div>
        </div>
        <div>
          <img src={mapOfIndia} />
        </div>
      </div>
      {/* todo: use flex and try */}
      {/* todo: why margin bottom doesnot work here */}
      <div className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2'>
        <Services />
      </div>
    </div>
  );
};
