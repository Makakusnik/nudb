import type { ChildrenProps } from '@type/index';

export const FormRow = ({ children }: ChildrenProps) => {
  return <div className="flex flex-col">{children}</div>;
};
