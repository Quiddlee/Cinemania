import { describe, expect, it } from 'vitest';

import {
  appReducer,
  dataFetchedDetailsPage,
  dataFetchedMainPage,
  initialState,
} from './slice';

describe('appSlice', () => {
  it("should change app's slice dataFetchedDetailsPage state", () => {
    const state = appReducer(initialState, dataFetchedDetailsPage(true));

    expect(state).toEqual({
      ...initialState,
      isFetchingDetailsPage: true,
    });
  });

  it("should change app's slice dataFetchedMainPage state", () => {
    const state = appReducer(initialState, dataFetchedMainPage(true));

    expect(state).toEqual({
      ...initialState,
      isFetchingMainPage: true,
    });
  });
});
