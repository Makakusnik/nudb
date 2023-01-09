import { forwardRef } from 'react';
import { disabledStyle } from '@styles/shared';
import type { ChildrenProps } from '@type/index';
import type { ButtonAttributes } from '@type/Native Props';
import type { ColorType, Position } from '@type/Styles';
import type { IconSize } from '@type/Styles/iconVariants';
import type { Dependant } from '@type/utlityTypes';
import type { Ref } from 'react';
import type { IconType } from 'react-icons';
import { BsQuestion } from 'react-icons/bs';

import { UnknownIcon } from '@assets/icons';
import { getColorClasses, getFocusClasses, getTooltipPosition } from '@lib/utilities/styleUtils';

import { Button } from './BaseButton';

const ButtonIconBaseClasses = 'flex h-fit w-fit items-center rounded-md p-2 transition-all duration-300';

interface CustomIconButtonProps extends ButtonAttributes {
  icon: IconType;
  iconSize?: IconSize;
  colorType?: ColorType;
  tooltip?: string;
  tooltipPosition?: Position;
}

type IconButtonProps = Dependant<CustomIconButtonProps, 'tooltip' | 'tooltipPosition'>;

export const IconButton = ({
  icon,
  colorType = 'teal',
  tooltip,
  tooltipPosition,
  iconSize = 24,
  ...props
}: IconButtonProps) => {
  const Icon = icon;
  const focusClass = getFocusClasses(colorType);
  const colorClass = getColorClasses(colorType);
  const tooltipClass = getTooltipPosition(tooltipPosition);
  return (
    <Button
      data-tooltip={tooltip}
      className={`${ButtonIconBaseClasses} ${focusClass} ${colorClass} ${disabledStyle} ${tooltipClass}`}
      {...props}
    >
      {Icon ? <Icon size={iconSize} /> : <BsQuestion size={iconSize} />}
    </Button>
  );
};

export const IconTextButton = forwardRef(function IconTextButton(
  {
    icon,
    children,
    onClick,
    colorType = 'teal',
    tooltip,
    tooltipPosition,
    iconSize = 24,
  }: IconButtonProps & ChildrenProps,
  ref: Ref<HTMLButtonElement>,
) {
  const Icon = icon;
  const focusClass = getFocusClasses(colorType);
  const colorClass = getColorClasses(colorType);
  const tooltipClass = getTooltipPosition(tooltipPosition);
  return (
    <Button
      ref={ref}
      onClick={(e) => onClick && onClick(e)}
      type={'button'}
      data-tooltip={tooltip}
      className={`${ButtonIconBaseClasses} ${focusClass} ${colorClass} ${disabledStyle} ${tooltipClass} px-2`}
    >
      {Icon ? <Icon className="mr-1" size={iconSize} /> : <UnknownIcon size={iconSize} />}
      {children}
    </Button>
  );
});
