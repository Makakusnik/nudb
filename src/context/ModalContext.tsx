import { createContext, useState } from 'react';
import type { ChildrenProps } from '@type/index';

interface ModalContextProps {
  isModalOpen: boolean;
  setModalState: (value: boolean) => void;
  toggleModal: () => void;
}

export const ModalContext = createContext<ModalContextProps>({
  isModalOpen: false,
  setModalState: (value) => {
    throw new Error('Not implemented');
    return value;
  },
  toggleModal: () => {
    throw new Error('Not implemented');
  },
});

export const ModalContextProvider = ({ children }: ChildrenProps) => {
  const [isModalOpen, setModalState] = useState<boolean>(false);

  const toggleModal = () => {
    setModalState((prevState) => !prevState);
  };

  return <ModalContext.Provider value={{ isModalOpen, setModalState, toggleModal }}>{children}</ModalContext.Provider>;
};
