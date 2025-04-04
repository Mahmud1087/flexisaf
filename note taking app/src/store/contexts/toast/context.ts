import React from 'react';

export const ToastContext = React.createContext<ToastContextType>({
  name: 'Default',
  open: () => {},
  close: () => {},
});

import type { ToastContextType } from './provider';

export const useToastContext = () => {
  return React.useContext(ToastContext) as ToastContextType;
};
