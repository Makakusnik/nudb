import { useContext } from 'react';
import { Dialog } from '@headlessui/react';
import type { ChildrenProps } from '@type/index';

import { ModalContext } from '@context/ModalContext';

export const Modal = ({ children }: ChildrenProps) => {
  const { isModalOpen, setModalState } = useContext(ModalContext);

  return (
    <Dialog open={isModalOpen} onClose={() => setModalState && setModalState(false)}>
      {children}
    </Dialog>
  );
};
