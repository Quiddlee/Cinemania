import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../../app/store/store';

const selectIsFetching = createSelector(
  (state: RootState) => state.appReducer.isFetching,
  (isFetching) => isFetching,
);

export default selectIsFetching;
