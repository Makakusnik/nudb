import type { Product } from '@type/Product';

export const NutritionTable = ({ data }: { data: Product }) => {
  return (
    <div className="flex min-w-full">
      <table className="flex w-full flex-col">
        <caption className="hidden">Nutritional Values for {data.name}</caption>
        <tbody className="w-full">
          <tr className="flex w-full justify-between py-1 ">
            <th className="font-medium" scope="row">
              Fats
            </th>
            <td>{data.fats ?? 0} g</td>
          </tr>
          {data.saturatedFats && (
            <tr className="flex w-full justify-between ">
              <th className="ml-4" scope="row">
                <abbr title="Saturated Fatty Acids">SFA</abbr>
              </th>
              <td>{data.saturatedFats ?? 0} g</td>
            </tr>
          )}
          {data.monoUnsaturatedFats && (
            <tr className="flex w-full justify-between ">
              <th className="ml-4" scope="row">
                <abbr title="Mono Unsaturated Fatty Acids">MUFA</abbr>
              </th>
              <td>{data.monoUnsaturatedFats ?? 0} g</td>
            </tr>
          )}
          {data.polyUnsaturatedFats && (
            <tr className="flex w-full justify-between ">
              <th className="ml-4" scope="row">
                <abbr title="Poly Unsaturated Fatty Acids">PUFA</abbr>
              </th>
              <td>{data.polyUnsaturatedFats ?? 0} g</td>
            </tr>
          )}
          <tr className="flex w-full justify-between ">
            <th className="font-medium" scope="row">
              Carbohydrates
            </th>
            <td>{data.carbohydrates ?? 0} g</td>
          </tr>
          <tr className="flex w-full justify-between ">
            <th className="ml-4 " scope="row">
              Sugar
            </th>
            <td>{data.sugar ?? 0} g</td>
          </tr>
          <tr className="flex w-full justify-between ">
            <th className="ml-4 " scope="row">
              Fiber
            </th>
            <td>{data.fiber ?? 0} g</td>
          </tr>
          <tr className="flex w-full justify-between ">
            <th className="font-medium" scope="row">
              Proteins
            </th>
            <td>{data.proteins ?? 0} g</td>
          </tr>
          <tr className="flex w-full justify-between ">
            <th className="font-medium" scope="row">
              Salt
            </th>
            <td>{data.salt ?? 0} g</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
