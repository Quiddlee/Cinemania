import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '@app/store/store';

const selectHookFormData = createSelector(
  (state: RootState) => state.hookFormReducer,
  (formData) => formData,
);

export default selectHookFormData;
