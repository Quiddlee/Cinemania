import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it } from 'vitest';

import * as apiMovie from './api/apiMovie.ts';
import Movie from './ui/Movie.tsx';
import * as useSearch from '../../features/Search/hooks/useSearch.ts';
import createMockSearchContext from '../../test/helpers/createMockSearchContext.ts';
import renderWithRouter from '../../test/helpers/RenderWithRouter.tsx';
import { mockMovieItem } from '../../test/mocks/data.ts';

const mockMovie = mockMovieItem;
const mockedUseSearch = vi.spyOn(useSearch, 'default');
const mockedApiMovie = vi.spyOn(apiMovie, 'getMovie');

describe('Movie', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('Movie component renders the relevant movie data', () => {
    renderWithRouter(
      <Movie
        onMouseMove={vi.fn()}
        onMouseOut={vi.fn()}
        data={mockMovie}
        delay={0}
      />,
    );

    expect(screen.getByTestId('movie-poster')).toBeInTheDocument();
    expect(screen.getByTestId('movie-title')).toBeInTheDocument();
    expect(screen.getByTestId('movie-year')).toBeInTheDocument();

    expect(screen.getByTestId('movie-poster')).toHaveAttribute(
      'src',
      mockMovie.Poster,
    );
    expect(screen.getByTestId('movie-title')).toHaveTextContent(
      mockMovie.Title,
    );
    expect(screen.getByTestId('movie-year')).toHaveTextContent(mockMovie.Year);
  });

  it('Clicking on a card opens a detailed card component', async () => {
    mockedUseSearch.mockReturnValue(createMockSearchContext());

    renderWithRouter();

    expect(screen.queryByTestId('details-item')).toBeNull();

    const [movie] = screen.getAllByTestId('movie-item');

    await userEvent.click(movie);

    const detailsSection = await screen.findByTestId('details-item');

    expect(detailsSection).toBeInTheDocument();
  });

  it('Clicking on the card triggers an additional API call to fetch detailed information', async () => {
    mockedUseSearch.mockReturnValue(createMockSearchContext());

    renderWithRouter();

    const [movie] = screen.getAllByTestId('movie-item');

    await userEvent.click(movie);

    expect(mockedApiMovie).toBeCalledTimes(1);
  });
});
