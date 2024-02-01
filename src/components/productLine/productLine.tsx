import React from 'react';
import { Card, CardContent, CardHeader } from '../ui/card';
import Image from 'next/image';
import { getProductLines } from './product-line-service-api';

// todoBE: get this from BE as well
const productDetails = {
  title: "Unlock Growth with Dharti's Product Line",
  subTitle:
    'Our products are more than tools; they are catalysts for growth and efficiency. Explore the Dharti advantage',
};
const ProductLine = async () => {
  const productLines = await getProductLines();
  const productLine = productLines.slice(0, 3);
  return (
    <div className='w-full md:pt-10 lg:pb-14'>
      <div className='container flex flex-col items-center py-12 md:py-2'>
        <p className='text-lg font-bold md:text-3xl'>{productDetails.title}</p>
        <p className='py-3 text-base font-normal text-gray_600'>
          {productDetails.subTitle}
        </p>
        <div className='grid grid-cols-1 gap-8 pt-10 lg:grid-cols-2 xl:grid-cols-3'>
          {productLine.map((product, index) => {
            return (
              <Card key={index} className='text-card-foreground shadow-md'>
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
                  <p className='px-4 text-sm font-normal text-gray_600 md:pb-2'>
                    {product.description}
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
