import { screen } from '@testing-library/react';
import LocomotiveScroll from 'locomotive-scroll';
import { describe, expect, it } from 'vitest';

import MovieList from './MovieList.tsx';
import Movie from '../../entities/movie/ui/Movie.tsx';
import createMockSearchContext from '../../test/helpers/createMockSearchContext.ts';
import renderWithRouter from '../../test/helpers/RenderWithRouter.tsx';
import * as useSearch from '../Search/hooks/useSearch.ts';

const mockedUseSearch = vi.spyOn(useSearch, 'default');
const scroll = { current: new LocomotiveScroll() };

describe('MovieList', () => {
  it('Creates an empty movie list', () => {
    mockedUseSearch.mockReturnValue(createMockSearchContext(null));

    renderWithRouter(
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

  it('Creates the movie list with movies', () => {
    mockedUseSearch.mockReturnValue(createMockSearchContext());

    renderWithRouter(
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
