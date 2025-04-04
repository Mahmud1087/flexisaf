import React, { useContext } from 'react';

export const ThemeContext = React.createContext<ThemeContextType | null>(null);

import type { ThemeContextType } from './provider';

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      'useThemeContext must be used within an ThemeContext.Provider'
    );
  }
  return context;
};
