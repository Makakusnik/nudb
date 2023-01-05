import { forwardRef, useState } from 'react';
import type { DetailedHTMLProps, InputHTMLAttributes, Ref } from 'react';

type TextAreaProps = DetailedHTMLProps<InputHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;

interface FormTextAreaProps extends TextAreaProps {
  label: string;
  id: string;
  name: string;
  placeholder?: string;
  classLabel?: string;
  classInput?: string;
  isInvalid?: boolean;
  errors?: string;
}

export const FormTextArea = forwardRef(function FormTextArea(
  { label, name, id, placeholder, classInput, classLabel, isInvalid, errors, ...other }: FormTextAreaProps,
  ref: Ref<HTMLTextAreaElement>,
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
      <label className={`${classLabel}`} htmlFor={id}>
        {label}
      </label>
      <div
        className={`flex items-center rounded-lg bg-slate-100 p-1 ring-4 ring-inset transition-shadow  ${
          isFocused ? 'ring-teal-400' : 'ring-transparent'
        }`}
      >
        <textarea
          ref={ref}
          className={`w-full rounded-lg bg-white p-1 ${classInput}`}
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
          placeholder={placeholder}
          name={name}
        />
      </div>
      {isInvalid ? errors : null}
    </>
  );
});
