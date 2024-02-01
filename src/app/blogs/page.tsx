import { BlogCard } from './_components/card';
import Pagination from './_components/pagination';
import { getBlogs } from './blogs-service-api';

export default async function page({
  searchParams,
}: {
  searchParams: { page: string; category: string; tag: string; search: string };
}) {
  const { page, category, tag, search } = searchParams;
  const blogs = await getBlogs({ page: +page, search, category, tag });
  const totalPages = blogs && Math.ceil(blogs?.total / blogs?.per_page);
  return (
    <>
      {blogs?.data?.map(({ id, ...props }) => <BlogCard {...props} key={id} />)}
      {totalPages && totalPages > 1 && <Pagination totalPages={totalPages} />}
    </>
  );
}
