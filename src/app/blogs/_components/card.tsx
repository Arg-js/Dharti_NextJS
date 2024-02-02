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
import parse from 'html-react-parser';

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
}: Omit<IBlogDetails, 'id'>) {
  return (
    <Card className='w-full max-w-[500px] rounded-3xl border border-gray_100 p-3'>
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
          <span className='text-xs font-bold uppercase text-secondary'>
            {category?.title}
          </span>
          <span className='text-sm font-semibold text-gray_400'>{date}</span>
        </div>
      </CardHeader>
      <CardContent>
        <CardTitle className='mt-2 text-left text-xl font-extrabold text-gray_700'>
          <Link href={`/blogs/${slug}`}>{title}</Link>
        </CardTitle>
        <CardDescription className='mt-4 line-clamp-3 text-left text-gray_600'>
          {parse(description)}
        </CardDescription>
      </CardContent>
      <CardFooter className='mt-4 p-0 px-2'>
        <Link
          href={`/blogs/${slug}`}
          className='flex items-center gap-3 text-sm font-semibold text-primary-500'
        >
          Read More <ChevronRight />
        </Link>
      </CardFooter>
    </Card>
  );
}
