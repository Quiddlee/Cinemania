import { screen } from '@testing-library/react';
import LocomotiveScroll from 'locomotive-scroll';
import { describe, expect, it } from 'vitest';

import MovieList from './MovieList.tsx';
import {
  ApiMovieResponse,
  MovieList as TMovieList,
} from '../../shared/types/types.ts';
import renderWithRouter from '../../test/helpers/RenderWithRouter.tsx';
import * as useSearch from '../Search/hooks/useSearch.ts';
import { ISearchContext } from '../Search/types/types.ts';

const mockedUseSearch = vi.spyOn(useSearch, 'default');
const scroll = { current: new LocomotiveScroll() };
const mockMovies: TMovieList = Array.from({ length: 10 }, (_, i) => ({
  Year: '2023',
  imdbID: String(i),
  Title: 'test',
  Poster: 'test',
  Type: 'test',
}));

function createMockSearchContext(movieData: TMovieList | null): ISearchContext {
  return {
    isLoading: false,
    totalResults: movieData?.length ?? 0,
    movies: movieData,
    query: 'test',
    movieDetails: {} as ApiMovieResponse,
    fetchMovies: () => {},
    updateQuery: () => {},
  };
}

describe('MovieList', () => {
  it('Creates an empty movie list', () => {
    mockedUseSearch.mockReturnValue(createMockSearchContext(null));

    renderWithRouter(<MovieList scroll={scroll} />);

    expect(
      screen.getByText('No Movies Found.', { exact: false }),
    ).toBeInTheDocument();
  });

  it('Creates the movie list with movies', () => {
    mockedUseSearch.mockReturnValue(createMockSearchContext(mockMovies));

    renderWithRouter(<MovieList scroll={scroll} />);

    expect(screen.getAllByTestId('movie').length).toBe(10);
  });
});
