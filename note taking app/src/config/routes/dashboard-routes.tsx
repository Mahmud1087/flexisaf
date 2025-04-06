import { lazy } from 'react';
import { DASHBOARD_PAGE, EXPENSES_PAGE, SETTINGS_PAGE } from '../page-routes';

export const dashboardRoutes = [
  {
    path: DASHBOARD_PAGE,
    component: lazy(() => import('../../pages/dashboard/index')),
  },

  {
    path: EXPENSES_PAGE,
    component: lazy(() => import('../../pages/dashboard/expenses/index')),
  },

  {
    path: SETTINGS_PAGE,
    component: lazy(() => import('../../pages/dashboard/settings')),
  },
];
