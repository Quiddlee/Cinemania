import type { AppProps } from 'next/app';

import ReduxProvider from '../app/model/provider';

import '@styles/globals.css';
import AppLayout from '@widgets/AppLayout/AppLayout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </ReduxProvider>
  );
}
