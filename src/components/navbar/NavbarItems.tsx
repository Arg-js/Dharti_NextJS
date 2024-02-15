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
      <div
        key={name}
        className={`hover:text-primary_500 m-3 font-semibold ${
          isActive(path) ? 'text-primary' : 'text-fd_gray-600'
        } `}
      >
        <Link href={path}>{name}</Link>
      </div>
    );
  });
};

export default NavbarItems;
