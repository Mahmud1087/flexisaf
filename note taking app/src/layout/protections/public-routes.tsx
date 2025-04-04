import { Navigate } from 'react-router-dom';
import Layout from '../index';
import { useConvexAuth } from 'convex/react';
import { AUTH_PAGE } from '@/config';

const PublicRoutes = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useConvexAuth();

  return isAuthenticated ? (
    <Layout>{children}</Layout>
  ) : (
    <Navigate to={AUTH_PAGE} />
  );
};

export default PublicRoutes;
