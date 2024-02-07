import Link from 'next/link';
import Image from 'next/image';
import { dhartiLogoIcon } from '@/assets/svg';
import { Drawer } from './Drawer';
import NavbarItems from './NavbarItems';

export const Navbar = () => {
  return (
    <nav className=' sticky top-0 z-20 bg-white'>
      <div className='container flex items-center justify-between bg-white py-2.5'>
        <Link href={'/'}>
          <Image
            src={dhartiLogoIcon}
            alt='Dharti Logo'
            height={70}
            width={100}
          />
        </Link>

        <ul className='hidden gap-10 py-2.5 lg:flex'>
          <NavbarItems />
        </ul>
        <div className='lg:hidden'>
          <Drawer />
        </div>
      </div>
    </nav>
  );
};
