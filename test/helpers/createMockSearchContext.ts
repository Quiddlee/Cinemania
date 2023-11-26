import { MovieList as TMovieList } from '@customTypes/types';
import { ISearchContext } from '@features/Search/types/types';
import { mockMovies } from '@test/mocks/data';
import { vi } from 'vitest';

function createMockSearchContext(
  movieData: TMovieList | null = mockMovies,
): ISearchContext {
  return {
    isLoading: false,
    totalResults: movieData?.length ?? 0,
    movies: movieData,
    query: 'test',
    fetchMovies: vi.fn(),
    updateQuery: vi.fn(),
  };
}

export default createMockSearchContext;
