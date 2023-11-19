import { RefObject } from 'react';

import { screen } from '@testing-library/react';
import LocomotiveScroll from 'locomotive-scroll';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';

import MovieList from './MovieList.tsx';
import Movie from '../../entities/movie/ui/Movie.tsx';
import * as useGetMovieList from '../../shared/hooks/useGetMovieList.ts';
import renderWithRouterProvider from '../../test/helpers/renderWithRouterProvider.tsx';
import { mockMovies } from '../../test/mocks/data.ts';

const mockedUseGetMovieList = vi.spyOn(useGetMovieList, 'default');
let scroll: RefObject<LocomotiveScroll>;

describe('MovieList', () => {
  beforeAll(() => {
    scroll = { current: new LocomotiveScroll() };
    vi.clearAllMocks();
  });

  afterAll(() => {
    scroll.current?.destroy();
  });

  it('should display an empty list message', () => {
    mockedUseGetMovieList.mockReturnValue({
      movieList: undefined,
      totalResults: 0,
    });

    renderWithRouterProvider(
      <MovieList
        scroll={scroll}
        render={(movie, i) => (
          <Movie
            onMouseMove={vi.fn()}
            onMouseOut={vi.fn()}
            key={movie.imdbID}
            data={movie}
            delay={i}
          />
        )}
      />,
    );

    expect(
      screen.getByText('No Movies Found.', { exact: false }),
    ).toBeInTheDocument();
  });

  it('should renders the specified number of cards', () => {
    mockedUseGetMovieList.mockReturnValue({
      movieList: mockMovies,
      totalResults: mockMovies.length,
    });

    renderWithRouterProvider(
      <MovieList
        scroll={scroll}
        render={(movie, i) => (
          <Movie
            onMouseMove={vi.fn()}
            onMouseOut={vi.fn()}
            key={movie.imdbID}
            data={movie}
            delay={i}
          />
        )}
      />,
    );

    expect(screen.getAllByTestId('movie').length).toBe(10);
  });
});
