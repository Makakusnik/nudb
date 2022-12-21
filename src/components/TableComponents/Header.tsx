import { useState } from 'react';
import type { ChildrenProps } from '@type/index';
import { FaSort, FaSortDown, FaSortUp } from 'react-icons/fa';

import { keyboardEventHandler } from '@lib/index';

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
      return <FaSortUp className={`ml-1 text-teal-400`} size="16px" />;
    } else if (clickCount === 2) {
      return <FaSortDown className={`ml-1 text-teal-400`} size="16px" />;
    }
    return <FaSort className={`ml-1`} size="16px" />;
  };

  const handleInteraction = () => {
    setClickCount((prevCount) => (prevCount + 1) % 3);
  };

  return (
    <th
      tabIndex={0}
      onClick={handleInteraction}
      onKeyDown={(e) =>
        keyboardEventHandler(e, {
          keys: [' ', 'Enter'],
          handler(e) {
            e?.preventDefault();
            handleInteraction();
            console.log('SPACE TY KOKOT');
          },
        })
      }
      data-tooltip={dataTooltip}
      className={
        className ??
        `mx-auto inline-flex min-w-fit
          max-w-fit
          cursor-pointer items-center justify-center py-2 px-4 font-bold transition-colors focus:text-teal-400`
      }
    >
      <>
        {children}
        {renderIcon()}
      </>
    </th>
  );
};
