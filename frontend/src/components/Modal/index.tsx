import { useContext } from 'react';
import { Dialog } from '@headlessui/react';
import type { ChildrenProps } from '@type/index';

import { IconButton } from '@components/Buttons/IconButton';

import { ConfirmationContext, NewModalContext } from '@context/NewModalContext';

import { CloseSymbol } from '@assets/icons';

import { DefaultConfirmation, DefaultModal } from './Data';

export const Modal = () => {
  const { ModalContent, isModalOpen, close } = useContext(NewModalContext);
  return (
    <Dialog open={isModalOpen} onClose={() => close()}>
      <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/30 p-4">
        {ModalContent || <DefaultModal />}
      </div>
    </Dialog>
  );
};

export const Confirmation = () => {
  const { isConfirmationOpen, ConfirmationContent, closeConfirmation } = useContext(ConfirmationContext);
  return (
    <Dialog open={isConfirmationOpen} onClose={() => closeConfirmation()}>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4">
        {ConfirmationContent || <DefaultConfirmation />}
      </div>
    </Dialog>
  );
};

interface DialogTitleProps {
  onClose?: () => void;
  hasCloseButton?: boolean;
}

export const DialogTopBar = ({ children, onClose, hasCloseButton = true }: DialogTitleProps & ChildrenProps) => {
  const { close } = useContext(NewModalContext);

  const handleClose = () => {
    onClose && onClose();
    close();
  };
  return (
    <Dialog.Title className={'flex justify-between text-2xl font-medium'}>
      {children}
      {hasCloseButton ? <IconButton onClick={handleClose} icon={CloseSymbol} colorType="close"></IconButton> : null}
    </Dialog.Title>
  );
};
