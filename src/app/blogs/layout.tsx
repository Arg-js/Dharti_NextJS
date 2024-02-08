import { heroSectionBlogBg } from '@/assets/svg';
import HeroSection from '@/components/hero/HeroSection';
import { PropsWithChildren } from 'react';
import FilterPanel from './_components/FilterPanel';

export default function BlogLayout({ children }: PropsWithChildren) {
  return (
    <>
      <HeroSection title='Blogs' image={heroSectionBlogBg} />
      <main className='container mb-20'>
        <div className={`grid grid-cols-card gap-8`}>
          <div
            className={` mt-6 grid grid-cols-card justify-items-center gap-6 md:col-span-2`}
          >
            {children}
          </div>
          <FilterPanel />
        </div>
      </main>
    </>
  );
}
