import { createSlice } from '@reduxjs/toolkit';

type IInitialState = {
  countryList: { name: string; code: string }[];
};

export const initialState: IInitialState = {
  countryList: [
    {
      name: 'United States of America',
      code: 'US',
    },
    {
      name: 'Ukraine',
      code: 'UA',
    },
    {
      name: 'Poland',
      code: 'PL',
    },
    {
      name: 'Germany',
      code: 'DE',
    },
  ],
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {},
});

export const formReducer = formSlice.reducer;
