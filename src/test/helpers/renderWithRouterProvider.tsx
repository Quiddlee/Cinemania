import { ReactElement } from 'react';

import { setupListeners } from '@reduxjs/toolkit/query';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';

import { ROUTES } from '../../app/router.tsx';
import { AppStore, PreloadState, setupStore } from '../../app/store/store.ts';

interface IOptions {
  preloadedState?: PreloadState;
  store?: AppStore;
  initialEntries?: string[];
  initialIndex?: number;
}

function renderWithRouterProvider(
  ui?: ReactElement | null,
  {
    preloadedState,
    store = setupStore(preloadedState),
    initialEntries,
    initialIndex,
  }: IOptions = {},
) {
  setupListeners(store.dispatch);

  const routes = ui ? [{ path: '/', ui }] : ROUTES;

  const router = createMemoryRouter(routes, {
    initialEntries,
    initialIndex,
  });

  return {
    store,
    ...render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>,
    ),
  };
}

export default renderWithRouterProvider;
