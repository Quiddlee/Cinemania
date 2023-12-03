import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { FormData } from '@widgets/form/types/types';

type IInitialState = {
  formData: FormData | null;
};

export const initialState: IInitialState = {
  formData: null,
};

export const hookFormSlice = createSlice({
  name: 'hookForm',
  initialState,
  reducers: {
    formSubmitted: (state, action: PayloadAction<FormData>) => {
      state.formData = action.payload;
    },
  },
});

export const { formSubmitted } = hookFormSlice.actions;

export const hookFormReducer = hookFormSlice.reducer;
