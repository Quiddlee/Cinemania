import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { movieApi } from '@entities/movie/api/movieApi';
import { searchReducer } from '@features/Search/model/slice';

import { appReducer } from '../model/slice';

export type AppStore = ReturnType<typeof setupStore>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore['dispatch'];
export type PreloadState = Partial<RootState>;

const rootReducer = combineReducers({
  [movieApi.reducerPath]: movieApi.reducer,
  searchReducer,
  appReducer,
});

export const setupStore = (preloadedState?: PreloadState) =>
  configureStore({
    preloadedState,
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(movieApi.middleware),
  });
