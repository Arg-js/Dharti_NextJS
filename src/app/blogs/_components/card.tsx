import * as React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { IBlogDetails } from '../blogs-service-api';

export type CardProps = {
  tag: string;
  date: string;
  title: string;
  description: string;
  imageSrc: string;
  href: string;
};

export function BlogCard({
  title,
  image,
  description,
  date,
  slug,
  category,
  // todo: i want to omit id from the blogDetails
}: IBlogDetails) {
  return (
    <Card className='w-full rounded-3xl border border-[#EDF2F7] p-3'>
      <CardHeader className='gap-3 p-2'>
        <div className='relative h-[215px] w-full overflow-hidden rounded-xl'>
          <Image
            src={image}
            alt={`Image for ${title}`}
            fill
            className='object-cover'
          />
        </div>
        <div className='mt-4 flex w-full justify-between'>
          <span className='text-xs font-bold text-[#F8AD44]'>
            {category.title}
          </span>
          <span className='text-sm font-semibold text-[#A0AEC0]'>{date}</span>
        </div>
      </CardHeader>
      <CardContent>
        <CardTitle className='mt-2 text-left text-xl font-extrabold text-[#2D3748]'>
          <p>{title}</p>
        </CardTitle>
        <CardDescription className='mt-4 line-clamp-3 text-left text-[#4A5568]'>
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className='mt-4 p-0 px-2'>
        <p className='flex items-center gap-3 text-sm font-semibold text-[#639840]'>
          Read More <ChevronRight />
        </p>
      </CardFooter>
    </Card>
  );
}
