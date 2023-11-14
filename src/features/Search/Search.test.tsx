import { RefObject } from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LocomotiveScroll from 'locomotive-scroll';
import { MemoryRouter } from 'react-router-dom';
import { afterAll, afterEach, beforeAll, expect } from 'vitest';

import Search from './Search.tsx';
import { SEARCH_TEST_VALUE } from '../../test/const/const.ts';
import renderWithRouter from '../../test/helpers/RenderWithRouter.tsx';

let scroll: RefObject<LocomotiveScroll>;

const mockedSetItem = vi.spyOn(localStorage, 'setItem');
const mockedGetItem = vi.spyOn(localStorage, 'getItem');

describe('Search', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  beforeAll(() => {
    scroll = { current: new LocomotiveScroll() };
  });

  afterAll(() => {
    scroll.current?.destroy();
  });

  it('should save the entered value to the local storage when clicking on the search button', async () => {
    render(
      <MemoryRouter>
        <Search scroll={scroll} />
      </MemoryRouter>,
    );

    await userEvent.click(screen.getByRole('button'));

    expect(mockedSetItem).toHaveBeenCalled();
  });

  it('should retrieves the value from the local storage upon mounting', async () => {
    renderWithRouter();

    await userEvent.type(screen.getByTestId('search-input'), SEARCH_TEST_VALUE);
    await userEvent.click(screen.getByRole('button'));

    expect(mockedGetItem).toHaveBeenCalled();
    expect(screen.getByTestId('search-input')).toHaveValue(SEARCH_TEST_VALUE);
  });
});
