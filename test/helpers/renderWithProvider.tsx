import { PropsWithChildren, ReactElement } from 'react';

import { setupListeners } from '@reduxjs/toolkit/query';
import { render } from '@testing-library/react';

import IOptions from '@test/types/interfaces';
import { Provider } from 'react-redux';

import { setupStore } from '../../app/store/store';

function renderWithProvider(
  ui: ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  }: IOptions = {},
) {
  setupListeners(store.dispatch);

  function Wrapper({ children }: PropsWithChildren) {
    return <Provider store={store}>{children}</Provider>;
  }

  return {
    store,
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
  };
}

export default renderWithProvider;
