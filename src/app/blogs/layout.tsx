import { heroSectionBlogBg } from '@/assets/svg';
import HeroSection from '@/components/hero/HeroSection';
import { PropsWithChildren } from 'react';
import FilterPanel from './_components/FilterPanel';

export const gridTemplate = 'grid-cols-[repeat(auto-fit,minmax(340px,1fr))]';

export default async function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <HeroSection title='Blogs' image={heroSectionBlogBg} />
      <main className='mx-auto mb-20 max-w-[1440px]'>
        <div className={`grid ${gridTemplate} gap-8`}>
          <div className={`col-span-2 grid ${gridTemplate} gap-6 p-6`}>
            {children}
          </div>
          <FilterPanel />
        </div>
      </main>
    </>
  );
}
