import { lazy } from 'react';
import { AUTH_PAGE } from '../page-routes';

export const authRoutes = [
  {
    path: AUTH_PAGE,
    component: lazy(() => import('@/pages/auth/index')),
  },
];
