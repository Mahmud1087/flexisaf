import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { DashboardContext } from './context';
import { DashboardTabListType } from '@/types';

export type DashboardContextType = {
  // You can change this to whatever you want
  list: DashboardTabListType;
  setList: Dispatch<SetStateAction<DashboardTabListType>>;
  changeList: (item: string) => void;
};

const AuthProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const getInitialList = (): DashboardTabListType => {
    const stored = localStorage.getItem('list') as DashboardTabListType | null;
    if (
      stored === 'All Notes' ||
      stored === 'Archive' ||
      stored === 'Trash' ||
      stored === 'Profile'
    ) {
      return stored;
    }
    localStorage.setItem('list', 'All Notes');
    return 'All Notes';
  };

  const [list, setList] = useState<DashboardTabListType>(() =>
    getInitialList()
  );

  useEffect(() => {
    localStorage.setItem('list', list);
  }, [list]);

  const changeList = (item: string) => {
    setList(item as DashboardTabListType);
    localStorage.setItem('list', item);
  };

  return (
    <DashboardContext.Provider
      value={{
        list,
        setList,
        changeList,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export default AuthProvider;
