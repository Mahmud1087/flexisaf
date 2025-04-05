import { DashboardNavbar, DashboardSidebar } from '@/components/dashboard';
import { Flex } from 'antd';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex>
      <section className='w-[13.5rem] hidden md:block'>
        <DashboardSidebar />
      </section>
      <main className='w-screen md:w-[calc(100vw-13.5rem)]'>
        <DashboardNavbar />
        <div className='p-6 lg:px-12 md:py-6'>{children}</div>
      </main>
    </Flex>
  );
};
export default DashboardLayout;
