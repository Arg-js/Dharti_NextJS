'use client';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Dispatch, ReactNode, SetStateAction, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

function PaginationButton({
  children,
  variant = 'default',
  page,
  setCurrentPage,
}: {
  children: ReactNode;
  variant?: 'next' | 'default' | 'selected';
  page: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}) {
  const router = useRouter();
  return (
    <button
      className={cn(
        'grid h-12 w-12 place-items-center rounded-[50%] border border-gray_200 text-gray_500',
        {
          [`border-none bg-primary-400 text-white`]: variant === 'selected',
          [`mx-5 aspect-square h-11 border-none bg-primary-50 font-bold text-primary-600`]:
            variant === 'next',
        }
      )}
      onClick={() => {
        router.push(`/blogs?page=${page}`);
        setCurrentPage(page);
      }}
    >
      {children}
    </button>
  );
}

export default function Pagination({ totalPages }: { totalPages: number }) {
  const searchParams = useSearchParams();
  const selectedPage = searchParams.get('page');

  const [currentPage, setCurrentPage] = useState(1);
  const pages = Array(totalPages)
    .fill(0)
    .map((_, i) => ++i);
  return (
    <div className='col-span-2 mt-8 flex items-center justify-center gap-3'>
      <PaginationButton
        setCurrentPage={setCurrentPage}
        page={currentPage > 1 ? currentPage - 1 : 1}
        variant='next'
      >
        <ChevronLeft />
      </PaginationButton>
      {pages.map((page) => (
        <PaginationButton
          setCurrentPage={setCurrentPage}
          page={page}
          key={page}
          variant={
            selectedPage && +selectedPage === page ? 'selected' : 'default'
          }
        >
          {page}
        </PaginationButton>
      ))}
      <PaginationButton
        setCurrentPage={setCurrentPage}
        page={currentPage < totalPages ? currentPage + 1 : totalPages}
        variant='next'
      >
        <ChevronRight />
      </PaginationButton>
    </div>
  );
}
