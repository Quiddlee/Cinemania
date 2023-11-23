import type { AppProps } from 'next/app';

import SmoothScrollProvider from '@entities/scroll/context/smoothScroll';
import ErrorBoundary from '@shared/ui/ErrorBoundary';
import FallbackUi from '@shared/ui/FallbackUi';
import AppLayout from '@widgets/AppLayout/AppLayout';

import ReduxProvider from '../app/model/provider';

import '@styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary fallback={<FallbackUi />}>
      <ReduxProvider>
        <SmoothScrollProvider
          options={{
            smooth: true,
            smartphone: {
              smooth: true,
            },
            touchMultiplier: 6,
            lerp: 0.2,
            multiplier: 1.6,
          }}>
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </SmoothScrollProvider>
      </ReduxProvider>
    </ErrorBoundary>
  );
}
