import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { HookFormFields } from '@pages/hookForm/model/hookFormSchema';

type HookFormData = Omit<HookFormFields, 'picture'> & {
  picture: string;
};

type IInitialState = {
  formData: HookFormData | null;
};

export const initialState: IInitialState = {
  formData: null,
};

export const hookFormSlice = createSlice({
  name: 'hookForm',
  initialState,
  reducers: {
    formSubmitted: (state, action: PayloadAction<HookFormData>) => {
      state.formData = action.payload;
    },
  },
});

export const { formSubmitted } = hookFormSlice.actions;

export const hookFormReducer = hookFormSlice.reducer;
