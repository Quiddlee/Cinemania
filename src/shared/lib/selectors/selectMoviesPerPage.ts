import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../../app/store/store.ts';

const selectIsFetching = createSelector(
  (state: RootState) => state.appReducer.moviesPerPage,
  (moviesPerPage) => moviesPerPage,
);

export default selectIsFetching;
