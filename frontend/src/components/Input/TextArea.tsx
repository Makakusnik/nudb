import type { DetailedHTMLProps, Ref, TextareaHTMLAttributes } from 'react';

export type NativeTextAreaProps = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;

// TODO Sprav addony na input (left, right) errory taktiez.
// TODO Ak je required tak musi mat cervenu hviezdicku

export interface TextAreaProps extends NativeTextAreaProps {
  nativeValidation?: boolean;
  textAreaRef?: Ref<HTMLTextAreaElement>;
}

export const TextArea = ({ nativeValidation, textAreaRef, ...props }: TextAreaProps) => {
  return (
    <textarea
      {...props}
      ref={textAreaRef}
      onInvalid={(e) => {
        !nativeValidation && e.preventDefault();
        props.onInvalid && props.onInvalid(e);
      }}
    />
  );
};
