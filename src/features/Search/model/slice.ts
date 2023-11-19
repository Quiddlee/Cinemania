import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { LOCAL_STORAGE_SEARCH_QUERY } from '../../../shared/const/const.ts';

interface IInitialState {
  query: string;
}

export const initialState: IInitialState = {
  query: localStorage.getItem(LOCAL_STORAGE_SEARCH_QUERY) ?? '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    queryUpdated: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
  },
});

export const { queryUpdated } = searchSlice.actions;

export const searchReducer = searchSlice.reducer;
