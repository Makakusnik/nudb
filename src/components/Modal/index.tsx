import { useContext } from 'react';
import { Dialog } from '@headlessui/react';

import { ModalContext } from '@context/ModalContext';

import { AddFoodModal } from './Data';

export const Modal = () => {
  const { ModalContent, isModalOpen, setModalState } = useContext(ModalContext);

  return (
    <Dialog open={isModalOpen} onClose={() => setModalState && setModalState(false)}>
      {ModalContent || <AddFoodModal></AddFoodModal>}
    </Dialog>
  );
};
