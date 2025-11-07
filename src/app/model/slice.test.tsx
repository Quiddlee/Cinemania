import { describe, expect, it } from 'vitest';

import {
  appReducer,
  dataFetchedDetailsPage,
  dataFetchedMainPage,
  initialState,
  moviesPerPageUpdated,
} from './slice.ts';

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

  it("should change app's slice moviesPerPage state", () => {
    const state = appReducer(initialState, moviesPerPageUpdated(99));

    expect(state).toEqual({
      ...initialState,
      moviesPerPage: 99,
    });
  });
});
