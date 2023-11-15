import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
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

export const searchReducer = searchSlice.reducer;
