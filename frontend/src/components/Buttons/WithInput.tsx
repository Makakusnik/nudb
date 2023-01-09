import { useEffect, useRef, useState } from 'react';
import type { ChildrenProps } from '@type/index';
import type { ButtonAttributes, FormAttributes, InputAttributes } from '@type/Native Props';
import type { FormEvent, MouseEvent } from 'react';

import { AddIcon } from '@assets/icons';

type CustomButtonProps = {
  inputProps?: InputAttributes;
  buttonProps?: ButtonAttributes;
  formProps?: FormAttributes;
} & ChildrenProps;

export const AddInputButton = ({ children, inputProps, buttonProps, formProps }: CustomButtonProps) => {
  const [isInputState, setInputState] = useState<boolean>(false);
  const ref = useRef<HTMLInputElement>(null);

  const inputClass = `w-28 rounded-l-md p-2 pr-4 shadow-inner ring-4 ring-inset ring-teal-400/10 transition-all  invalid:ring-red-400/30 focus:valid:ring-teal-400/30  focus:invalid:ring-red-400/50
${isInputState ? '-translate-x-28' : 'translate-x-0 rounded-r-md opacity-0'}
`;

  const buttonClass = `z-10 flex w-fit items-center rounded-r-md bg-green-300 p-2 px-3 text-green-600 transition-all duration-300  focus:ring-4 focus:ring-inset focus:ring-teal-400/60 disabled:bg-slate-300 disabled:text-slate-600  ${
    isInputState
      ? 'bg-yellow-300 text-yellow-600 hover:bg-yellow-200 hover:text-yellow-500'
      : 'rounded-l-md hover:bg-green-200 hover:text-green-500'
  }`;

  const handleClick = (e: FormEvent<HTMLButtonElement> | MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (isInputState) {
      if (e.currentTarget.form?.reportValidity()) {
        e.currentTarget.form?.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
        setInputState(false);
      }
    } else {
      setInputState(true);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.currentTarget.reset();
    setInputState(false);
    formProps?.onSubmit && formProps.onSubmit(e);
  };

  useEffect(() => {
    isInputState && ref.current?.focus();
  }, [isInputState]);

  return (
    <form
      {...formProps}
      onSubmit={handleSubmit}
      className={formProps?.className || 'relative isolate flex min-w-fit flex-col items-end '}
    >
      <div className={`relative flex w-fit`}>
        <span className="absolute w-fit">
          <input
            {...inputProps}
            ref={ref}
            disabled={inputProps?.disabled || !isInputState}
            className={inputProps?.className || inputClass}
          />
        </span>
        <button {...buttonProps} className={buttonProps?.className || buttonClass} onClick={handleClick}>
          <>
            <AddIcon size={16} className="mr-2" />
            {isInputState ? 'Confirm' : children}
          </>
        </button>
      </div>
    </form>
  );
};
