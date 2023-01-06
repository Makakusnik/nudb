import { forwardRef } from 'react';
import type { DetailedHTMLProps, InputHTMLAttributes, Ref } from 'react';

import { TextArea } from '../TextArea';

type TextAreaProps = DetailedHTMLProps<InputHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;

interface FormTextAreaProps extends TextAreaProps {
  label: string;
  id: string;
  name: string;
  placeholder?: string;
  isInvalid?: boolean;
  errors?: string;
}

export const FormTextArea = forwardRef(function FormTextArea(
  { width, errors, label, ...props }: FormTextAreaProps,
  ref: Ref<HTMLTextAreaElement>,
) {
  return (
    <>
      <label className={'flex items-center'} htmlFor={props.id}>
        {label}
      </label>
      <TextArea
        {...props}
        className={`m-1 flex min-h-[2rem] items-center self-end rounded-lg 
          p-1 ring-4 ring-slate-100 transition-shadow invalid:ring-red-200 focus:ring-teal-400 focus:invalid:ring-red-400 ${
            width ? width : 'w-full'
          }`}
        textAreaRef={ref}
      />
      {errors ? <em className="mt-1 mb-2 text-xs font-medium not-italic text-red-500">{errors}</em> : null}
    </>
  );
});
