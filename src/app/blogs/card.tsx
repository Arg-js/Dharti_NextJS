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

export type CardProps = {
  tag: string;
  date: string;
  title: string;
  description: string;
  imageSrc: string;
  href: string;
};

export default function BlogCard({
  tag,
  date,
  title,
  description,
  imageSrc,
  href,
}: CardProps) {
  return (
    <Card className='w-full rounded-3xl border border-[#EDF2F7] p-3'>
      <CardHeader className='gap-3 p-2'>
        <div className='relative h-[215px] w-full overflow-hidden rounded-xl'>
          <Image
            src={imageSrc}
            alt={`Image for ${title}`}
            fill
            className='object-cover'
          />
        </div>
        <div className='mt-4 flex w-full justify-between'>
          <span className='text-xs font-bold text-[#F8AD44]'>{tag}</span>
          <span className='text-sm font-semibold text-[#A0AEC0]'>{date}</span>
        </div>
      </CardHeader>
      <CardContent>
        <CardTitle className='mt-2 text-left text-xl font-extrabold text-[#2D3748]'>
          <Link href={href}>{title}</Link>
        </CardTitle>
        <CardDescription className='mt-4 line-clamp-3 text-left text-[#4A5568]'>
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className='mt-4 p-0 px-2'>
        <Link
          href={href}
          className='flex items-center gap-3 text-sm font-semibold text-[#639840]'
        >
          Read More <ChevronRight />
        </Link>
      </CardFooter>
    </Card>
  );
}
