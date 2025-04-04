import React, { useContext } from 'react';

export const ModalContext = React.createContext<ModalContextType | null>(null);

import type { ModalContextType } from './provider';

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error(
      'useModalContext must be used within an ModalContext.Provider'
    );
  }
  return context;
};
