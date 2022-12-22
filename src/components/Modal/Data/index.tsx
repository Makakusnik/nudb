import { useContext } from 'react';
import { Dialog } from '@headlessui/react';
import type { Product } from '@type/Product';

import { ModalContext } from '@context/ModalContext';

export const DefaultModal = () => {
  const { setModalState } = useContext(ModalContext);
  return (
    <Dialog.Panel className={'w-full max-w-sm rounded bg-white'}>
      <Dialog.Title>Unknown modal</Dialog.Title>
      <Dialog.Description>This modal is default for unhandled modal content.</Dialog.Description>
      <p>Please provide proper modal content data.</p>
      <button onClick={() => setModalState && setModalState(false)}>Cancel</button>
    </Dialog.Panel>
  );
};

interface FoodDetailProps {
  product: Product;
}

const NutritionTable = ({ data }: { data: Product }) => {
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

export const FoodDetailModal = ({ product }: FoodDetailProps) => {
  const { setModalState } = useContext(ModalContext);
  return (
    <Dialog.Panel className={'w-full max-w-2xl rounded-md bg-white p-6'}>
      <Dialog.Title className={'text-2xl font-medium'}>
        {product.name}
        <span className="ml-1 text-base font-normal">{product.brand}</span>
      </Dialog.Title>
      <Dialog.Description className="mt-4 flex" as="div">
        <div className="flex justify-between">
          <div className="tooltip-top flex w-full flex-col bg-slate-500" data-tooltip="This feature is in development">
            <h3 className="text-xl font-normal">Prices</h3>
            <div className="flex"></div>
          </div>
          <div className="flex w-full max-w-[16rem] flex-col px-4">
            <h3 className="mb-2 text-xl font-normal">Nutrition Values</h3>
            <div className="flex w-full max-w-screen-xs">
              <NutritionTable data={product}></NutritionTable>
            </div>
          </div>
        </div>
      </Dialog.Description>
      <button onClick={() => setModalState && setModalState(false)}>Deactivate</button>
      <button onClick={() => setModalState && setModalState(false)}>Cancel</button>
    </Dialog.Panel>
  );
};

export const AddShitModal = () => {
  const { setModalState } = useContext(ModalContext);
  return (
    <Dialog.Panel className={'w-full max-w-sm rounded bg-white'}>
      <Dialog.Title>Shit HOVNO</Dialog.Title>
      <Dialog.Description>This dick this shcmikc</Dialog.Description>

      <p>Are you sure you want to fuck youyrsefllflf</p>

      <button onClick={() => setModalState && setModalState(false)}>Deactivate</button>
      <button onClick={() => setModalState && setModalState(false)}>Cancel</button>
    </Dialog.Panel>
  );
};
