import React from 'react';

interface IProps {
  title: string;
  desc: string;
  children: React.ReactNode;
}
const BlueBackGround = ({ title, desc, children }: IProps) => {
  return (
    <div className='w-full'>
      <div className='container flex flex-col items-center py-10 md:py-2'>
        <div className='flex flex-col space-x-2 rounded-3xl bg-light_blue p-5 md:flex-row md:space-x-6 lg:my-20 lg:p-24'>
          <div className='flex-1 space-y-3'>
            <p className='mr-3 text-lg font-bold md:text-3xl'>{title}</p>
            <p className='py-3 text-base font-normal text-gray_600'>{desc}</p>
          </div>
          <div className='flex-1'>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default BlueBackGround;
