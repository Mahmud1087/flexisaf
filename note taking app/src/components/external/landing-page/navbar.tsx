import { useLocation } from 'react-router-dom';
import { Logo, Sidebar } from '@/components/common';
import AuthButtons from '@/components/common/auth-buttons';

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

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <nav className='p-4 flex items-center justify-between md:px-10 md:py-6'>
      <Logo />
      <ul className='hidden items-center gap-7 md:flex'>
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
      <div className='hidden md:flex gap-3'>
        <AuthButtons />
      </div>
      <div className='md:hidden'>
        <Sidebar />
      </div>
    </nav>
  );
};
export default Navbar;
