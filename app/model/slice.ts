import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IInitialState {
  isFetching: boolean;
}

export const initialState: IInitialState = {
  isFetching: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    dataFetched: (state, action: PayloadAction<boolean>) => {
      state.isFetching = action.payload;
    },
  },
});

export const { dataFetched } = appSlice.actions;

export const appReducer = appSlice.reducer;
