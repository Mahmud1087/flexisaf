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

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <Sheet>
      <SheetTrigger>
        <MenuOutlined />
      </SheetTrigger>
      <SheetContent side='left'>
        <SheetHeader>
          <SheetTitle>
            <Logo />
          </SheetTitle>
          <div className='mt-10'>
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
                  >
                    <a href={item.path}>{item.title}</a>
                  </li>
                );
              })}
            </ul>

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
