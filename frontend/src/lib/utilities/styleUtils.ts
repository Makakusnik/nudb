import {
  colorsBlue,
  colorsClose,
  colorsGreen,
  colorsNeutral,
  colorsRed,
  colorsTeal,
  colorsTransparent,
  colorsYellow,
  focusBlue,
  focusClose,
  focusGreen,
  focusNeutral,
  focusRed,
  focusTeal,
  focusYellow,
} from '@styles/shared';
import type { ColorType, Position } from '@type/Styles';

import { exhaustiveCheck } from './typeChecking';

export function getFocusClasses(type: ColorType) {
  switch (type) {
    case 'green':
      return focusGreen;
    case 'yellow':
      return focusYellow;
    case 'red':
      return focusRed;
    case 'teal':
      return focusTeal;
    case 'blue':
      return focusBlue;
    case 'transparent':
      return focusTeal;
    case 'close':
      return focusClose;
    case 'neutral':
      return focusNeutral;
    default:
      return exhaustiveCheck(type);
  }
}

export function getColorClasses(type: ColorType) {
  switch (type) {
    case 'green':
      return colorsGreen;
    case 'yellow':
      return colorsYellow;
    case 'red':
      return colorsRed;
    case 'teal':
      return colorsTeal;
    case 'blue':
      return colorsBlue;
    case 'transparent':
      return colorsTransparent;
    case 'close':
      return colorsClose;
    case 'neutral':
      return colorsNeutral;
    default:
      return exhaustiveCheck(type);
  }
}

export function getTooltipPosition(tooltipPosition: Position) {
  switch (tooltipPosition) {
    case 'bottom':
      return 'tooltip-bottom';
    case 'left':
      return 'tooltip-left';
    case 'right':
      return 'tooltip-right';
    case 'top':
      return 'tooltip-top';
    default:
      return exhaustiveCheck(tooltipPosition);
  }
}
