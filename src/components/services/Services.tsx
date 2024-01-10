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
    // todo: inherit bg color
    <div className='container flex flex-col items-center gap-8 pb-8 lg:flex-row lg:pb-0'>
      {services.map(({ title, id, image }) => (
        <Service
          //todo: this will be replaced by api ko till then let the key be the index
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
