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

export const FoodDetailModal = ({ product }: FoodDetailProps) => {
  const { setModalState } = useContext(ModalContext);
  return (
    <Dialog.Panel className={'w-full max-w-sm rounded-md bg-white p-4'}>
      <Dialog.Title>{product.name}</Dialog.Title>
      <Dialog.Description>{product.fats}</Dialog.Description>
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
