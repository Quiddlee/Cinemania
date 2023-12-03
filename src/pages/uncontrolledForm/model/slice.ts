import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { FormData } from '@widgets/form/types/types';

type IInitialState = {
  formData: FormData[];
};

export const initialState: IInitialState = {
  formData: [],
};

export const uncontrolledFormSlice = createSlice({
  name: 'uncontrolledForm',
  initialState,
  reducers: {
    formSubmitted: (state, action: PayloadAction<FormData>) => {
      state.formData.push(action.payload);
    },
  },
});

export const { formSubmitted } = uncontrolledFormSlice.actions;

export const uncontrolledFormReducer = uncontrolledFormSlice.reducer;
