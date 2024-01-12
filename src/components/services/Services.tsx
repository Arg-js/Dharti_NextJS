import React from 'react';
import Service from './Service';
import { qualityIcon, resultIcon, salesIcon, supportIcon } from '@/assets/svg';

const services = [
  {
    id: 0,
    title: 'Support',
    image: supportIcon,
  },
  {
    id: 1,
    title: 'Quality',
    image: qualityIcon,
  },
  {
    id: 2,
    title: 'Sales',
    image: salesIcon,
  },
  {
    id: 3,
    title: 'Result',
    image: resultIcon,
  },
];

const Services = () => {
  return (
    <div className='container grid grid-cols-1 justify-items-center gap-8 pb-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:pb-0'>
      {services.map(({ title, id, image }) => (
        <Service
          key={id}
          title={title}
          image={image}
          content='Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim '
        />
      ))}
    </div>
  );
};

export default Services;
