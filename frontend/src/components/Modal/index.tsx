import { useContext } from 'react';
import { Dialog } from '@headlessui/react';

import { ModalContext } from '@context/ModalContext';

import { DefaultModal } from './Data';

export const Modal = () => {
  const { ModalContent, isModalOpen, setModalState } = useContext(ModalContext);
  return (
    <Dialog open={isModalOpen} onClose={() => setModalState && setModalState(false)}>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4">
        {ModalContent || <DefaultModal />}
      </div>
    </Dialog>
  );
};
