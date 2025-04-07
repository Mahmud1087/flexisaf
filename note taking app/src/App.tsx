import { useThemeContext } from './store/contexts';
import AppRoutes from './routes';
import { MoonFilled, SunFilled } from '@ant-design/icons';

function App() {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <>
      <AppRoutes />
      <div className='h-10 w-10 rounded-full flex items-center justify-center bg-gray-950 text-white dark:text-black dark:bg-gray-200 cursor-pointer fixed right-6 bottom-6 text-lg'>
        <button className='cursor-pointer' onClick={toggleTheme}>
          {theme === 'light' ? <MoonFilled /> : <SunFilled />}
        </button>
      </div>
    </>
  );
}

export default App;
