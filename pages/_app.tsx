import type { AppProps } from 'next/app';

import ErrorBoundary from '@shared/ui/ErrorBoundary';
import FallbackUi from '@shared/ui/FallbackUi';
import AppLayout from '@widgets/AppLayout/AppLayout';

import ReduxProvider from '../app/model/provider';

import '@styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary fallback={<FallbackUi />}>
      <ReduxProvider>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </ReduxProvider>
    </ErrorBoundary>
  );
}
