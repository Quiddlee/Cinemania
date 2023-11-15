import { createApi } from '@reduxjs/toolkit/query/react';

import baseQuery from './baseQuery.ts';

const rootApi = createApi({
  reducerPath: 'rootApi',
  baseQuery,
  endpoints: () => ({}),
});

export default rootApi;
