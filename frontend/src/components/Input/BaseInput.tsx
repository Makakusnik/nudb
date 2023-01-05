import type { DetailedHTMLProps, InputHTMLAttributes, Ref } from 'react';

export type NativeInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

// TODO Sprav addony na input (left, right) errory taktiez.
// TODO Ak je required tak musi mat cervenu hviezdicku
// TODO Pridaj pattern matching
// TODO Pridaj volitelny native validation
// TODO Vycucni base input do vlastnej classy, tu ich len nastyluj accordingly (horziont vertical)

export interface BaseInputProps extends NativeInputProps {
  nativeValidation?: boolean;
  inputRef?: Ref<HTMLInputElement>;
}

export const BaseInput = function BaseInput({ nativeValidation, inputRef, ...props }: BaseInputProps) {
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
