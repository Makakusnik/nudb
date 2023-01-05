export type ColorType = 'transparent' | 'green' | 'blue' | 'yellow' | 'red' | 'teal' | 'close';

export type Position = 'top' | 'left' | 'bottom' | 'right';

export type Fractions =
  | '1/2'
  | '1/3'
  | '2/3'
  | '1/4'
  | '2/4'
  | '3/4'
  | '1/5'
  | '2/5'
  | '3/5'
  | '4/5'
  | '1/6'
  | '2/6'
  | '3/6'
  | '4/6'
  | '5/6'
  | '1/12'
  | '2/12'
  | '3/12'
  | '4/12'
  | '5/12'
  | '6/12'
  | '7/12'
  | '8/12'
  | '9/12'
  | '10/12'
  | '11/12'
  | 'full';

export type WidthFraction = WidthFractions[keyof WidthFractions];

type WidthFractions = {
  [F in Fractions]: `w-${F}`;
};

export type JustifyContentValues =
  | 'justify-center'
  | 'justify-start'
  | 'justify-end'
  | 'justify-between'
  | 'justify-around'
  | 'justify-evenly';

export type AlignItemsValues = 'items-start' | 'items-end' | 'items-center' | 'items-baseline' | 'items-stretch';
