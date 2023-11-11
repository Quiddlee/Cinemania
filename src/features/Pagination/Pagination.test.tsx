import { RefObject } from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LocomotiveScroll from 'locomotive-scroll';
import { MemoryRouter } from 'react-router-dom';
import { afterAll, afterEach, beforeAll, describe, expect, it } from 'vitest';

import Pagination from './Pagination.tsx';
import * as useUrl from '../../shared/hooks/useUrl.ts';

const mockedUseUrl = vi.spyOn(useUrl, 'default');

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
    render(
      <MemoryRouter>
        <Pagination scroll={scroll} />
      </MemoryRouter>,
    );

    const [button] = screen.getAllByTestId('pagination');

    expect(button).toBeInTheDocument();

    await userEvent.click(button);
    await userEvent.click(button);
    await userEvent.click(button);

    expect(mockedUseUrl).toHaveBeenCalled();
  });
});
