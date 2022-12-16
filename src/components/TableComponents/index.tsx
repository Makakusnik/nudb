import type { ChildrenProps } from '@type/index';

export const TableRow = ({ children }: ChildrenProps) => {
  return <tr className="flex w-full flex-row py-1 first:mt-0 even:bg-slate-100 lg:rounded-lg">{children}</tr>;
};

export const NutrientTableCell = ({ children }: ChildrenProps) => {
  return (
    <td className="mx-auto inline-flex min-w-[1rem] max-w-[1rem] items-center justify-center py-2 md:min-w-[6rem] md:max-w-[6rem] ">
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
