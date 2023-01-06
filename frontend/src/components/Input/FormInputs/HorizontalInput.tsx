import { forwardRef } from 'react';
import type { WidthFraction } from '@type/Styles';
import type { ReactNode, Ref } from 'react';

import type { BaseInputProps } from '../Input';
import { Input } from '../Input';

type FormInputProps = {
  id: string;
  label: string | ReactNode;
  errors?: string;
  width?: WidthFraction;
} & BaseInputProps;

export const HorizontalInput = forwardRef(function HorizontalInput(
  { width, errors, label, ...props }: FormInputProps,
  ref: Ref<HTMLInputElement>,
) {
  return (
    <>
      <div className="flex w-full justify-between gap-x-2">
        <label className={'flex items-center'} htmlFor={props.id}>
          {label}
        </label>
        <Input
          {...props}
          className={`m-1 flex items-center self-end rounded-lg p-1 
          ring-4 ring-slate-100 transition-shadow invalid:ring-red-200 focus:ring-teal-400 focus:invalid:ring-red-400 ${
            width ? width : 'w-full'
          }`}
          inputRef={ref}
        />
      </div>
      {errors ? <em className="mt-1 mb-2 text-xs font-medium not-italic text-red-500">{errors}</em> : null}
    </>
  );
});
