import React from 'react';
import Services from '../services/Services';
import { mapOfIndia } from '../../../public';

// todo: change the name of this component
export const Header = () => {
  return (
    <div className='relative bg-primary_background '>
      {/* todo: padding bottom to adjust the services card overflow + the required gap */}
      {/* todo: 142(half of height of service card)+80 ie.(pb-20) = 222 */}
      <div className='container top-20 flex flex-col items-center gap-7 pb-8 pt-20 lg:flex-row lg:pb-[222px]'>
        <div className='flex-1'>
          <div className='text-5xl font-extrabold text-gray_900'>
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
      <div className='lg:absolute lg:bottom-0 lg:left-1/2 lg:-translate-x-1/2 lg:translate-y-1/2'>
        <Services />
      </div>
    </div>
  );
};
