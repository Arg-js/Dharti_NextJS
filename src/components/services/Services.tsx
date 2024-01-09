import React from 'react';
import Service from './Service';

const Services = () => {
  return (
    // todo: inherit bg color
    <div className='container flex gap-8 bg-current bg-inherit  '>
      {new Array(4).fill(null).map((_, index) => (
        <Service
          //todo: this will be replaced by api ko till then let the key be the index
          key={index}
          title='Support'
          content='Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim '
        />
      ))}
    </div>
  );
};

export default Services;
