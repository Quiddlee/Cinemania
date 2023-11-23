import { ReactNode } from 'react';

import { renderHook, waitFor } from '@testing-library/react';

import {
  useGetMovieListQuery,
  useGetMovieQuery,
} from '@entities/movie/api/movieApi';
import {
  DEFAULT_PAGE,
  MOVIES_PER_PAGE,
  QUERY_FALLBACK,
} from '@shared/const/const';
import { mockMovieDetails, mockMovies } from '@test/mocks/data';
import { Provider } from 'react-redux';
import { describe, expect, it } from 'vitest';

import { setupStore } from '../../../app/store/store';

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
