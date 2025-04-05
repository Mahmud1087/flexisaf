import { Sidebar } from '@/components/common';
import UserButton from '../common/user-button';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { PlusOutlined } from '@ant-design/icons';

const Navbar = () => {
  return (
    <nav className='w-screen p-4 flex flex-col justify-between bg-slate-50 shadow dark:bg-gray-900 md:px-12 md:py-6 md:w-full lg:flex-row lg:items-center'>
      <section className='w-full flex justify-between items-center pb-3.5 lg:pb-0'>
        <h1 className='text-2xl hidden md:block'>Welcome back!</h1>
        <aside className='hidden w-[20rem] text-sm lg:block'>
          <Input
            placeholder='Search by title, content, or tags...'
            className='rounded-full text-sm placeholder:text-sm secondary-font bg-gray-400 dark:bg-gray-400'
          />
        </aside>
        <UserButton />
        <div className='md:hidden'>
          <Sidebar />
        </div>
      </section>
      <section className='flex gap-12 border-t items-center pt-3.5 lg:pt-0 lg:hidden'>
        <div className='w-full text-sm'>
          <Input
            placeholder='Search by title, content, or tags...'
            className='rounded-full text-sm placeholder:text-sm secondary-font bg-gray-400 dark:bg-gray-400'
          />
        </div>
        <div className='flex justify-center'>
          <Button className='rounded-full p-0 h-8 w-8' asChild>
            <PlusOutlined />
          </Button>
        </div>
      </section>
    </nav>
  );
};
export default Navbar;
