import Link from 'next/link';
import { getCategories, getTags } from '../blogs-service-api';
import { Search } from 'lucide-react';

const FilterPanel = async () => {
  const categories = await getCategories();
  const tags = await getTags();

  return (
    <div className='sticky top-6 mt-6 flex h-min flex-col gap-4 rounded-3xl bg-ghost_white-100 p-8 text-gray-500'>
      <div className='flex h-14 items-center overflow-hidden rounded-xl bg-white pr-3 text-sm'>
        <input
          className='w-full py-4 pl-3 font-medium focus-visible:outline-none'
          placeholder='Search Here'
        />
        <Search size={'20px'} color='gray' />
      </div>
      <hr className='mt-2' />
      <div>
        <span className='mb-4 block text-lg font-bold'>Categories</span>
        <ul className='mb-2 mt-2 grid gap-3 text-sm text-indigo_900'>
          {categories.map((category) => (
            <li key={category.id}>
              <Link href={''}>{category.title}</Link>
            </li>
          ))}
        </ul>
        <hr className='mb-5 mt-5' />
        <span className='mb-4 block text-lg font-bold'>Post Tag</span>
        <div className='flex flex-wrap gap-4'>
          {tags?.map(({ id, tag }) => (
            <div
              key={id}
              className='rounded-full border border-ghost_white-200 px-4 py-2 text-sm text-gray_700'
            >
              <Link href={''}>{tag}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
