import { screen } from '@testing-library/react';

import Movie from '@entities/movie/ui/Movie';
import MovieList from '@features/MovieList/MovieList';
import * as useGetMovieList from '@shared/hooks/useGetMovieList';
import renderWithRouter from '@test/helpers/RenderWithRouter';
import { mockMovies } from '@test/mocks/data';
import { beforeAll, describe, expect, it, vi } from 'vitest';

const mockedUseGetMovieList = vi.spyOn(useGetMovieList, 'default');

describe('MovieList', () => {
  beforeAll(() => void vi.clearAllMocks());

  it('should display an empty list message', () => {
    mockedUseGetMovieList.mockReturnValue({
      movieList: undefined,
      totalResults: 0,
    });

    renderWithRouter(
      <MovieList
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

    renderWithRouter(
      <MovieList
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
