import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../../../app/store/store.ts';

const selectSearchQuery = createSelector(
  (state: RootState) => state.searchReducer.query,
  (query) => query,
);

export default selectSearchQuery;
