/* eslint-disable react-hooks/exhaustive-deps */
import { Navigate } from 'react-router-dom';
import Layout from '../index';
import { useConvexAuth } from 'convex/react';
import { AUTH_PAGE } from '@/config';
import { useToastContext } from '@/store/contexts';
import { useEffect } from 'react';

const ProtectedRoutes = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useConvexAuth();
  const { open } = useToastContext();

  useEffect(() => {
    if (!isAuthenticated) {
      open({
        type: 'error',
        message: 'Unathenticated, please login.',
        duration: 6,
      });
    }
  }, []);
  console.log(isAuthenticated);

  return isAuthenticated ? (
    <Layout>{children}</Layout>
  ) : (
    <Navigate to={AUTH_PAGE} />
  );
};

export default ProtectedRoutes;
