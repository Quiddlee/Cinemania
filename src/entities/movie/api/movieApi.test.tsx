import { ReactNode } from 'react';

import { renderHook, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { describe, it } from 'vitest';

import { useGetMovieListQuery, useGetMovieQuery } from './movieApi.ts';
import { setupStore } from '../../../app/store/store.ts';
import {
  DEFAULT_PAGE,
  MOVIES_PER_PAGE,
  QUERY_FALLBACK,
} from '../../../shared/const/const.ts';
import { mockMovieDetails, mockMovies } from '../../../test/mocks/data.ts';

function wrapper({ children }: { children: ReactNode }) {
  const store = setupStore();
  return <Provider store={store}>{children}</Provider>;
}

describe('movieApi', () => {
  it('should fetch movie list data', async () => {
    const { result } = renderHook(
      () =>
        useGetMovieListQuery({
          moviesPerPage: MOVIES_PER_PAGE,
          query: QUERY_FALLBACK,
          page: String(DEFAULT_PAGE),
        }),
      { wrapper },
    );

    expect(result.current).toMatchObject({
      data: undefined,
      isFetching: true,
    });

    await waitFor(() => {
      expect(result.current).toMatchObject({
        data: mockMovies,
        isFetching: false,
      });
    });
  });

  it('should fetch movie details', async () => {
    const { result } = renderHook(() => useGetMovieQuery('test'), { wrapper });

    expect(result.current).toMatchObject({
      data: undefined,
      isFetching: true,
    });

    await waitFor(() => {
      expect(result.current).toMatchObject({
        data: mockMovieDetails,
        isFetching: false,
      });
    });
  });
});
