import React from 'react';

const Service: React.FC<{ title: string; content: string }> = ({
  title,
  content,
}) => {
  return (
    // todo make the height variable
    <div className='h-[284px] w-[306px] rounded-[20px] bg-white px-10 py-[60px] text-center shadow-md'>
      <p className='text-lg font-bold'>{title}</p>
      <p className='text-sm font-normal'>{content}</p>
    </div>
  );
};

export default Service;
