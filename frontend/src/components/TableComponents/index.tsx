import { useProducts } from '@hooks/useProducts';

import { TableColumnHeading, TableColumnHeadingSortable } from './Header';
import { TableRow } from './Row';

export const Table = () => {
  const { data } = useProducts();

  return (
    <table className="min-w-fit max-w-full">
      <thead className="flex flex-row rounded-2xl px-0 pb-2 pt-2 text-slate-600 lg:px-4 lg:pt-2">
        <tr className="flex w-full min-w-full flex-row bg-slate-100 lg:rounded-md ">
          <TableColumnHeading dataTooltip="This feature is not yet available.">
            <input disabled className="h-5 w-5 cursor-pointer disabled:cursor-not-allowed" type="checkbox" />
          </TableColumnHeading>
          <TableColumnHeadingSortable className="inline-flex min-w-[12rem] max-w-[12rem] cursor-pointer items-center py-2 text-left font-bold transition-colors focus:text-teal-400 md:min-w-[16rem] md:max-w-[16rem]">
            name
          </TableColumnHeadingSortable>
          <TableColumnHeadingSortable>energy</TableColumnHeadingSortable>
          <TableColumnHeadingSortable>fats</TableColumnHeadingSortable>
          <TableColumnHeadingSortable>carbs</TableColumnHeadingSortable>
          <TableColumnHeadingSortable>proteins</TableColumnHeadingSortable>
          <TableColumnHeadingSortable>salt</TableColumnHeadingSortable>
        </tr>
      </thead>
      <tbody className="lg:px-4">
        {data && data.map((item, index) => <TableRow key={index} data={item.attributes} />)}
      </tbody>
    </table>
  );
};
