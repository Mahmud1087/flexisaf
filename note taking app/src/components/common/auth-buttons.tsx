import { useNavigate } from '@/hooks';
import { useConvexAuth } from 'convex/react';
import { Button } from '../ui/button';
import { AUTH_PAGE, DASHBOARD_PAGE } from '@/config';
import { useLocation } from 'react-router-dom';
import { useAuthActions } from '@convex-dev/auth/react';

const AuthButtons = () => {
  const { isAuthenticated } = useConvexAuth();
  const { signOut } = useAuthActions();
  const { navigate } = useNavigate();
  const { pathname } = useLocation();

  return (
    <Button
      onClick={() => {
        if (isAuthenticated) {
          if (pathname === DASHBOARD_PAGE) {
            signOut();
          } else {
            navigate(DASHBOARD_PAGE);
          }
        } else {
          navigate(AUTH_PAGE);
        }
      }}
      className={`${pathname === DASHBOARD_PAGE ? 'bg-red-500' : 'bg-[#636AE8FF]'} w-full`}
      size={'sm'}
    >
      <span className='font-normal secondary-font text-sm text-white md:text-base'>
        {isAuthenticated && pathname === DASHBOARD_PAGE
          ? 'Logout'
          : isAuthenticated
            ? 'Back to Dashboard'
            : 'Get Started'}
      </span>
    </Button>
  );
};
export default AuthButtons;
