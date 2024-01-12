import React from 'react';
import { Card, CardContent, CardHeader } from '../ui/card';
import Image from 'next/image';
import { productLine1, productLine2, productLine3 } from '@/assets/svg';

const products = [
  {
    title: 'Purchase Bill Financing',
    desc: 'Input financing empowers agriculture with crucial resources, enhancing yields, productivity, and safeguarding investments.',
    image: productLine1,
  },
  {
    title: 'Purchase Bill Financing',
    desc: 'Input financing empowers agriculture with crucial resources, enhancing yields, productivity, and safeguarding investments.',
    image: productLine2,
  },
  {
    title: 'Purchase Bill Financing',
    desc: 'Input financing empowers agriculture with crucial resources, enhancing yields, productivity, and safeguarding investments.',
    image: productLine3,
  },
];
const productDetails = {
  title: "Unlock Growth with Dharti's Product Line",
  subTitle:
    'Our products are more than tools; they are catalysts for growth and efficiency. Explore the Dharti advantage',
};
const ProductLine = () => {
  return (
    // todo: pb and pt not equal
    <div className='w-full md:pt-10 lg:pb-14'>
      <div className='container flex flex-col items-center py-12 md:py-2'>
        <p className='mr-3  text-lg font-bold md:text-3xl'>
          {productDetails.title}
        </p>
        <p className='texts-black py-3 text-base font-normal text-black'>
          {productDetails.subTitle}
        </p>
        <div className='grid gap-8  pt-10 md:grid-cols-2 lg:grid-cols-3'>
          {products.map((product, index) => {
            return (
              // todo: add border radius to the card
              <Card key={index} className='text-card-foreground shadow-sm'>
                <CardHeader className='p-0'>
                  <div className='relative h-72 w-full overflow-hidden rounded-t-md'>
                    <Image
                      src={product.image}
                      alt='testimonialPerson'
                      fill
                      objectFit='cover'
                    />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className='pb-3 pt-5 text-lg font-bold'>{product.title}</p>
                  <p className='px-4 text-sm font-normal text-black md:pb-2'>
                    {product.desc}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductLine;
