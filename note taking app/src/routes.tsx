import { Route, Routes } from 'react-router-dom';
import { authRoutes } from './config/routes/auth-routes';
import { dashboardRoutes } from './config/routes/dashboard-routes';
import { externalRoutes } from './config/routes/external-routes';
import NotFoundPage from './pages/404';
import { Suspense } from 'react';
import { Spin } from 'antd';
import { ProtectedRoutes } from './layout/protections';

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        {/* External pages routes */}
        {externalRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <Suspense
                fallback={
                  <div className='h-screen w-screen bg-background dark:text-gray-200 flex justify-center items-center'>
                    <Spin />
                  </div>
                }
              >
                <route.component />
              </Suspense>
            }
          />
        ))}

        {/* Auth pages routes */}
        {authRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <Suspense
                fallback={
                  <div className='h-screen w-screen bg-background dark:text-gray-200 flex justify-center items-center'>
                    <Spin />
                  </div>
                }
              >
                <route.component />
              </Suspense>
            }
          />
        ))}

        {/* Dashboard pages routes */}
        {dashboardRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <ProtectedRoutes>
                <Suspense
                  fallback={
                    <div className='h-screen w-screen bg-background dark:text-gray-200 flex justify-center items-center'>
                      <Spin />
                    </div>
                  }
                >
                  <route.component />
                </Suspense>
              </ProtectedRoutes>
            }
          />
        ))}

        {/* Error route */}
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};
export default AppRoutes;
