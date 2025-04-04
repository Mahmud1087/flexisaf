import useNavigation from '../../hooks/use-navigate';
import { HOME_PAGE } from '@/config';
import { ArrowLeftOutlined, HomeOutlined } from '@ant-design/icons';
const NotFound = () => {
  const { goBack, navigate } = useNavigation();

  return (
    <div className='w-full h-screen bg-gray-300 flex flex-col items-center justify-center'>
      <p className='text-3xl flex gap-3 items-center'>
        <span className='text-red-500'>404:</span>
        <span>Page Not Found</span>
      </p>
      <div className='gap-6 h-20 flex flex-col items-center justify-between sm:flex-row max-w-xs mx-auto'>
        <span
          onClick={() => goBack()}
          className='w-14 h-8 rounded-md bg-gray-700 flex flex-col items-center justify-center text-white cursor-pointer hover:bg-gray-600 transition-all'
        >
          <ArrowLeftOutlined />
        </span>
        <span
          onClick={() => navigate(HOME_PAGE)}
          className='w-14 h-8 rounded-md bg-blue-700 flex gap-1.5 items-center justify-center text-white cursor-pointer hover:bg-blue-600 transition-all'
        >
          <HomeOutlined />
        </span>
      </div>
    </div>
  );
};
export default NotFound;
