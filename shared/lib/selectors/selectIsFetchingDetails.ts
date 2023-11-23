import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../../app/store/store';

const selectIsFetchingMainPage = createSelector(
  (state: RootState) => state.appReducer.isFetchingDetailsPage,
  (isFetching) => isFetching,
);

export default selectIsFetchingMainPage;
