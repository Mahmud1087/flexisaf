import { lazy } from 'react';
import {
  DASHBOARD_PAGE,
  SINGLE_NOTE_PAGE,
  SETTINGS_PAGE,
} from '../page-routes';

export const dashboardRoutes = [
  {
    path: DASHBOARD_PAGE,
    component: lazy(() => import('../../pages/dashboard/index')),
  },

  {
    path: SINGLE_NOTE_PAGE,
    component: lazy(() => import('../../pages/dashboard/singleNote/index')),
  },

  {
    path: SETTINGS_PAGE,
    component: lazy(() => import('../../pages/dashboard/settings')),
  },
];
