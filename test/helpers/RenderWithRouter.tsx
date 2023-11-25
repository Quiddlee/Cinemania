import { ReactNode } from 'react';

import { render } from '@testing-library/react';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import { NextRouter } from 'next/router';

import createMockRouter from '@test/helpers/createMockRouter';

function renderWithRouter(
  ui?: ReactNode | null,
  router: Partial<NextRouter> = {},
) {
  render(
    <RouterContext.Provider value={createMockRouter(router)}>
      {ui}
    </RouterContext.Provider>,
  );
}

export default renderWithRouter;
