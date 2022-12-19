import { useContext } from 'react';
import { Dialog } from '@headlessui/react';

import { ModalContext } from '@context/ModalContext';

export const AddFoodModal = () => {
  const { setModalState } = useContext(ModalContext);
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 p-4">
      <Dialog.Panel className={'w-full max-w-sm rounded bg-white'}>
        <Dialog.Title>Deactivate account</Dialog.Title>
        <Dialog.Description>This will permanently deactivate your account</Dialog.Description>

        <p>
          Are you sure you want to deactivate your account? All of your data will be permanently removed. This action
          cannot be undone.
        </p>

        <button onClick={() => setModalState(false)}>Deactivate</button>
        <button onClick={() => setModalState(false)}>Cancel</button>
      </Dialog.Panel>
    </div>
  );
};
