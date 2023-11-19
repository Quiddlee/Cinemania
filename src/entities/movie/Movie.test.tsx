import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it } from 'vitest';

import * as movieApi from './api/movieApi.ts';
import Movie from './ui/Movie.tsx';
import * as useGetMovieList from '../../shared/hooks/useGetMovieList.ts';
import renderWithRouter from '../../test/helpers/RenderWithRouter.tsx';
import renderWithRouterProvider from '../../test/helpers/renderWithRouterProvider.tsx';
import { mockMovieItem, mockMovies } from '../../test/mocks/data.ts';

const mockedUseGetMovieList = vi.spyOn(useGetMovieList, 'default');
const mockedUseGetMovieQuery = vi.spyOn(movieApi, 'useGetMovieQuery');

describe('Movie', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should render the relevant movie data', () => {
    renderWithRouter(
      <Movie
        onMouseMove={vi.fn()}
        onMouseOut={vi.fn()}
        data={mockMovieItem}
        delay={0}
      />,
    );

    const poster = screen.getByTestId('movie-poster');
    const title = screen.getByTestId('movie-title');
    const year = screen.getByTestId('movie-year');

    expect(poster).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(year).toBeInTheDocument();

    expect(poster).toHaveAttribute('src', mockMovieItem.Poster);
    expect(title).toHaveTextContent(mockMovieItem.Title);
    expect(year).toHaveTextContent(mockMovieItem.Year);
  });

  it('should open a detailed card component when clicking on a card', async () => {
    mockedUseGetMovieList.mockReturnValue({
      movieList: mockMovies,
      totalResults: mockMovies.length,
    });

    renderWithRouterProvider();

    expect(screen.queryByTestId('details-section')).toBeNull();

    const [movie] = screen.getAllByTestId('movie-item');
    await userEvent.click(movie);

    const detailsSection = await screen.findByTestId('details-section');
    expect(detailsSection).toBeInTheDocument();
  });

  it('should triggers an additional API call to fetch detailed information when clicking on the card', async () => {
    renderWithRouterProvider();

    const [movie] = screen.getAllByTestId('movie-item');
    await userEvent.click(movie);

    expect(mockedUseGetMovieQuery).toHaveBeenCalled();
  });
});
