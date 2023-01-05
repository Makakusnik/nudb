import { useContext } from 'react';
import { Dialog } from '@headlessui/react';
import type { ChildrenProps } from '@type/index';

import { IconButton } from '@components/Buttons/IconButton';

import { ModalContext } from '@context/ModalContext';

import { CloseSymbol } from '@assets/icons';

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

interface DialogTitleProps {
  onClose?: () => void;
}

export const DialogTopBar = ({ children, onClose }: DialogTitleProps & ChildrenProps) => {
  const { setModalState } = useContext(ModalContext);

  const handleClose = () => {
    onClose && onClose();
    setModalState(false);
  };
  return (
    <Dialog.Title className={'flex justify-between text-2xl font-medium'}>
      {children}
      <IconButton onClick={handleClose} icon={CloseSymbol} colorType="close"></IconButton>
    </Dialog.Title>
  );
};
