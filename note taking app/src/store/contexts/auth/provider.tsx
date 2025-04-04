import { Dispatch, SetStateAction, useState } from 'react';
import { AuthContext } from './context';

export type AuthContextType = {
  // You can change this to whatever you want
  user: string | null;
  setUser: Dispatch<SetStateAction<string | null>>;
};

const AuthProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
