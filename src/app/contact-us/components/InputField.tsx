'use client';
import React, { ChangeEventHandler } from 'react';
import { Input, InputProps } from '@/components/ui/input';

export const InputField = (
  props: {
    name: string;
    value: string;
    label: string;
    placeholder: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
  } & InputProps
) => {
  const { name, value, label, placeholder, onChange, ...rest } = props;

  return (
    <div>
      <label htmlFor={name} className='pb-2 text-sm font-medium'>
        {label}
      </label>
      <Input
        className='w-full'
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        {...rest}
      />
      {/* {error && (
        <label htmlFor={name} className='pb-2 text-sm font-medium'>
          {label}
        </label>
      )} */}
    </div>
  );
};
