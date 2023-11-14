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

  it('should render the relevant movie data', () => {
    renderWithRouter(
      <Movie
        onMouseMove={vi.fn()}
        onMouseOut={vi.fn()}
        data={mockMovie}
        delay={0}
      />,
    );

    const poster = screen.getByTestId('movie-poster');
    const title = screen.getByTestId('movie-title');
    const year = screen.getByTestId('movie-year');

    expect(poster).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(year).toBeInTheDocument();

    expect(poster).toHaveAttribute('src', mockMovie.Poster);
    expect(title).toHaveTextContent(mockMovie.Title);
    expect(year).toHaveTextContent(mockMovie.Year);
  });

  it('should open a detailed card component when clicking on a card', async () => {
    mockedUseSearch.mockReturnValue(createMockSearchContext());

    renderWithRouter();

    expect(screen.queryByTestId('details-section')).toBeNull();

    const [movie] = screen.getAllByTestId('movie-item');
    await userEvent.click(movie);

    const detailsSection = await screen.findByTestId('details-section');
    expect(detailsSection).toBeInTheDocument();
  });

  it('should triggers an additional API call to fetch detailed information when clicking on the card', async () => {
    mockedUseSearch.mockReturnValue(createMockSearchContext());

    renderWithRouter();

    const [movie] = screen.getAllByTestId('movie-item');
    await userEvent.click(movie);

    expect(mockedApiMovie).toBeCalledTimes(1);
  });
});
