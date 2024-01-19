import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ReactNode } from 'react';

function PaginationButton({
  children,
  variant = 'default',
}: {
  children: ReactNode;
  variant?: 'next' | 'default' | 'selected';
}) {
  return (
    // todo: define colors in global config, ask prajjwal
    <button
      className={cn(
        'grid h-12 w-12 place-items-center rounded-[50%] border border-gray_200 text-gray_500',
        {
          [`border-none bg-primary-400 text-white`]: variant === 'selected',
          // todo: use aspect ratio
          [`mx-5 h-11 w-11 border-none bg-primary-50 font-bold text-primary-600`]:
            variant === 'next',
        }
      )}
    >
      {children}
    </button>
  );
}

export default function Pagination({ totalPages }: { totalPages: number }) {
  const pages = Array(totalPages)
    .fill(0)
    // todo: ask
    .map((_, i) => ++i);
  return (
    <div className='col-span-2 mt-8 flex items-center justify-center gap-3'>
      <PaginationButton variant='next'>
        <ChevronLeft />
      </PaginationButton>
      {pages.map((page) => (
        <PaginationButton
          key={page}
          variant={page === 1 ? 'selected' : 'default'}
        >
          {page}
        </PaginationButton>
      ))}
      <PaginationButton variant='next'>
        <ChevronRight />
      </PaginationButton>
    </div>
  );
}
