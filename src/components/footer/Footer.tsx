import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { dhartiLogoIcon } from '@/assets/svg';
const quickLinks = [
  {
    title: 'Homepage',
    path: '/',
  },
  {
    title: 'About',
    path: '/about',
  },
  {
    title: 'Loan Solutions',
    path: '/loan',
  },
  {
    title: 'Blogs',
    path: '/blogs',
  },
];
export const Footer = () => {
  return (
    <footer className=' w-full bg-muted dark:bg-gray-900'>
      <div className='container px-4 lg:px-8  lg:pt-8'>
        <div className='grid grid-cols-1 gap-8   md:grid-cols-4 '>
          <div className='flex flex-col gap-6'>
            <Image
              src={dhartiLogoIcon}
              width={107}
              height={76}
              alt='dharti-logo'
            />
            {/* TODO max-w 60 ? */}
            <h2 className='max-w-60 text-sm font-normal text-black dark:text-white'>
              Lorem ipsum dolor sit amet consectetur. Eleifend morbi ut purus
              adipiscing.
            </h2>
          </div>
          <div>
            <h2 className='text-base font-semibold  text-primary '>
              Quick Links
            </h2>
            <ul className='font-medium text-gray-500 dark:text-gray-400'>
              {quickLinks.map((route) => {
                return (
                  <li className='my-6' key={route.title}>
                    <Link href={route.path}>
                      <h2 className='text-sm font-semibold text-black dark:text-white'>
                        {route.title}
                      </h2>
                      {/* TODO last element margin Bottom reduction */}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h2 className='text-base font-semibold  text-primary'>
              Get in Touch
            </h2>
            <ul className='font-medium text-gray-500 dark:text-gray-400'>
              <li className='my-6'>
                <h2 className='text-sm font-semibold  text-black dark:text-white'>
                  Dharti@gmail.com
                </h2>
              </li>
            </ul>
            <ul className='font-medium text-gray-500 dark:text-gray-400'>
              <li className='my-6'>
                <h2 className='text-sm font-bold  text-black dark:text-white'>
                  0155213124, 015435431
                </h2>
              </li>
            </ul>
          </div>
          <div>
            <h2 className='text-base font-semibold  text-primary'>
              Social media
            </h2>
            <ul className='font-medium text-black dark:text-gray-400'></ul>
          </div>
        </div>
        <hr />
        <div className='bg-muted px-4 py-10 py-6 md:flex md:items-center md:justify-center dark:bg-gray-700'>
          <span className='text-sm font-normal text-black sm:text-center dark:text-gray-300'>
            © Copyright {new Date().getFullYear()} . All Rights Reserved by
            Dharti
          </span>
        </div>
      </div>
    </footer>
  );
};
