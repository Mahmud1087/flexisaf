import logo from '@/../public/static/logo-icon.svg';
import { HOME_PAGE } from '@/config';
import { Link } from 'react-router-dom';

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link to={HOME_PAGE}>
      <div className='flex items-center gap-3'>
        <div>
          <img src={logo} alt='logo' className='w-8' />
        </div>
        <p
          className={`text-xl font-bold text-[#171a1fff] dark:text-gray-50 ${className}`}
        >
          NoteSpace
        </p>
      </div>
    </Link>
  );
};
export default Logo;
