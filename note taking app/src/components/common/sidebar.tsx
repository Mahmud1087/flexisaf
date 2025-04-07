import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { MenuOutlined } from '@ant-design/icons';
import Logo from './logo';
import { useLocation } from 'react-router-dom';
import AuthButtons from './auth-buttons';
import { Notebook, Settings } from 'lucide-react';
import { DASHBOARD_PAGE } from '@/config';
import { useDashboardContext } from '@/store/contexts';
import { useState } from 'react';

const navItems = [
  {
    title: 'Features',
    path: '#features',
  },
  {
    title: 'About',
    path: '#about',
  },
  {
    title: 'Contact',
    path: '#contact',
  },
];

const dashboardNavItems = [
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
  const { pathname } = useLocation();
  const { list, changeList } = useDashboardContext();
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild onClick={() => setOpen(true)}>
        <MenuOutlined />
      </SheetTrigger>
      <SheetContent side='left'>
        <SheetHeader>
          <SheetTitle>
            <Logo />
          </SheetTitle>
          <div className='mt-10'>
            {!pathname.includes(DASHBOARD_PAGE) ? (
              <ul className='flex flex-col items-center gap-7 md:hidden'>
                {navItems.map((item, i) => {
                  return (
                    <li
                      key={i}
                      className={`hover:text-[#636ae8ff] transition-all ${
                        item.path === pathname
                          ? 'text-[#636ae8ff]'
                          : 'text-neutral-600 dark:text-neutral-200'
                      }`}
                      onClick={() => setOpen(false)}
                    >
                      <a href={item.path}>{item.title}</a>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <div className='flex flex-col space-y-3'>
                {dashboardNavItems.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-start px-10 py-2.5 space-x-3.5 ${item.label === list ? 'bg-background text-primary dark:bg-slate-800' : 'bg-transparent text-slate-500 dark:text-white'} w-[inherit] rounded-md cursor-pointer transition-all hover:bg-background hover:text-primary dark:hover:bg-slate-800 dark:hover:text-primary`}
                    onClick={() => {
                      changeList(item.label);
                      setOpen(false);
                    }}
                  >
                    <item.icon className='h-5 w-5' />
                    <span className='text-sm font-medium'>{item.label}</span>
                  </div>
                ))}
              </div>
            )}

            <div className='flex w-full justify-center md:hidden gap-3 mt-20'>
              <AuthButtons />
            </div>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
export default Sidebar;
