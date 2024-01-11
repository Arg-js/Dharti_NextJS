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
    <button
      className={cn(
        'grid h-12 w-12 place-items-center rounded-[50%] border border-[#E2E8F0] text-[#718096]',

        {
          [`border-none bg-[#82AD66] text-white`]: variant === 'selected',
        },
        {
          [`mx-5 h-11 w-11 border-none bg-[#EFF5EC] font-bold text-[#82AD66]`]:
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
    .map((_, i) => ++i);
  return (
    <div className='col-span-2 flex items-center justify-center gap-3'>
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
