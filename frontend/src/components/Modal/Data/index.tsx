import { useContext, useState } from 'react';
import { Dialog } from '@headlessui/react';
import type { ChildrenProps } from '@type/index';
import type { Product } from '@type/Product';
import { AddSymbol, CloseSymbol } from 'src/Assets/icons';

import { AddInputButton } from '@components/Buttons';
import { IconButton, IconTextButton } from '@components/Buttons/IconButton';
import { FormRow } from '@components/Form';
import { FormInput, FormTextArea } from '@components/Input';
import { NutritionTable } from '@components/NutritionalTable';

import { ModalContext } from '@context/ModalContext';

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
interface DialogTitleProps {
  onClose?: () => void;
}

const DialogTopBar = ({ children, onClose }: DialogTitleProps & ChildrenProps) => {
  const { setModalState } = useContext(ModalContext);

  const handleClose = () => {
    onClose && onClose();
    setModalState(false);
  };
  return (
    <Dialog.Title className={'flex justify-between text-2xl font-medium'}>
      {children}
      <IconButton onClick={handleClose} icon={CloseSymbol} colorType="transparent"></IconButton>
    </Dialog.Title>
  );
};

export const AddProductModal = () => {
  const [isFocused, setFocused] = useState<boolean>(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  return (
    <Dialog.Panel className={'w-full max-w-2xl rounded-md bg-white p-6'}>
      <DialogTopBar>Add Product</DialogTopBar>
      <Dialog.Description className="mt-4 flex" as="div">
        <form className="flex flex-col gap-y-4">
          <FormRow>
            <FormInput
              id="productName"
              name="ProductName"
              label="Product Name:"
              placeholder=""
              type="text"
              autoComplete="false"
            />
          </FormRow>
          <FormRow>
            <FormInput id="brandName" name="BrandName" label="Brand Name:" placeholder="" type="text" />
          </FormRow>
          <FormRow>
            <FormTextArea id="description" name="Description" label="Description:" placeholder="" type="text" />
          </FormRow>
        </form>
      </Dialog.Description>
      <div className="mt-4 flex w-full justify-end">
        <IconTextButton icon={AddSymbol}>Add Food</IconTextButton>
      </div>
    </Dialog.Panel>
  );
};

interface FoodDetailProps {
  product: Product;
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
