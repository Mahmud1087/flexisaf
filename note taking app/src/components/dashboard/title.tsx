import { Flex } from 'antd';

const Title = ({ title }: { title: string }) => {
  return (
    <Flex align='center' justify='space-between'>
      <header className='text-3xl pb-4 relative w-fit flex flex-col gap-1.5'>
        <h1 className='tertiary-font'>{title}</h1>
        <hr className='w-[60%] border-b-2 border-b-primary rounded-full' />
      </header>
    </Flex>
  );
};
export default Title;
