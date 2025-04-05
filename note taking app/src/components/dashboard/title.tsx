import { Flex } from 'antd';
import dayjs from 'dayjs';

const Title = ({ title }: { title: string }) => {
  return (
    <Flex align='center' justify='space-between'>
      <header className='text-3xl pb-4 relative w-fit flex flex-col gap-1.5'>
        <h1 className='tertiary-font'>{title}</h1>
        <hr className='w-[60%] border-b-2 border-b-orange-600 rounded-full' />
      </header>
      <p className='text-sm font-medium text-gray-600 dark:text-slate-300'>
        📅 {dayjs(Date.now()).format('MMMM YYYY')}
      </p>
    </Flex>
  );
};
export default Title;
