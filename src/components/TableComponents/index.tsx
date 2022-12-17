import { useRef, useState } from 'react';
import type { ChildrenProps } from '@type/index';
import { FaSort, FaSortDown, FaSortUp } from 'react-icons/fa';

import { useOutsideClick } from '@hooks/useOutsideClick';

import { keyboardEventHandler } from '@lib/index';

export const TableRow = ({ children }: ChildrenProps) => {
  const [isActive, setActive] = useState<boolean>(false);
  const [isFocused, setFocused] = useState<boolean>(false);
  const ref = useRef(null);

  const handleOutsideClick = () => {
    setActive(false);
  };

  const handleClick = () => {
    setActive(true);
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
      tabIndex={0}
      onFocus={handleFocused}
      onMouseOver={handleFocused}
      onMouseLeave={handleBlur}
      onBlur={handleBlur}
      className={`hover relative my-2 flex w-full min-w-fit flex-row border-2 border-indigo-700 py-1 transition-shadow first:mt-0 even:bg-slate-100 hover:z-10 lg:rounded-lg ${
        isFocused ? 'ring-4 ring-teal-400/30' : ''
      }`}
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
      className="mx-auto inline-flex min-w-[6ch] max-w-[6ch] items-center justify-center py-2 md:min-w-[6ch] md:max-w-[6ch] "
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

interface TableColumnHeadingProps {
  dataTooltip?: string;
  className?: string;
}

export const TableColumnHeading = ({ className, dataTooltip, children }: TableColumnHeadingProps & ChildrenProps) => {
  return (
    <th
      data-tooltip={dataTooltip}
      className={`tooltip-right inline-flex w-fit items-center py-2 px-4 text-left font-bold md:rounded-l-md ${className}`}
    >
      {children}
    </th>
  );
};

export const TableColumnHeadingSortable = ({
  className,
  dataTooltip,
  children,
}: TableColumnHeadingProps & ChildrenProps) => {
  const [clickCount, setClickCount] = useState<number>(0);

  const renderIcon = () => {
    if (clickCount === 1) {
      return <FaSortUp className={`ml-1 text-teal-400`} size="1rem" />;
    } else if (clickCount === 2) {
      return <FaSortDown className={`ml-1 text-teal-400`} size="1rem" />;
    }
    return <FaSort className={`ml-1`} size="1rem" />;
  };

  const handleClick = () => {
    setClickCount((prevCount) => (prevCount + 1) % 3);
  };

  return (
    <th
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={(e) =>
        keyboardEventHandler(e, {
          keys: [' ', 'a'],
          handler(e) {
            e?.preventDefault();
            console.log('SPACE TY KOKOT');
          },
        })
      }
      data-tooltip={dataTooltip}
      className={
        className ??
        `mx-auto inline-flex min-w-fit
        max-w-fit items-center justify-center py-2 px-4 font-bold transition-colors focus:text-teal-400`
      }
    >
      <>
        {children}
        {renderIcon()}
      </>
    </th>
  );
};
