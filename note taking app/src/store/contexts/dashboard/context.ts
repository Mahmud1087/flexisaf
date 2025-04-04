import React, { useContext } from 'react';

export const DashboardContext =
  React.createContext<DashboardContextType | null>(null);

import type { DashboardContextType } from './provider';

export const useDashboardContext = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error(
      'useDashboardContext must be used within an DashboardContext.Provider'
    );
  }
  return context;
};
