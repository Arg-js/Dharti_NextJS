'use client';
import { Search } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import { ICategory, ITags } from '../blogs-service-api';
import { cn } from '@/lib/utils';

const hoverEffect = 'hover:cursor-pointer hover:text-primary-400';

const FilterPanelBody = ({
  tags,
  categories,
}: {
  tags: ITags[] | undefined;
  categories: ICategory[] | undefined;
}) => {
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);

  const hasQueryParam = ({ slug, key }: { slug: string; key: string }) => {
    return slug !== null && params.get(key) === slug;
  };

  const setQueryParam = ({ slug, key }: { slug: string; key: string }) => {
    if (hasQueryParam({ key, slug })) {
      params.delete(key, slug);
      return replace(`${pathname}?${params.toString()}`);
    }
    params.set(key, slug);
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className='sticky top-32 mt-6 flex h-min flex-col gap-4 rounded-3xl bg-gray_50 p-8 text-gray-500'>
      <div className='flex h-14 items-center overflow-hidden rounded-xl bg-white pr-3 text-sm'>
        <input
          className='w-full py-4 pl-3 font-medium focus-visible:outline-none'
          placeholder='Search Here'
          onChange={(e) => {
            params.set('search', String(e.target.value));
            replace(`${pathname}?${params.toString()}`);
          }}
        />
        <Search size={'20px'} color='gray' />
      </div>
      <hr className='mt-2' />
      <div>
        <span className='mb-4 text-lg font-bold text-gray_700'>Categories</span>
        <ul className='mb-2 mt-2 grid gap-3 text-sm text-gray_700'>
          {categories?.map(({ title, id, slug }) => (
            <li
              key={id}
              className={cn(hoverEffect, {
                ['text-primary-400']: hasQueryParam({ key: 'category', slug }),
              })}
              onClick={() => {
                setQueryParam({ slug, key: 'category' });
              }}
            >
              {title}
            </li>
          ))}
        </ul>
        <hr className='mb-5 mt-5' />
        <span className='mb-4 text-lg font-bold text-gray_700'>Post Tag</span>
        <div className='flex flex-wrap gap-4'>
          {tags?.map(({ id, tag, slug }) => (
            <div
              className={cn(
                'rounded-full border border-gray_200 px-4 py-2 text-sm text-gray_600 ',
                hoverEffect,
                {
                  ['text-primary-500']: hasQueryParam({ slug, key: 'tag' }),
                }
              )}
              onClick={() => {
                setQueryParam({ slug, key: 'tag' });
              }}
              key={id}
            >
              <div>{tag}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterPanelBody;
