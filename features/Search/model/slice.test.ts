import { describe, expect, it } from 'vitest';

import { initialState, queryUpdated, searchReducer } from './slice';

describe('searchSlice', () => {
  it("should change search's slice query state", () => {
    const state = searchReducer(initialState, queryUpdated('test'));

    expect(state).toEqual({ query: 'test' });
  });
});
