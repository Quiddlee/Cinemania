import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../../app/store/store.ts';

const selectIsFetching = createSelector(
  (state: RootState) => state.appReducer.isFetching,
  (query) => query,
);

export default selectIsFetching;
