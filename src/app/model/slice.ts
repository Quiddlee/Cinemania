import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { MOVIES_PER_PAGE } from '../../shared/const/const.ts';

interface IInitialState {
  isFetching: boolean;
  moviesPerPage: number;
}

const initialState: IInitialState = {
  isFetching: false,
  moviesPerPage: MOVIES_PER_PAGE,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    dataFetched: (state, action: PayloadAction<boolean>) => {
      state.isFetching = action.payload;
    },
    moviesPerPageUpdated: (state, action: PayloadAction<number>) => {
      state.moviesPerPage = action.payload;
    },
  },
});

export const { dataFetched, moviesPerPageUpdated } = appSlice.actions;

export const appReducer = appSlice.reducer;
