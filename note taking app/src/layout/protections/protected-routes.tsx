import { Navigate } from 'react-router-dom';
import Layout from '../index';
import { useConvexAuth } from 'convex/react';
import { AUTH_PAGE } from '@/config';
import { Spin } from '@/components/controls';

const ProtectedRoutes = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  if (isLoading) {
    return (
      <div className='h-screen w-screen bg-background dark:text-gray-200 flex justify-center items-center'>
        <Spin />
      </div>
    );
  }

  return isAuthenticated ? (
    <Layout>{children}</Layout>
  ) : (
    <Navigate to={AUTH_PAGE} />
  );
};

export default ProtectedRoutes;
