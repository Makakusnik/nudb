import type { ReactNode, Ref } from 'react';

import type { BaseInputProps } from '../BaseInput';
import { BaseInput } from '../BaseInput';

type FormInputProps = {
  id: string;
  label: string | ReactNode;
  classLabel?: string;
  classInput?: string;
  inputRef: Ref<HTMLInputElement>;
} & BaseInputProps;

export const FormInputWithLabel = ({ classInput, classLabel, label, ...props }: FormInputProps) => {
  return (
    <>
      <label className={classLabel} htmlFor={props.id}>
        {label}
      </label>
      <BaseInput {...props} className={classInput} />
    </>
  );
};
