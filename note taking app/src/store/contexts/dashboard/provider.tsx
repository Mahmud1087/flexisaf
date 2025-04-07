import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { DashboardContext } from './context';
import { DashboardTabListType, NoteListType } from '@/types';
import { useQuery } from 'convex/react';
import { api } from '@/../convex/_generated/api';
import { useDebounce } from '@/hooks';

export type DashboardContextType = {
  list: DashboardTabListType;
  filterInput: string;
  setFilterInput: Dispatch<SetStateAction<string>>;
  setFilterType: Dispatch<SetStateAction<'search' | 'select'>>;
  setList: Dispatch<SetStateAction<DashboardTabListType>>;
  changeList: (item: string) => void;
  notes: NoteListType | undefined;
};

const getInitialList = (): DashboardTabListType => {
  const stored = localStorage.getItem('list') as DashboardTabListType | null;
  if (
    stored === 'Notes' ||
    stored === 'Archive' ||
    stored === 'Trash' ||
    stored === 'Profile'
  ) {
    return stored;
  }
  localStorage.setItem('list', 'Notes');
  return 'Notes';
};

const AuthProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [list, setList] = useState<DashboardTabListType>(() =>
    getInitialList()
  );
  const [filterType, setFilterType] = useState<'search' | 'select'>('search');

  const [filterInput, setFilterInput] = useState('');
  const debouncedInput = useDebounce(filterInput);

  const notes = useQuery(api.notes.getAllNotes, {
    search: debouncedInput,
    type: filterType,
  });

  const changeList = (item: string) => {
    setList(item as DashboardTabListType);
    localStorage.setItem('list', item);
  };

  useEffect(() => {
    localStorage.setItem('list', list);
  }, [list]);

  return (
    <DashboardContext.Provider
      value={{
        list,
        filterInput,
        setFilterInput,
        notes: notes!,
        setFilterType,
        setList,
        changeList,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export default AuthProvider;
