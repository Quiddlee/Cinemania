import { ReactNode } from 'react';

import { render } from '@testing-library/react';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import { NextRouter } from 'next/router';

import createMockRouter from '@test/helpers/createMockRouter';

function renderWithRouter(
  ui?: ReactNode | null,
  router: Partial<NextRouter> = {},
) {
  const mockRouter = createMockRouter(router);

  render(
    <RouterContext.Provider value={mockRouter}>{ui}</RouterContext.Provider>,
  );

  return mockRouter;
}

export default renderWithRouter;
