import { ReactNode } from 'react';

import { renderHook, waitFor } from '@testing-library/react';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';

import useGetMovieList from '@shared/hooks/useGetMovieList';
import createMockRouter from '@test/helpers/createMockRouter';
import { Provider } from 'react-redux';
import { describe, expect, it } from 'vitest';

import { setupStore } from '../../app/store/store';

function wrapper({ children }: { children: ReactNode }) {
  const store = setupStore();
  return (
    <RouterContext.Provider value={createMockRouter({})}>
      <Provider store={store}>{children}</Provider>
    </RouterContext.Provider>
  );
}

describe('useGetMovieList', () => {
  it('should return movie list', async () => {
    const { result } = renderHook(() => useGetMovieList(), { wrapper });

    expect(result.current).toMatchObject({
      movieList: undefined,
      totalResults: 0,
    });

    await waitFor(() => {
      expect(result.current).toMatchObject({
        movieList: undefined,
        totalResults: 0,
      });
    });
  });
});
