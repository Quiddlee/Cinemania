import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type IInitialState = {
  formDataLen: number;
};

export const initialState: IInitialState = {
  formDataLen: -1,
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    formLengthUpdated: (state, action: PayloadAction<number>) => {
      state.formDataLen = action.payload;
    },
  },
});

export const { formLengthUpdated } = mainSlice.actions;

export const mainReducer = mainSlice.reducer;
