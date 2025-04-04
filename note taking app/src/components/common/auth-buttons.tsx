import { useNavigate } from '@/hooks';
import { useConvexAuth } from 'convex/react';
import { Button } from '../ui/button';
import { AUTH_PAGE, DASHBOARD_PAGE } from '@/config';

const AuthButtons = () => {
  const { isAuthenticated } = useConvexAuth();
  const { navigate } = useNavigate();

  return (
    <Button
      onClick={() => {
        if (isAuthenticated) {
          navigate(DASHBOARD_PAGE);
        } else {
          navigate(AUTH_PAGE);
        }
      }}
      className={`bg-[#636AE8FF]`}
    >
      <span className='font-normal secondary-font text-sm text-white md:text-base'>
        {isAuthenticated ? 'Go to Dashboard' : 'Get Started'}
      </span>
    </Button>
  );
};
export default AuthButtons;
