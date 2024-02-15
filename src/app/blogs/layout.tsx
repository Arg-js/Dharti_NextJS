import { heroSectionBlogBg } from '@/assets/svg';
import HeroSection from '@/components/hero/HeroSection';
import { PropsWithChildren } from 'react';
import FilterPanel from './_components/FilterPanel';

export default function BlogLayout({ children }: PropsWithChildren) {
  return (
    <>
      <HeroSection title='Blogs' image={heroSectionBlogBg} />
      <main className='container mb-20'>
        <div
          className={`grid grid-cols-card_base gap-8 sm:grid-cols-card_sm md:grid-cols-card`}
        >
          <div
            className={`mt-6 grid grid-cols-card_base justify-items-center gap-6 sm:grid-cols-card_sm md:col-span-2 md:grid-cols-card`}
          >
            {children}
          </div>
          <FilterPanel />
        </div>
      </main>
    </>
  );
}
