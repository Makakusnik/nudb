import { disabledStyle } from '@styles/shared';
import type { ButtonAttributes } from '@type/Native Props';
import type { ColorType, Position } from '@type/Styles';
import type { Dependant } from '@type/utlityTypes';

import { getColorClasses, getFocusClasses, getTooltipPosition } from '@lib/utilities/styleUtils';

const ButtonIconBaseClasses = 'flex h-fit w-fit items-center rounded-md p-2 px-4 transition-all duration-300';

type CustomButtonProps = {
  colorType?: ColorType;
  tooltip?: string;
  tooltipPosition?: Position;
} & ButtonAttributes;

type ButtonProps = Dependant<CustomButtonProps, 'tooltip' | 'tooltipPosition'>;

export const Button = ({ colorType = 'teal', tooltip, tooltipPosition, children, ...props }: ButtonProps) => {
  const focusClass = getFocusClasses(colorType);
  const colorClass = getColorClasses(colorType);
  const tooltipClass = getTooltipPosition(tooltipPosition);
  return (
    <button
      type={'button'}
      data-tooltip={tooltip}
      className={`${ButtonIconBaseClasses} ${focusClass} ${colorClass} ${disabledStyle} ${tooltipClass}`}
      {...props}
    >
      {children}
    </button>
  );
};
