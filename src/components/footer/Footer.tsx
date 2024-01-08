import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
export const Footer = () => {
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

  return (
    <footer className=' w-full bg-muted dark:bg-gray-900'>
      <div className='container px-4 lg:px-8  lg:pt-8'>
        <div className='grid grid-cols-1 gap-8   md:grid-cols-4 '>
          <div className='flex flex-col gap-6'>
            <Image
              src={
                'data:image/jpeg;base64,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'
              }
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
