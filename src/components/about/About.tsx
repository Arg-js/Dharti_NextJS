import { aboutImage1, aboutImage2 } from '@/assets/svg';
import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    // todo: my-20
    <div className='container grid grid-rows-1 gap-x-[120px] md:grid-cols-2 lg:mt-20 '>
      <div className='grid-item pt-[89px] '>
        <p className='extraBold32 mb-3 '>About Dharti tech</p>
        <p className='normal16 text-foundation_gray_B200'>
          Lorem ipsum dolor sit amet consectetur. A venenatis eu pretium quam
          cursus. Consequat urna pellentesque sit proin vitae molestie at a.
          Nunc lacinia tellus molestie vulputate lacus ullamcorper in.
          Condimentum metus gravida mauris ultrices pretium varius. Amet
          lobortis duis donec nunc convallis. Mauris urna sed sed metus cras
          egestas accumsan egestas sed. Id dui quisque non vel faucibus massa
          tincidunt sit fermentum. A a rutrum aliquam egestas porta non. Varius
          ultricies commodo nulla semper diam amet vitae scelerisque. Morbi
          sagittis dolor mauris massa sed volutpat. Semper id magna nullam quis
          sapien.{' '}
        </p>
      </div>
      {/* todo: this doesnot work */}
      {/* <div className='relative flex flex-1 justify-end'> */}
      <div className='m-2 flex flex-1 lg:relative lg:m-0 lg:block'>
        <Image
          width={'411'}
          height={'319'}
          alt='about-us-image-1'
          src={aboutImage1}
          // todo: convert this style to class name
          style={{
            borderRadius: '20px',
            border: '0',
            objectFit: 'contain',
          }}
          // todo: make 127px in percentage
          className='border-nextColor z-10 rounded-lg border-2 lg:absolute lg:top-[127px]'
        />
        <Image
          width={'411'}
          height={'319'}
          alt='about-us-image-2'
          src={aboutImage2}
          style={{
            borderRadius: '20px',
            objectFit: 'contain',
            border: '0',
          }}
          className='border-nextColor right-20 rounded-lg border-2 lg:absolute'
        />
      </div>
    </div>
  );
};

export default About;
