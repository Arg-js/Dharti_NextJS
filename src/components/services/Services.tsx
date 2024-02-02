import React from 'react';
import Service from './Service';
import { getServices } from './services-service-api';

const Services = async () => {
  const services = await getServices();
  return (
    <div className='container grid grid-cols-1 justify-items-center gap-8 pb-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:pb-0'>
      {services?.map(({ title, id, image, description }) => (
        <Service key={id} title={title} image={image} content={description} />
      ))}
    </div>
  );
};

export default Services;
