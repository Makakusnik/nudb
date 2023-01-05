import { forwardRef, useState } from 'react';
import type { WidthFraction } from '@type/Styles';
import type { HTMLInputTypeAttribute, Ref } from 'react';

import type { InputProps } from '../BaseInput';

type FormInputProps = {
  label: string;
  id: string;
  name: string;
  width?: WidthFraction;
  placeholder?: string;
  type: HTMLInputTypeAttribute;
  classLabel?: string;
  classInput?: string;
  isInvalid?: boolean;
  errors?: string;
} & InputProps;
forwardRef;

export const HorizontalInput = forwardRef(function FormInput(
  {
    label,
    name,
    id,
    placeholder,
    type,
    width = 'w-full',
    classInput,
    classLabel,
    isInvalid,
    errors,
    ...other
  }: FormInputProps,
  ref: Ref<HTMLInputElement>,
) {
  const [isFocused, setFocused] = useState<boolean>(false);

  const handleFocus = () => {
    setFocused(true);
  };
  const handleBlur = () => {
    setFocused(false);
  };
  return (
    <div className="flex items-center">
      <label className={classLabel} htmlFor={id}>
        {label}
      </label>
      <input
        ref={ref}
        className={`h-fit w-full rounded-lg bg-white p-2 ring-4 ring-inset ring-slate-100 transition-shadow valid:ring-teal-200 invalid:ring-red-200 focus:ring-teal-400 focus:invalid:ring-red-400`}
        {...other}
        onInvalid={(e) => {
          e.preventDefault();
        }}
        onFocus={(e) => {
          handleFocus();
          other.onFocus && other.onFocus(e);
        }}
        onBlur={(e) => {
          handleBlur();
          other.onBlur && other.onBlur(e);
        }}
        id={id}
        type={type}
        placeholder={placeholder}
        name={name}
      />
      <p className="text-xs">{isInvalid ? errors : null}</p>
    </div>
  );
});
