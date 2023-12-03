import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { FormData } from '@widgets/form/types/types';

type IInitialState = {
  formData: FormData[];
};

export const initialState: IInitialState = {
  formData: [],
};

export const hookFormSlice = createSlice({
  name: 'hookForm',
  initialState,
  reducers: {
    formSubmitted: (state, action: PayloadAction<FormData>) => {
      state.formData.push(action.payload);
    },
  },
});

export const { formSubmitted } = hookFormSlice.actions;

export const hookFormReducer = hookFormSlice.reducer;
