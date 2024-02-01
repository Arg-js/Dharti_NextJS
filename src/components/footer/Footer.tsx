import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { instaLogo, facebookLogo, githubLogo, Xlogo } from '@/assets/svg';
import { getFooterDetails } from './footer-service-api';

const listText = 'font-medium text-gray-500 dark:text-gray-400';
const quickLinks = [
  {
    title: 'Homepage',
    path: '/',
  },
  {
    title: 'About',
    path: '/about-us',
  },
  {
    title: 'Loan Solutions',
    path: '/loan-solutions',
  },
  {
    title: 'Blogs',
    path: '/blogs',
  },
];
// todo: ask BE to provide the data
const socialMedia = [
  { id: 'social_instagram', logo: instaLogo },
  { id: 'social_facebook', logo: facebookLogo },
  { id: 'social_twitter', logo: Xlogo },
  { id: 'social_youtube', logo: githubLogo },
];
// const footer = {
//   quickLinks: ['homepage', 'about', 'loan solutions', 'blogs'],
//   getInTouch: {
//     email: 'smth@email.com',
//     phoneNumber: ['015149911', '015109922'],
//   },
//   socialMedia: ['logo1Image', 'logo2Image', 'logo3Image', 'logo4Image'],
// };

export const Footer = async () => {
  const footerDetails = await getFooterDetails();

  // todo: this function will be removed once BE changes its data format else move it to another folder
  const socialMediaWithLinks = socialMedia.map((items) => {
    const link = footerDetails.socialMedia.find(({ id }) => id === items.id)
      ?.link;
    return { ...items, link };
  });

  return (
    <footer className=' w-full bg-muted dark:bg-gray-900'>
      <div className='container px-4 pt-8 lg:px-8'>
        <div className='my-6 grid grid-cols-1 justify-items-center gap-8 md:grid-cols-4 md:items-start'>
          <div className='flex flex-col items-center gap-6 md:items-start'>
            <Image
              src={footerDetails.logo}
              width={107}
              height={76}
              alt='dharti-logo'
            />
            {/* TODO max-w 60 ? */}
            <h2 className='max-w-60 text-center text-sm font-normal text-gray_600 md:text-start dark:text-white'>
              {footerDetails.description}
            </h2>
          </div>
          <div>
            <h2 className='text-base font-semibold  text-primary '>
              Quick Links
            </h2>
            <ul className={listText}>
              {quickLinks.map((route) => {
                return (
                  <li className='my-6' key={route.title}>
                    <Link href={route.path}>
                      <h2 className='text-center text-sm font-semibold text-gray_600 md:text-start dark:text-white'>
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

            <ul className={listText}>
              <li className='my-6'>
                <h2 className='text-sm font-semibold text-gray_600 dark:text-white'>
                  {footerDetails?.getInTouch?.email}
                </h2>
              </li>
            </ul>
            <ul className={listText}>
              <li className='my-6'>
                <h2 className='text-sm font-bold text-gray_800 dark:text-white'>
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
              {socialMediaWithLinks.map(({ logo, id, link }) => {
                return (
                  <Link href={`https://www.${link}/`} key={id}>
                    <Image
                      src={logo}
                      alt={id}
                      height={28}
                      width={28}
                      key={id}
                      className='cursor-pointer'
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        {/* todo: margin in HR does not work */}
        <hr />
        <div className='bg-muted px-4 py-6 md:flex md:items-center md:justify-center dark:bg-gray-700'>
          <span className='text-sm font-normal text-gray_500 sm:text-center dark:text-gray-300'>
            © Copyright {new Date().getFullYear()} . All Rights Reserved by
            Dharti
          </span>
        </div>
      </div>
    </footer>
  );
};
