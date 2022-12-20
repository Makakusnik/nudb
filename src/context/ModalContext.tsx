import React, { createContext, useState } from 'react';
import type { ChildrenProps } from '@type/index';
import type { ReactNode } from 'react';

interface ModalContextProps {
  isModalOpen: boolean;
  ModalContent: ReactNode | null;
  setModalState: ((value: boolean) => void) | null;
  toggleModal: (() => void) | null;
  setModalContent: ((component: ReactNode) => void) | null;
}

export const ModalContext = createContext<ModalContextProps>({
  isModalOpen: false,
  ModalContent: null,
  setModalState: null,
  toggleModal: null,
  setModalContent: null,
});

export const ModalContextProvider = ({ children }: ChildrenProps) => {
  const [isModalOpen, _setModalState] = useState<boolean>(false);
  const [ModalContent, _setModalContent] = useState<ReactNode>();

  const toggleModal = () => {
    _setModalState((prevState) => !prevState);
  };

  const setModalState = (value: boolean) => {
    _setModalState && _setModalState(value);
  };

  const setModalContent = (value: ReactNode) => {
    _setModalContent && _setModalContent(value);
  };

  return (
    <ModalContext.Provider
      value={{
        ModalContent,
        isModalOpen,
        setModalContent,
        setModalState,
        toggleModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
