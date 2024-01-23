import { BlogCard } from './_components/card';
import Pagination from './_components/pagination';
import { getBlogs } from './blogs-service-api';

export default async function Blogs() {
  const blogs = await getBlogs();
  return (
    <>
      {blogs?.map(({ id, ...props }) => <BlogCard {...props} key={id} />)}
      <Pagination totalPages={5} />
    </>
  );
}
