import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Image from 'next/image';
import { starIcon, testimonialImage } from '@/assets/svg';
const testimonialData = [
  {
    id: 0,
    rating: 5,
    description: `"We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want."`,
    name: 'Jenisha Khaiguli',
    designation: 'Farmer',
    image: testimonialImage,
  },
  {
    id: 1,
    rating: 4,
    description: `"We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want."`,
    name: 'Jenisha Khaiguli',
    designation: 'Farmer',
    image: testimonialImage,
  },
  {
    id: 2,
    rating: 5,
    description: `"We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want."`,
    name: 'Jenisha Khaiguli',
    designation: 'Farmer',
    image: testimonialImage,
  },
  {
    id: 3,
    rating: 5,
    description: `"We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want."`,
    name: 'Jenisha Khaiguli',
    designation: 'Farmer',
    image: testimonialImage,
  },
];

export const Testimonial = () => {
  return (
    <div className=' w-full'>
      <div className='container flex flex-col items-center py-10 md:px-10 '>
        <p className='text-lg font-bold md:text-3xl'>{`Don't just take our words`}</p>
        <p className='texts-black pt-2 text-base font-normal text-black'>
          3940+ Happy Dharti Users
        </p>
        <div className='mt-3 grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
          {testimonialData.map(
            ({ id, image, designation, description, rating, name }) => {
              return (
                <Card key={id}>
                  <CardHeader>
                    {/* todo: ask */}
                    <div className='relative aspect-square h-48 overflow-hidden rounded-md'>
                      <Image
                        src={image}
                        alt='testimonialPerson'
                        fill
                        objectFit='cover'
                      />
                    </div>
                  </CardHeader>
                  <CardContent>
                    {/* todo: gap is 7 in figma === 2*4 = 8 */}
                    <div className='flex justify-center gap-2 pt-3'>
                      {new Array(rating).fill(null).map((_, index) => (
                        <Image key={index} alt='user rating' src={starIcon} />
                      ))}
                    </div>
                    <p className='py-5 text-base font-normal text-black '>
                      {description}
                    </p>
                    <div className='flex justify-center space-x-3'>
                      <p className='text-base font-semibold text-blue_gray'>
                        {name}
                      </p>
                      <p className='text-base font-medium text-blue_gray500'>
                        {designation}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            }
          )}
        </div>
        <div className='flex items-center md:py-6'>...</div>
      </div>
    </div>
  );
};
