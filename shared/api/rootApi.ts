import { createApi } from '@reduxjs/toolkit/query/react';

import { HYDRATE } from 'next-redux-wrapper';

import baseQuery from './baseQuery';

const rootApi = createApi({
  reducerPath: 'rootApi',
  baseQuery,
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
    return undefined;
  },
  endpoints: () => ({}),
});

export const {
  util: { getRunningQueriesThunk },
} = rootApi;

export default rootApi;
