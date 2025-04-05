import { DashboardNavbar, DashboardSidebar } from '@/components/dashboard';
import { Flex } from 'antd';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex>
      <section className='w-[13.5rem] hidden md:block'>
        <DashboardSidebar />
      </section>
      <main className='w-[calc(100vw-13.5rem)]'>
        <DashboardNavbar />
        {children}
      </main>
    </Flex>
  );
};
export default DashboardLayout;
