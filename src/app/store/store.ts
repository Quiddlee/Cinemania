import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { hookFormReducer } from '@pages/hookForm/model/slice';
import { mainReducer } from '@pages/main/model/slice';
import { uncontrolledFormReducer } from '@pages/uncontrolledForm/model/slice';
import { formReducer } from '@widgets/form/model/slice';

export type AppStore = ReturnType<typeof setupStore>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore['dispatch'];

const rootReducer = combineReducers({
  hookFormReducer,
  uncontrolledFormReducer,
  mainReducer,
  formReducer,
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
  });
