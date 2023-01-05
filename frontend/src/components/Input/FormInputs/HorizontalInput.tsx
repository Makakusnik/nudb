import { forwardRef } from 'react';
import type { WidthFraction } from '@type/Styles';
import type { ReactNode, Ref } from 'react';

import type { BaseInputProps } from '../BaseInput';
import { FormInputWithLabel } from './FormInput';

type FormInputProps = {
  id: string;
  label: string | ReactNode;
  classLabel?: string;
  errors?: string;
  width?: WidthFraction;
} & BaseInputProps;

export const HorizontalInput = forwardRef(function HorizontalInput(
  { width, errors, ...props }: FormInputProps,
  ref: Ref<HTMLInputElement>,
) {
  return (
    <div className="flex w-full flex-col justify-between">
      <div className="flex w-full justify-between gap-x-2">
        <FormInputWithLabel
          classInput={`m-1 flex items-center self-end rounded-lg p-1 
         ring-4 ring-slate-100 transition-shadow invalid:ring-red-200 focus:ring-teal-400 focus:invalid:ring-red-400 ${
           width ? width : 'w-full'
         }`}
          {...props}
          inputRef={ref}
        />
      </div>
      {errors ? <em className="mt-1 mb-2 text-xs font-medium not-italic text-red-500">{errors}</em> : null}
    </div>
  );
});
