import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as useGetMovieList from '@shared/hooks/useGetMovieList';
import renderWithRouter from '@test/helpers/RenderWithRouter';
import { mockMovieItem, mockMovies } from '@test/mocks/data';
import { afterEach, describe, expect, it, vi } from 'vitest';

import Movie from './ui/Movie';

const mockedUseGetMovieList = vi.spyOn(useGetMovieList, 'default');

describe('Movie', () => {
  afterEach(() => void vi.clearAllMocks());

  it('should render the relevant movie data', () => {
    renderWithRouter(
      <Movie
        onMouseMove={vi.fn()}
        onMouseOut={vi.fn()}
        data={mockMovieItem}
        delay={0}
      />,
    );

    const poster = screen.getByTestId<HTMLImageElement>('movie-poster');
    const title = screen.getByTestId('movie-title');
    const year = screen.getByTestId('movie-year');

    const mockPosterPath = mockMovieItem.Poster.slice(
      mockMovieItem.Poster.lastIndexOf('/') + 1,
    );
    const match = poster.src.match(mockPosterPath);
    const renderedPath = match?.at(0);

    expect(poster).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(year).toBeInTheDocument();

    expect(renderedPath).toBe(mockPosterPath);
    expect(title).toHaveTextContent(mockMovieItem.Title);
    expect(year).toHaveTextContent(mockMovieItem.Year);
  });

  it('should open a detailed card component when clicking on a card', async () => {
    mockedUseGetMovieList.mockReturnValue({
      movieList: mockMovies,
      totalResults: mockMovies.length,
    });

    const router = renderWithRouter(
      <Movie
        data={mockMovieItem}
        delay={0}
        onMouseMove={vi.fn()}
        onMouseOut={vi.fn()}
      />,
    );

    const movie = screen.getByTestId('movie-item');
    await userEvent.click(movie);

    expect(router.push).toHaveBeenCalledWith(
      `/${mockMovieItem.imdbID}`,
      `/${mockMovieItem.imdbID}`,
      {
        locale: undefined,
        scroll: true,
        shallow: undefined,
      },
    );
  });
});
