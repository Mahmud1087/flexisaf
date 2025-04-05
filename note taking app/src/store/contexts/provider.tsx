import { DashboardProvider } from '.';
import AdminAuthProvider from './auth/provider';
import ModalProvider from './modals/provider';
import ThemeProvider from './theme/provider';
import ToastProvider from './toast/provider';

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <ModalProvider>
        <ToastProvider>
          <AdminAuthProvider>
            <DashboardProvider>{children}</DashboardProvider>
          </AdminAuthProvider>
        </ToastProvider>
      </ModalProvider>
    </ThemeProvider>
  );
};

export default Provider;
