import { ReactNode } from 'react';

import { setupListeners } from '@reduxjs/toolkit/query';
import { render } from '@testing-library/react';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import { NextRouter } from 'next/router';

import createMockRouter from '@test/helpers/createMockRouter';
import IOptions from '@test/types/interfaces';
import { Provider } from 'react-redux';

import { setupStore } from '../../app/store/store';

function renderWithRouter(
  ui?: ReactNode | null,
  router: Partial<NextRouter> = {},
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  }: IOptions = {},
) {
  const mockRouter = createMockRouter(router);

  setupListeners(store.dispatch);

  return {
    store,
    router: mockRouter,
    ...render(
      <RouterContext.Provider value={mockRouter}>
        <Provider store={store}>{ui}</Provider>
      </RouterContext.Provider>,
      { ...renderOptions },
    ),
  };
}

export default renderWithRouter;
