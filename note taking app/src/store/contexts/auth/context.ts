import React, { useContext } from 'react';

export const AuthContext = React.createContext<AuthContextType | null>(null);

import type { AuthContextType } from './provider';

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(
      'useAuthContext must be used within an AuthContext.Provider'
    );
  }
  return context;
};
