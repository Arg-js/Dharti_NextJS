'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import { sendContactUsMessage } from '../contact-us-service-api';
import { InputField } from './InputField';
import { useToast } from '@/components/ui/use-toast';
import { Dialog } from './Modal';

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
  const [isClicked, setIsClicked] = useState(false);

  // Reusable validation function
  const validateField = (fieldName: string, value: string) => {
    // once the button is clicked and there are empty fields
    // empty fields: defaultValue = fieldValue
    return isClicked && !value
      ? `Please enter your ${fieldName.replace('_', ' ')}`
      : '';
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsClicked(true);
    const msg = await sendContactUsMessage(formDetails);
    // when there is a truthy value of a message
    // ie. data is successfully posted
    msg && setIsClicked(false);
    msg && setFormDetails(initialFormDetails);
    toast({
      title: msg ?? 'Please fill your form correctly!',
      variant: msg ? 'success' : 'destructive',
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
              error={validateField('first_name', formDetails.first_name)}
              onChange={handleChange}
            />
          </div>
          <div className='mt-4 flex-1 md:mt-0'>
            <InputField
              name='last_name'
              value={formDetails.last_name}
              label='Last name'
              placeholder='Last name'
              error={validateField('last_name', formDetails.last_name)}
              onChange={handleChange}
            />
          </div>
        </div>
        <InputField
          name='email'
          value={formDetails.email}
          label='Email'
          type='email'
          placeholder='you@company.com'
          error={validateField('email', formDetails.email)}
          onChange={handleChange}
        />
        <InputField
          name='phone'
          value={formDetails.phone}
          label='Phone number'
          placeholder='+1 (555) 000-0000'
          error={validateField('phone_number', formDetails.phone)}
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
          <div className='gap-1 md:flex'>
            <p className='text-base font-normal text-gray-500'>
              You agree to our
            </p>
            <Dialog />
          </div>
        </div>
        <div>
          <Button
            type='submit'
            disabled={!formDetails.policy_status}
            className=' w-full py-6 text-white'
          >
            Send message
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
