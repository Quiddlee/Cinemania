import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '@app/store/store';

const selectHookFormData = createSelector(
  (state: RootState) => state.formReducer.countryList,
  (countryList) => countryList,
);

export default selectHookFormData;
