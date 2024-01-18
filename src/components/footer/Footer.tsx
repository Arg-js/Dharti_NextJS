import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  dhartiLogoIcon,
  instaLogo,
  facebookLogo,
  githubLogo,
  Xlogo,
} from '@/assets/svg';
import { getFooterDetails } from './footer-service-api';
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
const socialMedia = [
  { id: 0, logo: instaLogo },
  { id: 2, logo: facebookLogo },
  { id: 3, logo: Xlogo },
  { id: 1, logo: githubLogo },
];
const footer = {
  quickLinks: ['homepage', 'about', 'loan solutions', 'blogs'],
  getInTouch: {
    email: 'smth@email.com',
    phoneNumber: ['015149911', '015109922'],
  },
  socialMedia: ['logo1Image', 'logo2Image', 'logo3Image', 'logo4Image'],
};
export const Footer = async () => {
  const footerDetails = await getFooterDetails();
  return (
    <footer className=' w-full bg-muted dark:bg-gray-900'>
      <div className='container px-4 pt-8 lg:px-8'>
        <div className='grid grid-cols-1 justify-items-center gap-8 md:grid-cols-4 md:items-start '>
          <div className='flex flex-col items-center gap-6 md:items-start'>
            <Image
              src={footerDetails.logo}
              width={107}
              height={76}
              alt='dharti-logo'
            />
            {/* TODO max-w 60 ? */}
            <h2 className='max-w-60 text-center text-sm font-normal text-black md:text-start dark:text-white'>
              {footerDetails.description}
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
                      <h2 className='text-center text-sm font-semibold text-black md:text-start dark:text-white'>
                        {route.title}
                      </h2>
                      {/* TODO: last element margin Bottom reduction */}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className='text-center md:text-start'>
            <h2 className='text-base font-semibold  text-primary'>
              Get in Touch
            </h2>

            {/* todo: the ul code is being repeated */}
            <ul className='font-medium text-gray-500 dark:text-gray-400'>
              <li className='my-6'>
                <h2 className='text-sm font-semibold  text-black dark:text-white'>
                  {footerDetails?.getInTouch?.email}
                </h2>
              </li>
            </ul>
            <ul className='font-medium text-gray-500 dark:text-gray-400'>
              <li className='my-6'>
                <h2 className='text-sm font-bold  text-black dark:text-white'>
                  {footerDetails?.getInTouch?.phoneNumber?.map(
                    (phoneNum, index) => {
                      return `${phoneNum} ${
                        // todo: refactor this logic once BE gives data
                        footerDetails?.getInTouch?.phoneNumber?.length - 1 >
                        index
                          ? ','
                          : ''
                      } `;
                    }
                  )}
                </h2>
              </li>
            </ul>
          </div>
          <div>
            <h2 className='mb-4 text-base  font-semibold text-primary'>
              Social media
            </h2>
            <div className='flex gap-3 font-medium text-black dark:text-gray-400'>
              {socialMedia.map(({ logo, id }) => {
                return (
                  <Image
                    src={logo}
                    alt={'logo'}
                    height={28}
                    width={28}
                    key={id}
                  />
                );
              })}
            </div>
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
