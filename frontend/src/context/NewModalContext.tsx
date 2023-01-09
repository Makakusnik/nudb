import React, { createContext, useState } from 'react';
import type { ChildrenProps } from '@type/index';
import type { ReactNode } from 'react';

import { useDeferredPromise } from '@hooks/useDeferredPromise';

// TODO Split modal and confirmation context,
// TODO Add Neutral choice to confirm context

interface NewModalContextProps {
  isModalOpen: boolean;
  ModalContent: ReactNode | null;
  close: () => void;
  open: (modal: ReactNode, confirmationModal?: ReactNode) => void;
}

interface ConfirmationProps {
  isConfirmationOpen: boolean;
  ConfirmationContent: ReactNode | null;
  answerPositively: () => void;
  answerNegatively: () => void;
  closeConfirmation: () => void;
}

export const NewModalContext = createContext<NewModalContextProps>({
  isModalOpen: false,
  ModalContent: null,
  open: () => null,
  close: () => null,
});

export const ConfirmationContext = createContext<ConfirmationProps>({
  closeConfirmation: () => null,
  answerPositively: () => null,
  answerNegatively: () => null,
  ConfirmationContent: null,
  isConfirmationOpen: false,
});

export const NewModalContextProvider = ({ children }: ChildrenProps) => {
  const [isModalOpen, _setModalState] = useState<boolean>(false);
  const [hasConfirmation, setHasConfirmation] = useState<boolean>(false);
  const [ModalContent, _setModalContent] = useState<ReactNode>();

  const [ConfirmationContent, _setConfirmationContent] = useState<ReactNode>();
  const [isConfirmationOpen, _setConfirmationState] = useState<boolean>(false);

  const { createNewPromise, resolve, promise } = useDeferredPromise<boolean>();

  const initializeConfirmation = () => {
    createNewPromise();
  };
  const answerPositively = () => {
    resolve?.(true);
  };
  const answerNegatively = () => {
    resolve?.(false);
  };
  function closeConfirmation() {
    _setConfirmationState(false);
  }
  function openConfirmation() {
    _setConfirmationState(true);
  }

  async function close() {
    if (hasConfirmation && promise) {
      openConfirmation();
      await promise.then((shouldContinue) => {
        closeConfirmation();
        shouldContinue ? createNewPromise() : _setModalState(false);
      });
      return;
    }
    _setModalState(false);
  }

  function open(modal: ReactNode, confirmationModal?: ReactNode) {
    if (confirmationModal) {
      setHasConfirmation(true);
      _setConfirmationContent(confirmationModal);
      initializeConfirmation();
    }
    _setModalContent(modal);
    _setModalState(true);
  }

  return (
    <NewModalContext.Provider
      value={{
        ModalContent,
        isModalOpen,
        close,
        open,
      }}
    >
      <ConfirmationContext.Provider
        value={{
          ConfirmationContent,
          isConfirmationOpen,
          answerPositively,
          answerNegatively,
          closeConfirmation,
        }}
      >
        {children}
      </ConfirmationContext.Provider>
    </NewModalContext.Provider>
  );
};
