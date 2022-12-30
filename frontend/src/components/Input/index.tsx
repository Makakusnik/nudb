import { useState } from 'react';
import type { DetailedHTMLProps, HTMLInputTypeAttribute, InputHTMLAttributes } from 'react';

type InputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
type TextAreaProps = DetailedHTMLProps<InputHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;

export const Input = ({ ...other }: InputProps) => {
  return <input {...other} />;
};

type FormInputProps = {
  label: string;
  id: string;
  name: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;
  classLabel?: string;
  classInput?: string;
} & InputProps;

export const FormInput = ({ label, name, id, placeholder, type, classInput, classLabel, ...other }: FormInputProps) => {
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
        className={`rounded-lg bg-slate-100 p-1 ring-4 ring-inset transition-shadow  ${
          isFocused ? 'ring-teal-400' : 'ring-transparent'
        }`}
      >
        <input
          className={`rounded-lg bg-white p-1 ${classInput}`}
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
};

type FormTextAreaProps = {
  label: string;
  id: string;
  name: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;
  classLabel?: string;
  classInput?: string;
} & TextAreaProps;

export const FormTextArea = ({ label, name, id, placeholder, classInput, classLabel, ...other }: FormTextAreaProps) => {
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
        className={`rounded-lg bg-slate-100 p-1 ring-4 ring-inset transition-shadow  ${
          isFocused ? 'ring-teal-400' : 'ring-transparent'
        }`}
      >
        <textarea
          className={`rounded-lg bg-white p-1 ${classInput}`}
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
    </>
  );
};
