'use client';

import { Provider } from 'react-redux';
import { store } from '../store/store';
import { StoreInitializer } from './storeInitializer';
import { ThemeProvider } from 'next-themes';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <StoreInitializer>{children}</StoreInitializer>
      </ThemeProvider>
    </Provider>
  );
}
