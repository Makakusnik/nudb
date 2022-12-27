import type { ChildrenProps } from '@type/index';

export const NutrientTableCell = ({ children }: ChildrenProps) => {
  return (
    <td
      onClick={(e) => {
        e;
      }}
      className="mx-auto inline-flex min-w-[6ch] max-w-[6ch] items-center justify-center py-2 text-slate-500 md:min-w-[6ch] md:max-w-[6ch] "
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
