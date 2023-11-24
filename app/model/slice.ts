import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IInitialState {
  isFetchingMainPage: boolean;
  isFetchingDetailsPage: boolean;
}

export const initialState: IInitialState = {
  isFetchingMainPage: false,
  isFetchingDetailsPage: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    dataFetchedMainPage: (state, action: PayloadAction<boolean>) => {
      state.isFetchingMainPage = action.payload;
    },
    dataFetchedDetailsPage: (state, action: PayloadAction<boolean>) => {
      state.isFetchingDetailsPage = action.payload;
    },
  },
});

export const { dataFetchedMainPage, dataFetchedDetailsPage } = appSlice.actions;

export const appReducer = appSlice.reducer;
