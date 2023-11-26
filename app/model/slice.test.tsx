import { describe, expect, it } from 'vitest';

import { appReducer, dataFetched, initialState } from './slice';

describe('appSlice', () => {
  it("should change app's slice dataFetched state", () => {
    const state = appReducer(initialState, dataFetched(true));

    expect(state).toEqual({
      isFetching: true,
    });
  });
});
