import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { movieApi } from '../../entities/movie/api/movieApi.ts';
import { searchReducer } from '../../features/Search/model/slice.ts';
import { appReducer } from '../model/slice.ts';

const rootReducer = combineReducers({
  [movieApi.reducerPath]: movieApi.reducer,
  searchReducer,
  appReducer,
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(movieApi.middleware),
  });

export type AppStore = ReturnType<typeof setupStore>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore['dispatch'];
