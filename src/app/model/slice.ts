import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { MOVIES_PER_PAGE } from '../../shared/const/const.ts';

interface IInitialState {
  isFetchingMainPage: boolean;
  isFetchingDetailsPage: boolean;
  moviesPerPage: number;
}

const initialState: IInitialState = {
  isFetchingMainPage: false,
  isFetchingDetailsPage: false,
  moviesPerPage: MOVIES_PER_PAGE,
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

    moviesPerPageUpdated: (state, action: PayloadAction<number>) => {
      state.moviesPerPage = action.payload;
    },
  },
});

export const {
  dataFetchedMainPage,
  dataFetchedDetailsPage,
  moviesPerPageUpdated,
} = appSlice.actions;

export const appReducer = appSlice.reducer;
