import { ISearchContext } from '../../features/Search/types/types.ts';
import {
  ApiMovieResponse,
  MovieList as TMovieList,
} from '../../shared/types/types.ts';
import { mockMovies } from '../mocks/data.ts';

function createMockSearchContext(
  movieData: TMovieList | null = mockMovies,
): ISearchContext {
  return {
    isLoading: false,
    totalResults: movieData?.length ?? 0,
    movies: movieData,
    query: 'test',
    movieDetails: {} as ApiMovieResponse,
    fetchMovies: vi.fn(),
    updateQuery: vi.fn(),
  };
}

export default createMockSearchContext;
