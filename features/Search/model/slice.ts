import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IInitialState {
  query: string;
}

export const initialState: IInitialState = {
  query: '',
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
