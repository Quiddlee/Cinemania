import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import reactLogo from '../../assets/reactJS-logo.png';
import convertSecsToHrsAndMins from '../../shared/lib/helpers/convertSecsToHrsAndMins.ts';
import NO_POSTER_QUERY_TEST_CASE from '../../test/const/const.ts';
import renderWithRouter from '../../test/helpers/RenderWithRouter.tsx';
import { mockMovieDetails } from '../../test/mocks/data.ts';

const runtimeHours = convertSecsToHrsAndMins(mockMovieDetails.Runtime);
const descriptionSliced = `${mockMovieDetails.Plot.slice(0, 150)}...`;

describe('Movie details', () => {
  it('should render the details section', async () => {
    renderWithRouter(null, ['/test']);

    const detailsSection = await screen.findByTestId('details-section');
    expect(detailsSection).toBeInTheDocument();
  });

  it('should display the loader while fetching data', async () => {
    renderWithRouter(null, ['/test']);

    const loader = await screen.findByTestId('loader');
    expect(loader).toBeInTheDocument();
  });

  it('should properly calculate and edit the runtime', async () => {
    renderWithRouter(null, ['/test']);

    const runtime = await screen.findByTestId('details-runtime');
    expect(runtime).toHaveTextContent(runtimeHours);
  });

  it('should properly slice the description', async () => {
    renderWithRouter(null, ['/test']);

    const description = await screen.findByTestId('details-description');
    expect(description).toHaveTextContent(descriptionSliced);
  });

  it('should handle no poster case', async () => {
    renderWithRouter(null, [`/${NO_POSTER_QUERY_TEST_CASE}`]);

    const poster = await screen.findByTestId('details-poster');
    expect(poster).toHaveAttribute('src', reactLogo);
  });

  it('should correctly display the details data', async () => {
    renderWithRouter(null, ['/test']);

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

    expect(poster).toHaveAttribute('src', mockMovieDetails.Poster);
    expect(title).toHaveTextContent(mockMovieDetails.Title);
    expect(runtime).toHaveTextContent(runtimeHours);
    expect(genre).toHaveTextContent(mockMovieDetails.Genre);
    expect(rating).toHaveTextContent(mockMovieDetails.imdbRating);
    expect(descr).toHaveTextContent(descriptionSliced);
    expect(director).toHaveTextContent(mockMovieDetails.Director);
    expect(cast).toHaveTextContent(mockMovieDetails.Actors);
  });

  it('should hide the component on close button click', async () => {
    renderWithRouter(null, ['/test']);

    const [closeButton, detailsSection] = await Promise.all([
      screen.findByTestId('details-close'),
      screen.findByTestId('details-section'),
    ]);

    expect(closeButton).toBeInTheDocument();
    expect(detailsSection).toBeInTheDocument();

    await userEvent.click(closeButton);

    const closeButtonAfterClose = screen.queryByTestId('details-close');
    const detailsSectionAfterClose = screen.queryByTestId('details-section');

    expect(closeButtonAfterClose).toBeNull();
    expect(detailsSectionAfterClose).toBeNull();
  });
});
