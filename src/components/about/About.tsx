import Image from 'next/image';
import React from 'react';
import { getAbout } from './about-service-api';

// const aboutDharti = {
//   title: 'About Dharti tech',
//   images: [
//     { id: 0, image: aboutImage1 },
//     { id: 1, image: aboutImage2 },
//   ],
//   details:
//     'Lorem ipsum dolor sit amet consectetur. A venenatis eu pretium quam cursus. Consequat urna pellentesque sit proin vitae molestie at a. Nunc lacinia tellus molestie vulputate lacus ullamcorper in. Condimentum metus gravida mauris ultrices pretium varius. Amet lobortis duis donec nunc convallis. Mauris urna sed sed metus cras egestas accumsan egestas sed. Id dui quisque non vel faucibus massa tincidunt sit fermentum. A a rutrum aliquam egestas porta non. Varius ultricies commodo nulla semper diam amet vitae scelerisque. Morbi sagittis dolor mauris massa sed volutpat. Semper id magna nullam quis sapien.',
// };

const About = async () => {
  // todo: get images in array like above ⬆️.
  const about = await getAbout();
  return (
    // todo: my-20
    <div className='container grid grid-rows-1 gap-x-[120px] lg:mt-20 lg:grid-cols-2 '>
      <div className='grid-item pt-10 lg:pt-[89px] '>
        <p className='extraBold32 mb-3 '>{about?.about_title}</p>
        <p className='normal16 text-foundation_gray_B200'>
          {about?.about_description}{' '}
        </p>
      </div>
      {/* todo: this does not work */}
      {/* <div className='relative flex flex-1 justify-end'> */}
      <div className='mx-1 my-10 flex flex-1 sm:m-10 lg:relative lg:m-0 lg:block'>
        <Image
          width={'411'}
          height={'319'}
          // todo: make this dynamic
          alt='about-us-image-1'
          // todo: but i always get the images
          src={about?.about_us_image ?? ''}
          className='relative top-[20%] z-10 w-72 rounded-[20px] sm:top-[34%] sm:w-[411px] lg:absolute'
        />
        <Image
          width={'411'}
          height={'319'}
          alt='about-us-image-2'
          src={about?.about_us_image_two ?? ''}
          className='absolute right-4 w-72 rounded-lg sm:right-20 sm:w-[411px] lg:absolute'
        />
      </div>
    </div>
  );
};

export default About;
