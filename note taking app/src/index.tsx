import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';

import 'antd/dist/reset.css';
import './index.css';
import { ConvexAuthProvider } from '@convex-dev/auth/react';
import { ConvexReactClient } from 'convex/react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalContextProvider } from './store/contexts/index.ts';
import { ConfigProvider } from 'antd';
import theme from './config/theme.ts';

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConvexAuthProvider client={convex}>
      <BrowserRouter>
        <ConfigProvider theme={theme({ themeValue: 'light' })}>
          <GlobalContextProvider>
            <App />
          </GlobalContextProvider>
        </ConfigProvider>
      </BrowserRouter>
    </ConvexAuthProvider>
  </React.StrictMode>
);
