'use client';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Link from 'next/link';
import { title } from 'process';
import React, { useState } from 'react';

const ContactForm = () => {
  const [formDetails, setFormDetails] = useState({
    first_name: '',
    last_name: '',
    email: '',
    ph_number: '',
    desc: '',
    term: false,
  });
  return (
    <div className='py-10'>
      <p className='mb-5 text-4xl font-semibold '>Get in touch</p>
      <p className='text- text-xl font-normal text-gray-500'>
        Our friendly team would like to hear from you.
      </p>
      <div className='flex flex-col pt-5 md:pt-10'>
        <div className='flex w-full flex-col md:flex-row md:space-x-6'>
          <div className='mb-4 md:mb-0'>
            <p className='pb-2 text-sm font-medium'>First name</p>
            <Input
              className='w-full xl:w-[292px]'
              placeholder='First name'
              onChange={(e) =>
                setFormDetails((prev) => ({
                  ...prev,
                  first_name: e.target.value,
                }))
              }
            />
          </div>
          <div className='mb-4 md:mb-0'>
            <p className='pb-2 text-sm font-medium'>Last name</p>
            <Input
              className='w-full xl:w-[292px]'
              placeholder='Last name'
              onChange={(e) =>
                setFormDetails((prev) => ({
                  ...prev,
                  last_name: e.target.value,
                }))
              }
            />
          </div>
        </div>
        <div className='my-4 md:mb-0'>
          <p className='py-2 text-sm font-medium'>Email</p>
          <Input
            className='w-full'
            placeholder='you@company.com'
            onChange={(e) =>
              setFormDetails((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </div>
        <div className='my-4 md:mb-0'>
          <p className='py-2 text-sm font-medium'>Phone number</p>
          <Input
            className='w-full'
            placeholder='+1 (555) 000-0000'
            onChange={(e) =>
              setFormDetails((prev) => ({ ...prev, ph_number: e.target.value }))
            }
          />
        </div>
        <div className='my-4 md:mb-0'>
          <p className='py-2 text-sm font-medium'>Message</p>
          <Textarea className='mb-2 h-32' />
        </div>
        <div className='my-4 flex space-x-1 '>
          <Checkbox onChange={() => {}} />
          <p className='text-base font-normal text-gray-500'>
            You agree to our
          </p>
          <Link
            href='https://github.com/AsheshRanaGurung'
            className='text-base font-normal text-gray-500 underline'
          >
            friendly policy.
          </Link>
        </div>
        <div className='my-4'>
          <Button className=' w-full py-6 text-white'>Send message</Button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
