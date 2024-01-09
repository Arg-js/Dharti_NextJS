'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

type NavPath = (typeof NavbarItems)[number]['path'];

const NavbarItems = [
  { name: 'Home', path: '/' },
  { name: 'About us', path: '/about-us' },
  { name: 'Loan Solutions', path: '/loan-solutions' },
  { name: 'Blogs', path: '/blogs' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Contact Us', path: '/contact-us' },
] as const;
export const Navbar = () => {
  const pathName = usePathname();
  const isActive = (path: NavPath) => pathName === path;
  return (
    <nav className='flex items-center justify-between py-2.5'>
      <Image src={'/logo.svg'} alt='Dharti Logo' height={70} width={100} />

      <ul className='flex gap-10 py-2.5'>
        {NavbarItems.map((item) => (
          <li
            key={item.name}
            className={`hover:text-primary_500  font-semibold ${
              isActive(item.path) ? 'text-primary' : 'text-fd_gray-600'
            } `}
          >
            <Link href={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
