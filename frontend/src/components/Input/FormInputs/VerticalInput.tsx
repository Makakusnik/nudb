import { forwardRef } from 'react';
import type { WidthFraction } from '@type/Styles';
import type { Ref } from 'react';

import type { NativeInputProps } from '../Input';
import { Input as Input } from '../Input';

type FormInputProps = {
  label: string;
  id: string;
  width?: WidthFraction;
  nativeValidation?: boolean;
  errors?: string;
} & NativeInputProps;
forwardRef;

// TODO Sprav addony na input (left, right) errory taktiez.
// TODO Ak je required tak musi mat cervenu hviezdicku

export const VerticalInput = forwardRef(function FormInput(
  { width, errors, label, ...props }: FormInputProps,
  ref: Ref<HTMLInputElement>,
) {
  return (
    <div className="flex w-full flex-col justify-between gap-y-2">
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
      {errors ? <em className="mt-1 mb-2 text-xs font-medium not-italic text-red-500">{errors}</em> : null}
    </div>
  );
});
