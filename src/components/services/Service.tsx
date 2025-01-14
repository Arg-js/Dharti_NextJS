import Image from 'next/image';
import React from 'react';

const Service: React.FC<{ title: string; content: string; image: string }> = ({
  title,
  content,
  image,
}) => {
  return (
    // providing margin here would not make any difference since it is an overflowing element
    <div className=' flex h-[284px] w-[270px] flex-col items-center gap-2 rounded-[20px] bg-white px-10 py-[60px] text-center shadow-md sm:w-[306px]'>
      <Image src={image} alt={title} className='mb-4' width={60} height={60} />
      <p className='text-lg font-bold'>{title}</p>
      <p className='text-sm font-normal'>{content}</p>
    </div>
  );
};

export default Service;
