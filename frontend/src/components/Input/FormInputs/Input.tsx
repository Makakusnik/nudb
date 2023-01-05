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
} & InputProps;
forwardRef;

export const FormInput = forwardRef(function FormInput(
  { label, name, id, placeholder, type, width = 'w-full', classInput, classLabel, ...other }: FormInputProps,
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
    <>
      <label className={classLabel} htmlFor={id}>
        {label}
      </label>
      <div
        className={`flex items-center rounded-lg bg-slate-100 p-1 ring-4 ring-inset transition-shadow ${width} ${
          isFocused ? 'ring-teal-400' : 'ring-transparent'
        }`}
      >
        <input
          ref={ref}
          className={`w-full rounded-lg bg-white p-1 ${classInput || ''}`}
          {...other}
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
      </div>
    </>
  );
});
