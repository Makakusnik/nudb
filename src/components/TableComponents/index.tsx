import { useRef, useState } from 'react';
import type { ChildrenProps } from '@type/index';

import { useOutsideClick } from '@hooks/useOutsideClick';

export const TableRow = ({ children }: ChildrenProps) => {
  const [isActive, setActive] = useState<boolean>(false);
  const [isFocused, setFocused] = useState<boolean>(false);
  const [isHovering, setHovering] = useState<boolean>(false);
  const hoveringStyle = '';
  const focusedStyle = 'z-10 border-teal-500/50 text-teal-700 shadow-xl bg-teal-500/10 even:bg-teal-500/10';

  const ref = useRef(null);

  const handleOutsideClick = () => {
    setActive(false);
  };

  const handleClick = () => {
    setActive(true);
  };

  const handleDoubleClick = () => {
    // TODO otvori modal
    console.log('YES TY KOKOT');
  };

  const handleHoverOn = () => {
    setHovering(true);
  };

  const handleHoverOff = () => {
    setHovering(false);
  };

  const handleFocused = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  useOutsideClick(ref, isActive, handleOutsideClick);

  return (
    <tr
      ref={ref}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      tabIndex={0}
      onFocus={handleFocused}
      onMouseOver={handleHoverOn}
      onMouseLeave={handleHoverOff}
      onBlur={handleBlur}
      className={`h relative isolate my-2 flex w-full min-w-fit cursor-pointer flex-row border-2 border-solid border-transparent py-1 transition-all duration-300  first:mt-0 even:bg-slate-100 hover:border-teal-500/30 hover:text-teal-700  
      focus:z-10 lg:rounded-lg
      ${isHovering ? hoveringStyle : ''}
      ${isFocused ? focusedStyle : ''} 
      `}
    >
      {children}
    </tr>
  );
};

export const NutrientTableCell = ({ children }: ChildrenProps) => {
  return (
    <td
      onClick={(e) => {
        e;
      }}
      className="mx-auto inline-flex min-w-[6ch] max-w-[6ch] items-center justify-center py-2 text-slate-500 md:min-w-[6ch] md:max-w-[6ch] "
    >
      {children}
    </td>
  );
};

export const NameTableCell = ({ children }: ChildrenProps) => {
  return <td className="min-w-[12rem] max-w-[12rem] py-2 px-0 md:min-w-[16rem] md:max-w-[16rem]">{children}</td>;
};

export const CheckboxTableCell = ({ children }: ChildrenProps) => {
  return <td className="inline-flex items-center py-2 px-4">{children}</td>;
};
