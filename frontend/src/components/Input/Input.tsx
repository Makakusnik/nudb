import type { InputAttributes } from '@type/Native Props';
import type { DetailedHTMLProps, InputHTMLAttributes, Ref } from 'react';

export type NativeInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

// TODO Sprav addony na input (left, right) errory taktiez.
// TODO Ak je required tak musi mat cervenu hviezdicku

export interface BaseInputProps extends InputAttributes {
  nativeValidation?: boolean;
  inputRef?: Ref<HTMLInputElement>;
}

export const Input = ({ nativeValidation, inputRef, ...props }: BaseInputProps) => {
  return (
    <input
      {...props}
      ref={inputRef}
      onInvalid={(e) => {
        !nativeValidation && e.preventDefault();
        props.onInvalid && props.onInvalid(e);
      }}
    />
  );
};
