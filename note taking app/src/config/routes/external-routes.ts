import { lazy } from 'react';
import { ABOUT_PAGE, HOME_PAGE } from '../page-routes';

export const externalRoutes = [
  {
    path: HOME_PAGE,
    component: lazy(() => import('@/pages/index')),
  },

  {
    path: ABOUT_PAGE,
    component: lazy(() => import('@/pages/about-us/index')),
  },
];
