import type { ChildrenProps } from '@type/index';
import type { AlignItemsValues, JustifyContentValues, WidthFraction } from '@type/Styles';

interface FormLayoutProps extends ChildrenProps {
  width?: WidthFraction;
  justifyContent?: JustifyContentValues;
  alignItems?: AlignItemsValues;
}

export const FormColumn = ({
  children,
  width = 'w-full',
  justifyContent = 'justify-start',
  alignItems,
}: FormLayoutProps) => {
  return (
    <div
      className={`${width} flex flex-col gap-4 ${justifyContent ? justifyContent : ''} ${alignItems ? alignItems : ''}`}
    >
      {children}
    </div>
  );
};

export const FormRow = ({
  children,
  width = 'w-full',
  justifyContent = 'justify-start',
  alignItems = 'items-center',
}: FormLayoutProps) => {
  return (
    <div
      className={`flex gap-4 ${justifyContent ? justifyContent : ''} ${alignItems ? alignItems : ''} ${
        width ? width : ''
      }`}
    >
      {children}
    </div>
  );
};
