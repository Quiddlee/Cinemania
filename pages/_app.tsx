import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useNextRouterViewTransitions } from 'use-view-transitions/next';

import { UseNextRouterViewTransitionsProps } from '@customTypes/interfaces';
import SmoothScrollProvider from '@entities/scroll/context/smoothScroll';
import ErrorBoundary from '@shared/ui/ErrorBoundary';
import FallbackUi from '@shared/ui/FallbackUi';
import AppLayout from '@widgets/AppLayout/AppLayout';
import { Provider } from 'react-redux';

import { wrapper } from '../app/store/store';

import '@styles/globals.css';

function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  const router = useRouter();
  useNextRouterViewTransitions(router as UseNextRouterViewTransitionsProps);

  return (
    <ErrorBoundary fallback={<FallbackUi />}>
      <Provider store={store}>
        <SmoothScrollProvider
          options={{
            smooth: true,
            smartphone: {
              smooth: true,
            },
            lerp: 0.2,
            multiplier: 1.6,
          }}>
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </SmoothScrollProvider>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
