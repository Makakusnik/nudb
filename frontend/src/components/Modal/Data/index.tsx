import { useContext } from 'react';
import { Dialog } from '@headlessui/react';
import type { ProductType } from '@type/Product';

import { AddInputButton } from '@components/Buttons';
import { NutritionTable } from '@components/NutritionalTable';

import { ModalContext } from '@context/ModalContext';

import { DialogTopBar } from '..';

export const DefaultModal = () => {
  const { setModalState } = useContext(ModalContext);
  return (
    <Dialog.Panel className={'w-full max-w-sm rounded bg-white'}>
      <DialogTopBar>Unknown</DialogTopBar>
      <Dialog.Description>This modal is default for unhandled modal content.</Dialog.Description>
      <p>Please provide proper modal content data.</p>
      <button onClick={() => setModalState && setModalState(false)}>Cancel</button>
    </Dialog.Panel>
  );
};

interface FoodDetailProps {
  product: ProductType;
}
export const FoodDetailModal = ({ product }: FoodDetailProps) => {
  return (
    <Dialog.Panel className={'w-full max-w-2xl rounded-md bg-white p-6'}>
      <DialogTopBar>
        <span>
          {product.name}
          <span className="ml-1 text-base font-normal">{product.brand}</span>
        </span>
      </DialogTopBar>
      <Dialog.Description className="mt-4 flex" as="div">
        <div className="flex w-full justify-between">
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
      <div className="mt-4 flex w-full justify-end">
        <AddInputButton>Add Food</AddInputButton>
      </div>
    </Dialog.Panel>
  );
};
