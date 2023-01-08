import React, { createContext, useState } from 'react';
import type { ChildrenProps } from '@type/index';
import type { ReactNode } from 'react';

import { useDeferredPromise } from '@hooks/useDeferredPromise';

interface NewModalContextProps {
  isModalOpen: boolean;
  ModalContent: ReactNode | null;
  close: () => void;
  open: (component: ReactNode) => void;
}

interface ConfirmationProps {
  isConfirmationOpen: boolean;
  ConfirmationContent: ReactNode | null;
  answerPositively: () => void;
  answerNegatively: () => void;
  closeConfirmation: () => void;
  openConfirmation: () => void;
  setConfirmationContent: (component: ReactNode) => void;
}

export const NewModalContext = createContext<NewModalContextProps>({
  isModalOpen: false,
  ModalContent: null,
  open: () => null,
  close: () => null,
});

export const ConfirmationContext = createContext<ConfirmationProps>({
  closeConfirmation: () => null,
  openConfirmation: () => null,
  answerPositively: () => null,
  answerNegatively: () => null,
  setConfirmationContent: () => null,
  ConfirmationContent: null,
  isConfirmationOpen: false,
});

export const NewModalContextProvider = ({ children }: ChildrenProps) => {
  const [isModalOpen, _setModalState] = useState<boolean>(false);
  const [ModalContent, _setModalContent] = useState<ReactNode>();

  const [ConfirmationContent, _setConfirmationContent] = useState<ReactNode>();
  const [isConfirmationOpen, _setConfirmationState] = useState<boolean>(false);

  const { intializeDefer, deferRef } = useDeferredPromise<boolean>();

  const initializeConfirmation = () => {
    intializeDefer();
  };

  const answerPositively = () => {
    deferRef?.resolve(true);
  };

  const answerNegatively = () => {
    deferRef?.resolve(false);
  };

  function closeConfirmation() {
    _setConfirmationState(false);
  }

  function openConfirmation() {
    _setConfirmationState(true);
  }

  async function close() {
    openConfirmation();

    if (deferRef?.promise) {
      await deferRef?.promise.then((value) => {
        if (!value) {
          closeConfirmation();
          _setModalState(false);
        } else {
          closeConfirmation();
          intializeDefer();
        }
      });
    } else {
      _setModalState(false);
    }
  }

  function open(value: ReactNode) {
    _setModalContent(value);
    _setModalState(true);
    initializeConfirmation();
  }

  const setConfirmationContent = (value: ReactNode) => {
    _setConfirmationContent(value);
  };

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
          openConfirmation,
          setConfirmationContent,
        }}
      >
        {children}
      </ConfirmationContext.Provider>
    </NewModalContext.Provider>
  );
};
