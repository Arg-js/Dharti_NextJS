'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Items = [
  { name: 'Home', path: '/' },
  { name: 'About us', path: '/about-us/' },
  { name: 'Loan Solutions', path: '/loan-solutions/' },
  { name: 'Blogs', path: '/blogs/' },
  { name: 'FAQ', path: '/faq/' },
  { name: 'Contact Us', path: '/contact-us/' },
] as const;
type NavPath = (typeof Items)[number]['path'];

const NavbarItems = () => {
  const pathName = usePathname();
  const isActive = (path: NavPath) => pathName === path;

  return Items.map(({ name, path }) => {
    return (
      <li key={name}>
        {/* todo: use 700 to fix accessibility */}
        <Link
          className={`m-3 font-semibold hover:text-primary-400 ${
            isActive(path) ? 'text-primary-400' : 'text-fd_gray-600'
          } `}
          href={path}
        >
          {name}
        </Link>
      </li>
    );
  });
};

export default NavbarItems;
