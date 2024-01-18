'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import { sendContactUsMessage } from '../contact-us-service-api';
import { InputField } from './InputField';
import { useToast } from '@/components/ui/use-toast';

export const initialFormDetails = {
  first_name: '',
  last_name: '',
  email: '',
  phone: '',
  message: '',
  policy_status: 0,
};

const ContactForm = () => {
  const { toast } = useToast();
  const [formDetails, setFormDetails] = useState(initialFormDetails);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const msg = await sendContactUsMessage(formDetails);
    setFormDetails(initialFormDetails);
    toast({
      title: msg,
      variant: 'success',
    });
  };

  return (
    <div className='py-10'>
      <p className='mb-5 text-4xl font-semibold '>Get in touch</p>
      <p className='text- text-xl font-normal text-gray-500'>
        Our friendly team would like to hear from you.
      </p>
      <form
        className='flex w-full flex-col space-y-4 pt-5 md:pt-10'
        onSubmit={handleSubmit}
      >
        <div className='flex w-full flex-col md:flex-row md:space-x-6'>
          <div className='flex-1'>
            <InputField
              name='first_name'
              value={formDetails.first_name}
              label='First name'
              placeholder='First name'
              onChange={handleChange}
            />
          </div>
          <div className='mt-4 flex-1 md:mt-0'>
            <InputField
              name='last_name'
              value={formDetails.last_name}
              label='Last name'
              placeholder='Last name'
              onChange={handleChange}
            />
          </div>
        </div>
        <InputField
          name='email'
          value={formDetails.email}
          label='Email'
          placeholder='you@company.com'
          onChange={handleChange}
        />
        <InputField
          name='phone'
          value={formDetails.phone}
          label='Phone number'
          placeholder='+1 (555) 000-0000'
          onChange={handleChange}
        />
        <div className='md:mb-0'>
          <p className='py-2 text-sm font-medium'>Message</p>
          <Textarea
            name='message'
            value={formDetails.message}
            className='mb-2 h-32'
            onChange={handleChange}
          />
        </div>
        <div className='flex space-x-1 '>
          <Checkbox
            name='policy_status'
            checked={!!formDetails.policy_status}
            onCheckedChange={(val) => {
              setFormDetails((prev) => ({
                ...prev,
                policy_status: val ? 1 : 0,
              }));
            }}
          />
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
        <div>
          <Button type='submit' className=' w-full py-6 text-white'>
            Send message
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
