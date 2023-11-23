import { afterEach, describe, vi } from 'vitest';

// const mockedSetItem = vi.spyOn(localStorage, 'setItem');
// const mockedGetItem = vi.spyOn(localStorage, 'getItem');

describe('Search', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  // it('should save the entered value to the local storage when clicking on the search button', async () => {
  //   renderProvider(<Search scroll={scroll} />);
  //
  //   await userEvent.click(screen.getByRole('button'));
  //
  //   expect(mockedSetItem).toHaveBeenCalled();
  // });
  //
  // it('should retrieves the value from the local storage upon mounting', async () => {
  //   renderProvider(<Search scroll={scroll} />);
  //
  //   await userEvent.type(screen.getByTestId('search-input'), SEARCH_TEST_VALUE);
  //   await userEvent.click(screen.getByRole('button'));
  //
  //   expect(mockedGetItem).toHaveBeenCalled();
  //   expect(screen.getByTestId('search-input')).toHaveValue(SEARCH_TEST_VALUE);
  // });
});
