'use client';

import { PropsWithChildren } from 'react';

import { Provider } from 'react-redux';

import { setupStore } from '../store/store';

const store = setupStore();

function ReduxProvider({ children }: PropsWithChildren) {
  return <Provider store={store}>{children}</Provider>;
}

export default ReduxProvider;
