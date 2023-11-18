import { RefObject } from 'react';

import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LocomotiveScroll from 'locomotive-scroll';
import { afterAll, afterEach, beforeAll, describe, expect, it } from 'vitest';

import Pagination from './Pagination.tsx';
import * as useGetMovieList from '../../shared/hooks/useGetMovieList.ts';
import * as useUrl from '../../shared/hooks/useUrl.ts';
import renderWithRouterProvider from '../../test/helpers/renderWithRouterProvider.tsx';
import { mockMovies } from '../../test/mocks/data.ts';

const mockedUseUrl = vi.spyOn(useUrl, 'default');
const mockedUseGetMovieList = vi.spyOn(useGetMovieList, 'default');
const totalResults = 40;
let scroll: RefObject<LocomotiveScroll>;

describe('Pagination', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  beforeAll(() => {
    scroll = { current: new LocomotiveScroll() };
  });

  afterAll(() => {
    scroll.current?.destroy();
  });

  it('should update URL query parameter when page changes', async () => {
    mockedUseGetMovieList.mockReturnValue({
      movieList: mockMovies,
      totalResults,
    });

    renderWithRouterProvider(<Pagination scroll={scroll} />);

    const [button] = screen.getAllByTestId('pagination');

    expect(button).toBeInTheDocument();

    await userEvent.click(button);
    await userEvent.click(button);
    await userEvent.click(button);

    expect(mockedUseUrl).toHaveBeenCalled();
  });
});
