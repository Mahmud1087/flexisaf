import { Dispatch, SetStateAction, useState } from 'react';
import { DashboardContext } from './context';

export type DashboardContextType = {
  // You can change this to whatever you want
  user: string | null;
  setUser: Dispatch<SetStateAction<string | null>>;
};

const AuthProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);

  return (
    <DashboardContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export default AuthProvider;
