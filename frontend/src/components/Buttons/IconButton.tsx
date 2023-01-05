import { disabledStyle } from '@styles/shared';
import type { ChildrenProps } from '@type/index';
import type { ColorType, Position } from '@type/Styles';
import type { Dependant } from '@type/utlityTypes';
import type { ButtonHTMLAttributes, DetailedHTMLProps, MouseEvent } from 'react';
import type { IconType } from 'react-icons';
import { BsQuestion } from 'react-icons/bs';

import { getColorClasses, getFocusClasses, getTooltipPosition } from '@lib/utilities/styleUtils';

const ButtonIconBaseClasses = 'flex h-fit w-fit items-center rounded-md p-2 transition-all duration-300';

interface IconButtonPropsBase extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  icon: IconType;
  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void;
  colorType?: ColorType;
  tooltip?: string;
  tooltipPosition?: Position;
  iconSize?: number;
}

type IconButtonProps = Dependant<IconButtonPropsBase, 'tooltip' | 'tooltipPosition'>;

export const IconButton = ({
  icon,
  onClick,
  colorType = 'teal',
  tooltip,
  tooltipPosition,
  iconSize = 20,
  ...other
}: IconButtonProps) => {
  const Icon = icon;
  const focusClass = getFocusClasses(colorType);
  const colorClass = getColorClasses(colorType);
  const tooltipClass = tooltipPosition ? getTooltipPosition(tooltipPosition) : '';
  return (
    <button
      onClick={(e) => onClick && onClick(e)}
      type={'button'}
      data-tooltip={tooltip}
      className={`${ButtonIconBaseClasses} ${focusClass} ${colorClass} ${disabledStyle} ${tooltipClass}`}
      {...other}
    >
      {Icon ? <Icon size={iconSize} /> : <BsQuestion size={iconSize} />}
    </button>
  );
};

export const IconTextButton = ({
  icon,
  children,
  onClick,
  colorType = 'teal',
  tooltip,
  tooltipPosition,
  iconSize = 20,
}: IconButtonProps & ChildrenProps) => {
  const Icon = icon;
  const focusClass = getFocusClasses(colorType);
  const colorClass = getColorClasses(colorType);
  const tooltipClass = tooltipPosition ? getTooltipPosition(tooltipPosition) : '';
  return (
    <button
      onClick={(e) => onClick && onClick(e)}
      type={'button'}
      data-tooltip={tooltip}
      className={`${ButtonIconBaseClasses} ${focusClass} ${colorClass} ${disabledStyle} ${tooltipClass} px-3`}
    >
      {Icon ? <Icon className="mr-2" size={iconSize} /> : <BsQuestion size={iconSize} />}
      {children}
    </button>
  );
};
