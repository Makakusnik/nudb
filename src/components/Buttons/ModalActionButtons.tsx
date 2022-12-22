import { useRef, useState } from 'react';
import type { ChildrenProps } from '@type/index';
import { BsPlusLg } from 'react-icons/bs';

export const AddInputButton = ({ children }: ChildrenProps) => {
  const [clicked, setClicked] = useState<boolean>(false);
  const ref = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    setClicked((prev) => {
      if (!prev) {
        ref && ref.current?.focus();
        return true;
      }
      return false;
    });
  };

  return (
    <div className="relative isolate flex w-20 min-w-fit">
      <input
        ref={ref}
        className={`absolute h-full w-20 rounded-l-md p-2 shadow-inner ring-4 ring-inset ring-teal-400/10 transition-all focus:ring-4 focus:ring-inset focus:ring-teal-400/30 ${
          clicked ? '-translate-x-20' : 'translate-x-0'
        }`}
      ></input>
      <button
        className={`z-10 flex w-full items-center rounded-r-md bg-green-300 p-2 text-green-600 ${
          clicked ? '' : 'rounded-l-md'
        }`}
        onClick={handleClick}
      >
        <BsPlusLg size={16} className="mr-2" />
        {children}
      </button>
    </div>
  );
};
