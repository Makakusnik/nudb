import { useEffect, useRef, useState } from 'react';
import type { ChildrenProps } from '@type/index';
import type { FormEvent } from 'react';
import { BsPlusLg } from 'react-icons/bs';

export const AddInputButton = ({ children }: ChildrenProps) => {
  const [isInputState, setInputState] = useState<boolean>(false);
  const ref = useRef<HTMLInputElement>(null);

  const handleClick = (e: FormEvent<HTMLButtonElement>) => {
    if (isInputState) {
      e.currentTarget.form?.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
      if (e.currentTarget.form?.reportValidity()) {
        setInputState(false);
      }
    } else {
      setInputState(true);
    }
  };

  useEffect(() => {
    isInputState && ref.current?.focus();
  }, [isInputState]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('before');
    console.log(e.currentTarget['grams'].value);
    e.currentTarget.reset();
    console.log('after');
    console.log(e.currentTarget['grams'].value);

    setInputState(false);
  };

  return (
    <form onSubmit={handleSubmit} className="relative isolate flex min-w-fit flex-col items-end ">
      <div className={`relative flex w-fit`}>
        <span className="absolute w-fit">
          <input
            aria-label="weight"
            name="grams"
            maxLength={6}
            minLength={1}
            min={1}
            max={100000}
            required={true}
            type="number"
            ref={ref}
            disabled={!isInputState}
            className={`w-28 rounded-l-md p-2 pr-4 shadow-inner ring-4 ring-inset ring-teal-400/10 transition-all  invalid:ring-red-400/30 focus:valid:ring-teal-400/30  focus:invalid:ring-red-400/50
          ${isInputState ? '-translate-x-28' : 'translate-x-0 rounded-r-md opacity-0'}
          `}
          />
        </span>
        <button
          disabled={true}
          type={'button'}
          data-tooltip="This feature is not available"
          className={`tooltip-top z-10 flex w-fit items-center rounded-r-md bg-green-300 p-2 px-3 text-green-600 transition-all focus:ring-4 focus:ring-inset focus:ring-teal-400/60 disabled:bg-slate-300 disabled:text-slate-600  ${
            isInputState ? 'bg-yellow-300 text-yellow-600' : 'rounded-l-md'
          }`}
          onClick={handleClick}
        >
          <BsPlusLg size={16} className="mr-2" />
          {isInputState ? 'Confirm' : 'Add Food To Plan'}
        </button>
      </div>
    </form>
  );
};
