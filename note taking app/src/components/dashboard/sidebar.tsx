import { Logo } from '../common';
import { Notebook, Settings } from 'lucide-react';
import { useDashboardContext } from '@/store/contexts';
import { AddNewNote } from '.';

const menu = [
  {
    icon: Notebook,
    label: 'Notes',
  },
  // {
  //   icon: FileArchive,
  //   label: 'Archive',
  // },
  // {
  //   icon: Trash2,
  //   label: 'Trash',
  // },
  {
    icon: Settings,
    label: 'Profile',
  },
];

const Sidebar = () => {
  const { list, changeList } = useDashboardContext();

  return (
    <div className='fixed left-0 top-0 bg-slate-50 shadow dark:bg-gray-900 w-[inherit] h-screen px-5 py-8 flex flex-col gap-16'>
      <Logo />
      <div className='flex justify-center'>
        <AddNewNote />
      </div>

      <div className='flex flex-col space-y-3'>
        {menu.map((item, index) => (
          <div
            key={index}
            className={`flex items-center justify-start px-10 py-2.5 space-x-3.5 ${item.label === list ? 'bg-background text-primary dark:bg-slate-800' : 'bg-transparent text-slate-500 dark:text-white'} w-[inherit] rounded-md cursor-pointer transition-all hover:bg-background hover:text-primary dark:hover:bg-slate-800 dark:hover:text-primary`}
            onClick={() => changeList(item.label)}
          >
            <item.icon className='h-5 w-5' />
            <span className='text-sm font-medium'>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Sidebar;
