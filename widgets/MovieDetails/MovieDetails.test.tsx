import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import reactLogo from '@assets/reactJS-logo.png';
import { movieApi } from '@entities/movie/api/movieApi';
import * as useGetMovie from '@shared/hooks/useGetMovie';
import convertSecsToHrsAndMins from '@shared/lib/helpers/convertSecsToHrsAndMins';
import { NO_POSTER_QUERY_TEST_CASE } from '@test/const/const';
import renderWithRouter from '@test/helpers/RenderWithRouter';
import { mockMovieDetails, mockMovieDetailsNoPoster } from '@test/mocks/data';
import MovieDetails from '@widgets/MovieDetails/MovieDetails';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { setupStore } from '../../app/store/store';

const runtimeHours = convertSecsToHrsAndMins(mockMovieDetails.Runtime);
const descriptionSliced = `${mockMovieDetails.Plot.slice(0, 150)}...`;
const mockedUseGetMovie = vi.spyOn(useGetMovie, 'default');
const store = setupStore();

describe('Movie details', () => {
  afterEach(() => {
    vi.clearAllMocks();
    store.dispatch(movieApi.util.resetApiState());
  });

  it('should render the details section', async () => {
    mockedUseGetMovie.mockReturnValue(mockMovieDetails);

    renderWithRouter(<MovieDetails />);

    const detailsSection = await screen.findByTestId('details-section');
    expect(detailsSection).toBeInTheDocument();
  });

  it('should properly calculate and edit the runtime', async () => {
    mockedUseGetMovie.mockReturnValue(mockMovieDetails);

    renderWithRouter(<MovieDetails />);

    const runtime = await screen.findByTestId('details-runtime');
    expect(runtime).toHaveTextContent(runtimeHours);
  });

  it('should properly slice the description', async () => {
    mockedUseGetMovie.mockReturnValue(mockMovieDetails);

    renderWithRouter(<MovieDetails />);

    const description = await screen.findByTestId('details-description');
    expect(description).toHaveTextContent(descriptionSliced);
  });

  it('should handle no poster case', async () => {
    mockedUseGetMovie.mockReturnValue(mockMovieDetailsNoPoster);

    renderWithRouter(<MovieDetails />, { basePath: NO_POSTER_QUERY_TEST_CASE });

    const poster =
      await screen.findByTestId<HTMLImageElement>('details-poster');

    const reactLogoPath = (reactLogo as unknown as string).slice(
      (reactLogo as unknown as string).lastIndexOf('/') + 1,
    );
    const match = poster.src.match(reactLogoPath);

    expect(match?.at(0)).toBe(reactLogoPath);
  });

  it('should correctly display the details data', async () => {
    mockedUseGetMovie.mockReturnValue(mockMovieDetails);

    renderWithRouter(<MovieDetails />);

    const [poster, title, runtime, genre, rating, descr, director, cast] =
      await Promise.all([
        screen.findByTestId('details-poster'),
        screen.findByTestId('details-title'),
        screen.findByTestId('details-runtime'),
        screen.findByTestId('details-genre'),
        screen.findByTestId('details-rating'),
        screen.findByTestId('details-description'),
        screen.findByTestId('details-director'),
        screen.findByTestId('details-cast'),
      ]);

    expect(poster).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(runtime).toBeInTheDocument();
    expect(genre).toBeInTheDocument();
    expect(rating).toBeInTheDocument();
    expect(descr).toBeInTheDocument();
    expect(director).toBeInTheDocument();
    expect(cast).toBeInTheDocument();

    expect(title).toHaveTextContent(mockMovieDetails.Title);
    expect(runtime).toHaveTextContent(runtimeHours);
    expect(genre).toHaveTextContent(mockMovieDetails.Genre);
    expect(rating).toHaveTextContent(mockMovieDetails.imdbRating);
    expect(descr).toHaveTextContent(descriptionSliced);
    expect(director).toHaveTextContent(mockMovieDetails.Director);
    expect(cast).toHaveTextContent(mockMovieDetails.Actors);
  });

  it('should hide the component on close button click', async () => {
    mockedUseGetMovie.mockReturnValue(mockMovieDetails);

    const router = renderWithRouter(<MovieDetails />);

    const [closeButton, detailsSection] = await Promise.all([
      screen.findByTestId('details-close'),
      screen.findByTestId('details-section'),
    ]);

    expect(closeButton).toBeInTheDocument();
    expect(detailsSection).toBeInTheDocument();

    await userEvent.click(closeButton);

    expect(router.push).toHaveBeenCalled();
  });
});
