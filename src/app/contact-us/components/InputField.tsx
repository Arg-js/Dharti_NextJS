'use client';
import React, { ChangeEventHandler } from 'react';
import { Input, InputProps } from '@/components/ui/input';

export const InputField = (
  props: {
    name: string;
    value: string;
    label: string;
    placeholder: string;
    error: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
  } & InputProps
) => {
  const { name, value, label, placeholder, error, onChange, ...rest } = props;

  return (
    <div>
      <div className='flex'>
        <label htmlFor={name} className='pb-2 text-sm font-medium'>
          {label}
        </label>
        <p className='text-red-600'>*</p>
      </div>
      <Input
        className='w-full'
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        {...rest}
      />
      {error && (
        <label htmlFor={name} className='pb-2 text-sm font-medium text-red-600'>
          {error}
        </label>
      )}
    </div>
  );
};
