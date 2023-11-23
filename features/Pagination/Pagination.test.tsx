import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Pagination from '@features/Pagination/Pagination';
import { mockMovies } from '@test/mocks/data';
import { afterEach, describe, expect, it, vi } from 'vitest';

import * as useGetMovieList from '../../shared/hooks/useGetMovieList';
import * as useUrl from '../../shared/hooks/useUrl';

const mockedUseUrl = vi.spyOn(useUrl, 'default');
const mockedUseGetMovieList = vi.spyOn(useGetMovieList, 'default');
const totalResults = 40;

describe('Pagination', () => {
  afterEach(() => void vi.clearAllMocks());

  it('should update URL query parameter when page changes', async () => {
    mockedUseGetMovieList.mockReturnValue({
      movieList: mockMovies,
      totalResults,
    });

    render(<Pagination />);

    const [button] = screen.getAllByTestId('pagination');

    expect(button).toBeInTheDocument();

    await userEvent.click(button);
    await userEvent.click(button);
    await userEvent.click(button);

    expect(mockedUseUrl).toHaveBeenCalled();
  });
});
