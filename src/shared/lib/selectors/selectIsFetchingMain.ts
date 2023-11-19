import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../../app/store/store.ts';

const selectIsFetchingMain = createSelector(
  (state: RootState) => state.appReducer.isFetchingMainPage,
  (isFetching) => isFetching,
);

export default selectIsFetchingMain;
