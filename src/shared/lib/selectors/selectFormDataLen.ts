import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '@app/store/store';

const selectHookFormData = createSelector(
  (state: RootState) => state.mainReducer,
  (formDataLen) => formDataLen.formDataLen,
);

export default selectHookFormData;
