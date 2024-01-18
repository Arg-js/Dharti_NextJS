import { heroSectionBlogBg } from '@/assets/svg';
import HeroSection from '@/components/hero/HeroSection';
import { PropsWithChildren } from 'react';
import FilterPanel from './_components/FilterPanel';

export const gridTemplate = 'grid-cols-[repeat(auto-fit,minmax(340px,1fr))]';

export default function BlogLayout({ children }: PropsWithChildren) {
  return (
    <>
      <HeroSection title='Blogs' image={heroSectionBlogBg} />
      <main className='container mb-20'>
        <div className={`grid ${gridTemplate} gap-8`}>
          <div className={`col-span-2 grid ${gridTemplate} mt-6 gap-6`}>
            {children}
          </div>
          <FilterPanel />
        </div>
      </main>
    </>
  );
}
