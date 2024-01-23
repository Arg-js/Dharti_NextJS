import Image from 'next/image';
import { getBlog, getBlogsCategory } from '../blogs-service-api';
import { BlogCard } from '../_components/card';
import parse from 'html-react-parser';

const Blog = async ({ params }: { params: { slug: string } }) => {
  const blog = await getBlog(params.slug);
  const blogsCategory = await getBlogsCategory(blog?.id || '');

  return (
    <div>
      <div className='mt-4 flex w-full justify-between'>
        <span className='text-xs font-bold uppercase text-secondary'>
          {/* TODO: Change this when we have categories in blog detail api */}
          Biotechnology
        </span>
        <span className='text-sm font-semibold text-gray_400'>
          {blog?.date}
        </span>
      </div>
      <div className='extraBold32 mt-2 text-gray_700'>{blog?.title}</div>
      <div className='relative mt-5 h-[479px] w-full overflow-hidden rounded-xl'>
        <Image
          src={blog?.image || ''}
          alt={`Image for ${blog?.title}`}
          fill
          className='object-cover'
        />
      </div>
      <div className='mt-4 text-sm leading-8 text-gray_600'>
        {blog?.description && parse(blog.description)}
      </div>
      {!!blogsCategory?.length && (
        <>
          <div className='mt-8'>
            <p className='bold20 text-primary'>Explore more blogs</p>
          </div>
          <div className={`mt-3 grid grid-cols-card gap-8`}>
            {blogsCategory.map(({ id, ...props }) => (
              <BlogCard {...props} key={id} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Blog;
