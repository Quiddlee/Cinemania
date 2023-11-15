import { combineReducers, configureStore } from '@reduxjs/toolkit';

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

const rootReducer = combineReducers({});

export const setupStore = (preloadedState?: Partial<RootState>) =>
  configureStore({
    preloadedState,
    reducer: rootReducer,
  });
