import React, { createContext, useState } from 'react';
import type { ChildrenProps } from '@type/index';
import type { ReactNode } from 'react';

interface ModalContextProps {
  isModalOpen: boolean;
  ModalContent: ReactNode | null;
  setModalState: (value: boolean) => void;
  setModalContent: (component: ReactNode) => void;
  setCloseHandler: (onClose: () => void) => void;
  closeHandler: () => void;
}

export const ModalContext = createContext<ModalContextProps>({
  isModalOpen: false,
  ModalContent: null,
  setModalState: (value) => null,
  setModalContent: (value) => null,
  setCloseHandler: (onClose) => null,
  closeHandler: () => {
    return;
  },
});

export const ModalContextProvider = ({ children }: ChildrenProps) => {
  const [isModalOpen, _setModalState] = useState<boolean>(false);
  const [ModalContent, _setModalContent] = useState<ReactNode>();
  const [closeHandler, _setCloseHandler] = useState(() => () => {
    return;
  });

  const setCloseHandler = (onClose: () => void) => {
    _setCloseHandler(() => onClose);
  };

  const setModalState = (value: boolean) => {
    if (!value) {
      closeHandler();
    }
    _setModalState(value);
  };

  const setModalContent = (value: ReactNode) => {
    _setModalContent(value);
  };

  return (
    <ModalContext.Provider
      value={{
        ModalContent,
        isModalOpen,
        setModalContent,
        setModalState,
        setCloseHandler,
        closeHandler,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
